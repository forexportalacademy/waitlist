import { ArrowRight } from 'lucide-react';

export function ServicesSection() {
    const services = [
        {
            title: 'Forex Classes',
            description:
                'Master currency trading with our comprehensive Forex courses. Available in free and premium tiers.',
            icon: '/images/bar-chart-2.png',
            badge: 'Popular',
            link: '#',
        },
        {
            title: 'Synthetic Indices',
            description: 'Learn to trade synthetic indices with our specialized courses. 24/7 market access.',
            icon: '/images/candlestick-chart.png',
            badge: 'New',
            link: '#',
        },
        {
            title: 'Trading Signals',
            description: 'Get premium trading signals delivered directly to you. High accuracy, real-time alerts.',
            icon: '/images/bar-chart.png',
            badge: 'Subscription',
            link: '#',
        },
        {
            title: 'Copytrading',
            description: 'Copy trades from successful traders automatically. Passive income made simple.',
            icon: '/images/search-insights.png',
            badge: 'Subscription',
            link: '#',
        },
        {
            title: 'Mamba75 Robot',
            description: 'Our proprietary automated trading robot. Set it and let it trade for you 24/7.',
            icon: '/images/cognition.png',
            badge: 'One-time',
            link: '#',
        },
    ];

    return (
        <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-foreground mb-4">Our services</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Every service you need for successful trading. From beginner courses to advanced automation
                        tools.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 auto-rows-fr">
                        {services.slice(0, 3).map((service, index) => (
                            <div key={index} className="relative">
                                <div className="bg-background rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 h-full flex flex-col">
                                    <div className="absolute top-6 right-6">
                                        <span className="bg-[#DFA400]/15 text-[#DFA400] px-3 py-1 rounded-full text-xs font-semibold">
                                            {service.badge}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                                    <div className="w-[250px] h-[250px] rounded-3xl flex items-center justify-center mb-6">
                                        <img src={service.icon} alt={service.title} className="w-[190px] h-[190px]" />
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed mb-8 text-base">{service.description}</p>

                                    <a
                                        href="https://wa.link/tf3zia"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto inline-flex items-center justify-center w-full rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
                                    >
                                        Learn More
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto auto-rows-fr">
                        {services.slice(3).map((service, index) => (
                            <div key={index + 3} className="relative">
                                <div className="bg-background rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 h-full flex flex-col">
                                    <div className="absolute top-6 right-6">
                                        <span className="bg-[#DFA400]/15 text-[#DFA400] px-3 py-1 rounded-full text-xs font-semibold">
                                            {service.badge}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                                    <div className="w-[250px] h-[250px] rounded-3xl flex items-center justify-center mb-6">
                                        <img src={service.icon} alt={service.title} className="w-[190px] h-[190px]" />
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed mb-8 text-base">{service.description}</p>

                                    <a
                                        href="https://wa.link/tf3zia"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto inline-flex items-center justify-center w-full rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
                                    >
                                        Learn More
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
