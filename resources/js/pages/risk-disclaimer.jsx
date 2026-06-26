import { Head, Link, usePage } from '@inertiajs/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

function Section({ title, children }) {
    return (
        <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">{title}</h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
                {children}
            </div>
        </section>
    );
}

export default function RiskDisclaimer() {
    const { appName } = usePage().props;

    return (
        <>
            <Head title={`Risk Disclaimer - ${appName}`} />
            <div className="min-h-screen bg-background text-foreground">
                <Navbar />
                <main className="relative mx-auto max-w-3xl px-6 py-16">
                    <div className="absolute left-6 top-12 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />
                    <div className="absolute right-6 top-40 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />

                    <header className="relative">
                        <h1 className="text-3xl font-semibold sm:text-4xl">Risk Disclaimer</h1>
                        <p className="mt-2 text-sm text-foreground/60">Last Updated: June 24, 2026</p>
                    </header>

                    <div className="relative">
                        <Section title="General Risk Warning">
                            <p>
                                Forex Portal Academy provides educational content, market analysis, trading ideas, and related
                                information for educational and informational purposes only.
                            </p>
                            <p>
                                Trading foreign exchange (Forex), Contracts for Difference (CFDs), commodities,
                                cryptocurrencies, indices, and other financial instruments involves a high level of risk and
                                may not be suitable for all investors.
                            </p>
                            <p>
                                You should carefully consider your financial situation, investment objectives, level of
                                experience, and risk tolerance before participating in any financial market.
                            </p>
                        </Section>

                        <Section title="No Financial Advice">
                            <p>
                                The information provided on ForexPortalAcademy.net, our Telegram channels, social media
                                accounts, webinars, videos, emails, courses, and any other communication channels is not
                                financial, investment, legal, tax, or professional advice.
                            </p>
                            <p>Nothing published by Forex Portal Academy should be interpreted as:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Investment advice</li>
                                <li>Financial advice</li>
                                <li>Trading recommendations</li>
                                <li>Solicitation to buy or sell any financial instrument</li>
                            </ul>
                            <p>
                                Users should conduct their own research and seek independent professional advice before making
                                any investment or trading decisions.
                            </p>
                        </Section>

                        <Section title="Risk of Loss">
                            <p>Trading financial markets carries significant risk. You acknowledge and accept that:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>You may lose part or all of your invested capital.</li>
                                <li>Trading outcomes cannot be guaranteed.</li>
                                <li>Market conditions can change rapidly.</li>
                                <li>Past performance does not guarantee future results.</li>
                                <li>Leverage can magnify both profits and losses.</li>
                            </ul>
                            <p>Never trade with money you cannot afford to lose.</p>
                        </Section>

                        <Section title="No Guarantee of Profits">
                            <p>Forex Portal Academy does not guarantee:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Profits</li>
                                <li>Income generation</li>
                                <li>Successful trades</li>
                                <li>Account growth</li>
                                <li>Specific trading results</li>
                            </ul>
                            <p>
                                Any examples, testimonials, case studies, screenshots, performance records, or success stories
                                shared through our platforms are provided for illustrative purposes only and should not be
                                interpreted as guarantees of future performance.
                            </p>
                            <p>Individual results will vary.</p>
                        </Section>

                        <Section title="Educational Content Only">
                            <p>
                                All educational materials, trading setups, technical analysis, forecasts, and market commentary
                                are intended solely to help users understand financial markets.
                            </p>
                            <p>Users remain solely responsible for all trading and investment decisions they make.</p>
                        </Section>

                        <Section title="Accuracy of Information">
                            <p>
                                While we strive to provide accurate and up-to-date information, Forex Portal Academy makes no
                                representations or warranties regarding:
                            </p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Accuracy</li>
                                <li>Completeness</li>
                                <li>Reliability</li>
                                <li>Timeliness</li>
                            </ul>
                            <p>Information may become outdated without notice.</p>
                        </Section>

                        <Section title="Third-Party Services">
                            <p>
                                Our Website may contain links to third-party brokers, software providers, financial platforms,
                                or external websites.
                            </p>
                            <p>Forex Portal Academy is not responsible for:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Third-party products or services</li>
                                <li>Broker performance</li>
                                <li>Trading platform functionality</li>
                                <li>Third-party content or claims</li>
                            </ul>
                            <p>Users engage with third-party services entirely at their own discretion and risk.</p>
                        </Section>

                        <Section title="Limitation of Liability">
                            <p>
                                To the maximum extent permitted by law, Forex Portal Academy, its owners, employees,
                                contractors, affiliates, and partners shall not be liable for any losses, damages, costs, or
                                expenses arising from:
                            </p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Trading activities</li>
                                <li>Investment decisions</li>
                                <li>Reliance on information provided</li>
                                <li>Website interruptions</li>
                                <li>Technical failures</li>
                                <li>Errors or omissions in content</li>
                            </ul>
                            <p>Users assume full responsibility for any financial decisions they make.</p>
                        </Section>

                        <Section title="Regulatory Notice">
                            <p>
                                Forex Portal Academy is an educational platform and does not provide regulated financial
                                services, investment management, portfolio management, brokerage services, or financial
                                advisory services unless expressly stated otherwise.
                            </p>
                            <p>
                                Users are responsible for ensuring compliance with all applicable laws and regulations in their
                                jurisdiction.
                            </p>
                        </Section>

                        <Section title="User Acknowledgment">
                            <p>By accessing ForexPortalAcademy.net or using any of our services, you acknowledge that:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>You understand the risks associated with trading financial markets.</li>
                                <li>You are solely responsible for your trading and investment decisions.</li>
                                <li>You accept full responsibility for any financial gains or losses incurred.</li>
                                <li>You understand that no guarantees of profit or success have been made.</li>
                            </ul>
                        </Section>

                        <Section title="Contact Information">
                            <p>If you have any questions regarding this Risk Disclaimer, please contact:</p>
                            <p>
                                Email:{' '}
                                <a
                                    href="mailto:support@forexportalacademy.net"
                                    className="font-medium text-primary hover:underline"
                                >
                                    support@forexportalacademy.net
                                </a>
                            </p>
                            <p>Website: ForexPortalAcademy.net</p>
                        </Section>

                        <div className="mt-10">
                            <Link
                                href="/"
                                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
