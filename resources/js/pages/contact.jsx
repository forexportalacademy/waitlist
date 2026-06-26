import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Mail, Globe, Clock } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Contact() {
    const { appName, flash } = usePage().props;
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const submit = (event) => {
        event.preventDefault();
        post('/contact', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <Head title={`Contact Us - ${appName}`} />
            <div className="min-h-screen bg-background text-foreground">
                <Navbar />
                <main className="relative mx-auto max-w-3xl px-6 py-16">
                    <div className="absolute left-6 top-12 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />
                    <div className="absolute right-6 top-40 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />

                    <header className="relative">
                        <h1 className="text-3xl font-semibold sm:text-4xl">Contact Us</h1>
                        <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
                            We&rsquo;d love to hear from you. If you have questions about our educational content, trading
                            resources, website services, or need assistance, please feel free to contact us using the
                            information below.
                        </p>
                    </header>

                    <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl border border-border p-5">
                            <Mail className="h-5 w-5 text-primary" />
                            <h3 className="mt-3 text-sm font-semibold text-foreground">Email</h3>
                            <a
                                href="mailto:contact@forexportalacademy.net"
                                className="mt-1 block break-words text-sm text-primary hover:underline"
                            >
                                contact@forexportalacademy.net
                            </a>
                        </div>
                        <div className="rounded-2xl border border-border p-5">
                            <Globe className="h-5 w-5 text-primary" />
                            <h3 className="mt-3 text-sm font-semibold text-foreground">Website</h3>
                            <p className="mt-1 text-sm text-foreground/70">ForexPortalAcademy.net</p>
                        </div>
                        <div className="rounded-2xl border border-border p-5">
                            <Clock className="h-5 w-5 text-primary" />
                            <h3 className="mt-3 text-sm font-semibold text-foreground">Business Hours</h3>
                            <p className="mt-1 text-sm text-foreground/70">Mon &ndash; Fri: 9:00 AM &ndash; 5:00 PM (WAT)</p>
                            <p className="text-sm text-foreground/70">Sat &ndash; Sun: Closed</p>
                        </div>
                    </div>

                    <div className="relative mt-8 space-y-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
                        <p>
                            For general inquiries, technical support, partnership opportunities, or feedback, please send us a
                            message and our team will respond as soon as possible. You may also connect with our trading
                            community through our official Telegram channels and social media platforms.
                        </p>
                    </div>

                    <section className="relative mt-10">
                        <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Send us a message</h2>

                        {wasSuccessful && flash?.success ? (
                            <div className="mt-4 rounded-2xl border border-primary/30 bg-primary/5 p-5 text-sm leading-relaxed text-foreground/80 whitespace-pre-line">
                                {flash.success}
                            </div>
                        ) : (
                            <form onSubmit={submit} className="mt-4 space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="text-xs font-semibold text-muted-foreground">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            onChange={(event) => setData('name', event.target.value)}
                                            className="mt-1 w-full rounded-xl border border-border px-4 py-3 text-sm"
                                        />
                                        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label className="text-xs font-semibold text-muted-foreground">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            onChange={(event) => setData('email', event.target.value)}
                                            className="mt-1 w-full rounded-xl border border-border px-4 py-3 text-sm"
                                        />
                                        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-muted-foreground">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={data.subject}
                                        onChange={(event) => setData('subject', event.target.value)}
                                        className="mt-1 w-full rounded-xl border border-border px-4 py-3 text-sm"
                                    />
                                    {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-muted-foreground">Message</label>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        value={data.message}
                                        onChange={(event) => setData('message', event.target.value)}
                                        className="mt-1 w-full rounded-xl border border-border px-4 py-3 text-sm"
                                    />
                                    {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Please provide accurate contact information so we can respond to your inquiry.
                                </p>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-70"
                                >
                                    {processing ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </section>

                    <section className="relative mt-10">
                        <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Important Notice</h2>
                        <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
                            Forex Portal Academy provides educational content related to financial markets. We do not provide
                            personalized financial, investment, legal, or tax advice.
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
                            Thank you for visiting Forex Portal Academy.
                        </p>
                    </section>

                    <div className="relative mt-10">
                        <Link
                            href="/"
                            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                        >
                            Back to Home
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
