#!/bin/bash
set -e

echo "🚀 Starting Waitlist container..."

# Create all necessary directories first
echo "📁 Creating necessary directories..."
mkdir -p /var/www/html/storage/framework/sessions
mkdir -p /var/www/html/storage/framework/views
mkdir -p /var/www/html/storage/framework/cache
mkdir -p /var/www/html/storage/logs
mkdir -p /var/www/html/bootstrap/cache

# Set permissions
echo "🔧 Setting permissions..."
chown -R www-data:www-data /var/www/html/storage
chown -R www-data:www-data /var/www/html/bootstrap/cache  
chown -R www-data:www-data /var/www/html/public
chmod -R 755 /var/www/html/storage
chmod -R 755 /var/www/html/bootstrap/cache

# Generate application key if not set
if [ -z "$APP_KEY" ] || [ "$APP_KEY" = "base64:test" ]; then
    echo "🔑 Generating application key..."
    php artisan key:generate --force
fi

# Verify database driver is available
echo "🔍 Checking database driver..."
if ! php -m | grep -i pdo_pgsql > /dev/null; then
    echo "❌ ERROR: PDO PostgreSQL driver not found!"
    php -m | grep -i pdo
    exit 1
fi
echo "✅ PostgreSQL driver found"

# Wait for database to be ready
echo "⏳ Waiting for database connection..."
max_attempts=30
attempt=0

until php artisan db:show 2>/dev/null || [ $attempt -eq $max_attempts ]; do
    attempt=$((attempt + 1))
    echo "Attempt $attempt/$max_attempts: Waiting for database..."
    sleep 2
done

if [ $attempt -eq $max_attempts ]; then
    echo "❌ Failed to connect to database after $max_attempts attempts"
    echo "Database config: DB_HOST=${DB_HOST}, DB_PORT=${DB_PORT}, DB_DATABASE=${DB_DATABASE}"
    exit 1
fi

echo "✅ Database connection established"

# Run migrations (disabled - table already exists)
# if [ "$APP_ENV" = "production" ]; then
#     echo "📊 Running migrations..."
#     php artisan migrate --force --no-interaction
# fi

# Clear caches first
echo "🧹 Clearing caches..."
php artisan config:clear || true
php artisan cache:clear || true
php artisan view:clear || true

# Optimize application
echo "⚡ Optimizing application..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Create log directories
echo "📝 Creating log directories..."
mkdir -p /var/log/nginx /var/log/php-fpm /var/log/supervisor
touch /var/log/nginx/access.log /var/log/nginx/error.log

# Start services
echo "✅ Starting services..."
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf