FROM php:8.4-fpm

# Install system dependencies INCLUDING libicu-dev for intl
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    libpq-dev \
    libicu-dev \
    postgresql-client \
    zip \
    unzip \
    nodejs \
    npm \
    nginx \
    supervisor \
    && rm -rf /var/lib/apt/lists/*

# Install PHP extensions - Added intl
RUN docker-php-ext-install -j$(nproc) \
    pdo \
    pdo_pgsql \
    pgsql \
    mbstring \
    exif \
    pcntl \
    bcmath \
    gd \
    zip \
    opcache \
    intl

# Verify PostgreSQL extension
RUN php -m | grep pdo_pgsql

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Create directories
RUN mkdir -p \
    bootstrap/cache \
    storage/framework/sessions \
    storage/framework/views \
    storage/framework/cache \
    storage/logs

# Copy composer files
COPY composer.json composer.lock ./

# Install PHP dependencies
RUN composer install --no-interaction --no-dev --no-scripts --no-autoloader

# Copy package files
COPY package.json package-lock.json ./

# Install Node dependencies
RUN npm ci

# Copy application files
COPY . .

# Complete composer
RUN composer dump-autoload --optimize --no-dev

# Set permissions for specific directories
RUN chown -R www-data:www-data /var/www/html/storage \
    && chown -R www-data:www-data /var/www/html/bootstrap/cache \
    && chown www-data:www-data /var/www/html/public \
    && chmod -R 755 /var/www/html/storage \
    && chmod -R 755 /var/www/html/bootstrap/cache

# Build assets
RUN npm run build

# Remove dev dependencies
RUN npm prune --production

# Copy config files
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY ./docker/start-container.sh /usr/local/bin/start-container.sh
RUN chmod +x /usr/local/bin/start-container.sh

EXPOSE 80

CMD ["/usr/local/bin/start-container.sh"]