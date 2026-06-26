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

export default function PrivacyPolicy() {
    const { appName } = usePage().props;

    return (
        <>
            <Head title={`Privacy Policy - ${appName}`} />
            <div className="min-h-screen bg-background text-foreground">
                <Navbar />
                <main className="relative mx-auto max-w-3xl px-6 py-16">
                    <div className="absolute left-6 top-12 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />
                    <div className="absolute right-6 top-40 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />

                    <header className="relative">
                        <h1 className="text-3xl font-semibold sm:text-4xl">Privacy Policy</h1>
                        <p className="mt-2 text-sm text-foreground/60">Last Updated: June 24, 2026</p>
                    </header>

                    <div className="relative">
                        <p className="mt-6 text-sm leading-relaxed text-foreground/70 sm:text-base">
                            Welcome to Forex Portal Academy (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
                            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose,
                            and safeguard your information when you visit ForexPortalAcademy.net and use our services.
                        </p>

                        <Section title="Information We Collect">
                            <p>We may collect the following types of information:</p>
                            <h3 className="text-base font-semibold text-foreground">Personal Information</h3>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Telegram username</li>
                                <li>Any information you voluntarily submit through forms or contact pages</li>
                            </ul>
                            <h3 className="text-base font-semibold text-foreground">Automatically Collected Information</h3>
                            <p>When you visit our website, we may automatically collect:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>IP address</li>
                                <li>Browser type</li>
                                <li>Device information</li>
                                <li>Operating system</li>
                                <li>Pages visited</li>
                                <li>Time spent on pages</li>
                                <li>Referral source</li>
                            </ul>
                        </Section>

                        <Section title="How We Use Your Information">
                            <p>We may use your information to:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Provide educational content and services</li>
                                <li>Send newsletters, updates, and promotional communications</li>
                                <li>Respond to inquiries and support requests</li>
                                <li>Improve website functionality and user experience</li>
                                <li>Analyze website traffic and marketing performance</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </Section>

                        <Section title="Cookies and Tracking Technologies">
                            <p>
                                We use cookies and similar technologies to enhance user experience and analyze website
                                traffic. These technologies may be used by us and our advertising partners.
                            </p>
                            <p>
                                You may disable cookies through your browser settings, though some website features may
                                not function properly.
                            </p>
                        </Section>

                        <Section title="Third-Party Services">
                            <p>We may use third-party services including:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Google Analytics</li>
                                <li>Google Ads</li>
                                <li>TikTok Ads</li>
                                <li>Telegram</li>
                                <li>Email marketing platforms</li>
                            </ul>
                            <p>These third parties may collect information according to their own privacy policies.</p>
                        </Section>

                        <Section title="Data Security">
                            <p>
                                We implement reasonable security measures to protect your information. However, no method
                                of transmission over the Internet or electronic storage is completely secure.
                            </p>
                        </Section>

                        <Section title="Sharing of Information">
                            <p>We do not sell, rent, or trade your personal information to third parties.</p>
                            <p>We may share information:</p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>With trusted service providers who assist in operating our website</li>
                                <li>To comply with legal requirements</li>
                                <li>To protect our rights, safety, or property</li>
                            </ul>
                        </Section>

                        <Section title="Email Communications">
                            <p>
                                If you subscribe to our mailing list, you may receive educational content, market updates,
                                and promotional offers. You may unsubscribe at any time using the unsubscribe link included
                                in our emails.
                            </p>
                        </Section>

                        <Section title="Children&rsquo;s Privacy">
                            <p>
                                Our services are not intended for individuals under the age of 18. We do not knowingly
                                collect personal information from children.
                            </p>
                        </Section>

                        <Section title="Your Rights">
                            <p>
                                Depending on your location, you may have rights regarding your personal information,
                                including:
                            </p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Access to your data</li>
                                <li>Correction of inaccurate information</li>
                                <li>Deletion of your data</li>
                                <li>Withdrawal of consent</li>
                            </ul>
                            <p>To exercise these rights, please contact us.</p>
                        </Section>

                        <Section title="External Links">
                            <p>
                                Our website may contain links to external websites, including Telegram channels, social
                                media platforms, and partner websites. We are not responsible for the privacy practices of
                                those websites.
                            </p>
                        </Section>

                        <Section title="Changes to This Privacy Policy">
                            <p>
                                We may update this Privacy Policy from time to time. Changes will be posted on this page
                                with an updated revision date.
                            </p>
                        </Section>

                        <Section title="Contact Us">
                            <p>If you have questions regarding this Privacy Policy, please contact us:</p>
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

                        <p className="mt-10 text-sm leading-relaxed text-foreground/70 sm:text-base">
                            By using this website, you agree to the terms of this Privacy Policy.
                        </p>

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
