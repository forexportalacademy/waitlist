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

export default function About() {
    const { appName } = usePage().props;

    return (
        <>
            <Head title={`About Us - ${appName}`} />
            <div className="min-h-screen bg-background text-foreground">
                <Navbar />
                <main className="relative mx-auto max-w-3xl px-6 py-16">
                    <div className="absolute left-6 top-12 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />
                    <div className="absolute right-6 top-40 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />

                    <header className="relative">
                        <h1 className="text-3xl font-semibold sm:text-4xl">About Forex Portal Academy</h1>
                    </header>

                    <div className="relative">
                        <p className="mt-6 text-sm leading-relaxed text-foreground/70 sm:text-base">
                            Welcome to Forex Portal Academy, a leading educational platform dedicated to empowering traders with
                            the knowledge, skills, and confidence needed to navigate the financial markets successfully.
                        </p>
                        <p className="mt-4 text-sm leading-relaxed text-foreground/70 sm:text-base">
                            At Forex Portal Academy, we believe that trading is more than just buying and selling
                            currencies&mdash;it is a skill that can be learned, developed, and mastered through proper education,
                            discipline, and continuous improvement. Our mission is to provide aspiring and experienced traders
                            with high-quality forex education, market insights, and practical trading strategies that help them
                            make informed decisions.
                        </p>

                        <Section title="Our Vision">
                            <p>
                                To become a trusted global community where traders gain access to reliable education, valuable
                                market knowledge, and opportunities for personal and financial growth.
                            </p>
                        </Section>

                        <Section title="Our Mission">
                            <ul className="list-disc space-y-1 pl-5">
                                <li>To simplify forex trading education for beginners and advanced traders.</li>
                                <li>To provide practical training, market analysis, and trading resources.</li>
                                <li>To help traders develop risk management and disciplined trading habits.</li>
                                <li>To build a supportive community where traders can learn, share, and grow together.</li>
                            </ul>
                        </Section>

                        <Section title="What We Offer">
                            <h3 className="text-base font-semibold text-foreground">Forex Education</h3>
                            <p>
                                Comprehensive learning resources designed to help traders understand market fundamentals,
                                technical analysis, risk management, and trading psychology.
                            </p>
                            <h3 className="text-base font-semibold text-foreground">Trading Signals</h3>
                            <p>
                                Market insights and trade ideas shared for educational and informational purposes to help
                                traders better understand market opportunities.
                            </p>
                            <h3 className="text-base font-semibold text-foreground">Community Support</h3>
                            <p>
                                Access to a growing network of traders where members can interact, learn, and exchange ideas.
                            </p>
                            <h3 className="text-base font-semibold text-foreground">Market Analysis</h3>
                            <p>
                                Regular updates, market outlooks, and educational content to help traders stay informed about
                                financial market developments.
                            </p>
                        </Section>

                        <Section title="Our Commitment">
                            <p>
                                We are committed to transparency, integrity, and continuous learning. While no trading strategy
                                guarantees profits, we strive to provide educational content and resources that help traders
                                improve their understanding of the markets and make more informed trading decisions.
                            </p>
                            <p>
                                Whether you are just beginning your trading journey or looking to refine your skills, Forex
                                Portal Academy is here to support your growth every step of the way.
                            </p>
                            <p>
                                Join our community today and take the next step toward becoming a more knowledgeable and
                                confident trader.
                            </p>
                            <p className="font-semibold text-foreground">Forex Portal Academy</p>
                            <p className="font-semibold text-foreground">Learn. Trade. Grow.</p>
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
