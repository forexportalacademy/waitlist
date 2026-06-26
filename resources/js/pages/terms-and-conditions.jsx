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

export default function TermsAndConditions() {
    const { appName } = usePage().props;

    return (
        <>
            <Head title={`Terms and Conditions - ${appName}`} />
            <div className="min-h-screen bg-background text-foreground">
                <Navbar />
                <main className="relative mx-auto max-w-3xl px-6 py-16">
                    <div className="absolute left-6 top-12 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />
                    <div className="absolute right-6 top-40 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />

                    <header className="relative">
                        <h1 className="text-3xl font-semibold sm:text-4xl">Terms and Conditions</h1>
                        <p className="mt-2 text-sm text-foreground/60">Last Updated: June 24, 2026</p>
                    </header>

                    <div className="relative">
                        <p className="mt-6 text-sm leading-relaxed text-foreground/70 sm:text-base">
                            Welcome to Forex Portal Academy (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                            &ldquo;us&rdquo;). By accessing or using ForexPortalAcademy.net (&ldquo;Website&rdquo;), you agree
                            to comply with and be bound by the following Terms and Conditions. If you do not agree with these
                            terms, please do not use our Website or services.
                        </p>

                        <Section title="1. Acceptance of Terms">
                            <p>
                                By accessing this Website, joining our Telegram channels, subscribing to our communications,
                                or using any of our services, you acknowledge that you have read, understood, and agreed to
                                these Terms and Conditions.
                            </p>
                        </Section>

                        <Section title="2. Educational Purpose Only">
                            <p>
                                All information provided on this Website, through Telegram channels, emails, webinars, courses,
                                social media, and any other communication channels is for educational and informational
                                purposes only.
                            </p>
                            <p>Forex Portal Academy does not provide financial, investment, legal, or tax advice.</p>
                            <p>
                                Any trading ideas, market analysis, signals, strategies, or educational materials should not be
                                considered financial advice or a recommendation to buy or sell any financial instrument.
                            </p>
                        </Section>

                        <Section title="3. Trading Risk Warning">
                            <p>
                                Trading foreign exchange (Forex), CFDs, cryptocurrencies, commodities, indices, and other
                                financial instruments involves substantial risk and may not be suitable for all investors.
                            </p>
                            <p>You acknowledge that:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Trading involves the risk of financial loss.</li>
                                <li>Past performance does not guarantee future results.</li>
                                <li>You are solely responsible for your trading decisions.</li>
                                <li>You should seek independent financial advice before making investment decisions.</li>
                            </ul>
                            <p>
                                Forex Portal Academy shall not be liable for any trading losses or damages resulting from the
                                use of information provided through our services.
                            </p>
                        </Section>

                        <Section title="4. No Guarantee of Results">
                            <p>We do not guarantee:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Profitability of any trading strategy.</li>
                                <li>Accuracy or completeness of market information.</li>
                                <li>Specific financial outcomes.</li>
                                <li>Future performance based on historical results.</li>
                            </ul>
                            <p>
                                Any testimonials, success stories, or examples shown on the Website are not guarantees of
                                future performance.
                            </p>
                        </Section>

                        <Section title="5. User Responsibilities">
                            <p>By using our Website and services, you agree to:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Provide accurate information when requested.</li>
                                <li>Use the Website lawfully.</li>
                                <li>Not engage in activities that could harm the Website or other users.</li>
                                <li>Comply with applicable laws and regulations in your jurisdiction.</li>
                            </ul>
                        </Section>

                        <Section title="6. Intellectual Property">
                            <p>All content on ForexPortalAcademy.net, including but not limited to:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Text</li>
                                <li>Graphics</li>
                                <li>Videos</li>
                                <li>Logos</li>
                                <li>Educational materials</li>
                                <li>Trading resources</li>
                            </ul>
                            <p>is the property of Forex Portal Academy unless otherwise stated.</p>
                            <p>
                                You may not copy, reproduce, distribute, sell, or modify any content without prior written
                                permission.
                            </p>
                        </Section>

                        <Section title="7. Third-Party Links">
                            <p>
                                Our Website may contain links to third-party websites, brokers, software providers, social
                                media platforms, or other external resources.
                            </p>
                            <p>We do not control and are not responsible for:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Content on third-party websites.</li>
                                <li>Privacy practices of third parties.</li>
                                <li>Products or services offered by third parties.</li>
                            </ul>
                            <p>Users access third-party websites at their own risk.</p>
                        </Section>

                        <Section title="8. Limitation of Liability">
                            <p>
                                To the fullest extent permitted by law, Forex Portal Academy, its owners, employees,
                                affiliates, and partners shall not be liable for any direct, indirect, incidental,
                                consequential, or special damages arising from:
                            </p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Use of the Website.</li>
                                <li>Trading activities.</li>
                                <li>Reliance on educational materials.</li>
                                <li>Service interruptions.</li>
                                <li>Technical errors or inaccuracies.</li>
                            </ul>
                        </Section>

                        <Section title="9. Disclaimer of Warranties">
                            <p>
                                The Website and all services are provided on an &ldquo;as is&rdquo; and &ldquo;as
                                available&rdquo; basis.
                            </p>
                            <p>We make no warranties regarding:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Availability of the Website.</li>
                                <li>Accuracy of information.</li>
                                <li>Uninterrupted access.</li>
                                <li>Error-free operation.</li>
                            </ul>
                        </Section>

                        <Section title="10. Account Termination">
                            <p>
                                We reserve the right to suspend or terminate access to our Website, Telegram communities, or
                                services without notice if a user violates these Terms and Conditions.
                            </p>
                        </Section>

                        <Section title="11. Modifications to Services">
                            <p>We reserve the right to:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Modify services.</li>
                                <li>Change content.</li>
                                <li>Discontinue features.</li>
                                <li>Update pricing or offerings.</li>
                            </ul>
                            <p>Such changes may occur without prior notice.</p>
                        </Section>

                        <Section title="12. Privacy">
                            <p>
                                Your use of the Website is also governed by our{' '}
                                <Link href="/privacy-policy" className="font-medium text-primary hover:underline">
                                    Privacy Policy
                                </Link>
                                . By using the Website, you consent to the collection and use of information as described in
                                our Privacy Policy.
                            </p>
                        </Section>

                        <Section title="13. Governing Law">
                            <p>
                                These Terms and Conditions shall be governed by and interpreted in accordance with applicable
                                laws.
                            </p>
                            <p>
                                Any disputes arising from the use of this Website shall be resolved through the appropriate
                                legal processes and courts with proper jurisdiction.
                            </p>
                        </Section>

                        <Section title="14. Contact Information">
                            <p>If you have questions regarding these Terms and Conditions, please contact us:</p>
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

                        <Section title="15. Agreement">
                            <p>
                                By accessing or using ForexPortalAcademy.net, you acknowledge that you have read, understood,
                                and agreed to these Terms and Conditions.
                            </p>
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
