import { Head, Link, usePage } from '@inertiajs/react';
import { Navbar } from '@/components/Navbar';

export default function ComingSoon({ title, description }) {
    const { appName } = usePage().props;

    return (
        <>
            <Head title={`${title} - ${appName}`} />
            <div className="min-h-screen bg-background text-foreground">
                <Navbar />
                <main className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center">
                    <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />
                    <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
                        Coming soon
                    </div>
                    <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">{title}</h1>
                    <p className="mt-3 max-w-xl text-sm text-foreground/70 sm:text-base">
                        {description}
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <Link
                            href="/"
                            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                        >
                            Back to Home
                        </Link>
                        <Link
                            href="/#waitlist"
                            className="rounded-full border border-white/40 bg-white/70 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-white"
                        >
                            Join Waitlist
                        </Link>
                    </div>
                </main>
            </div>
        </>
    );
}
