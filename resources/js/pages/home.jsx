import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { ArrowRight, Play, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { MentorSection } from '@/components/MentorSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function Home() {
    const { flash } = usePage().props;
    const [open, setOpen] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        gender: '',
    });

    const [toastVisible, setToastVisible] = useState(false);

    useEffect(() => {
        if (flash?.success) {
            setOpen(false);
            setToastVisible(true);
            const timer = window.setTimeout(() => setToastVisible(false), 4000);
            return () => window.clearTimeout(timer);
        }
    }, [flash?.success]);

    const submit = (event) => {
        event.preventDefault();
        post('/waitlist', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <Head title="Forex Portal - Master Forex Trading">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-background">
                {toastVisible && (
                    <div className="fixed right-6 top-20 z-50 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg">
                        Registration complete. We will be in touch soon.
                    </div>
                )}
                <Navbar transparent />

                <section className="relative overflow-hidden h-screen flex items-center">
                    <div className="absolute inset-0">
                        <img src="/images/BG.png" alt="Hero Background" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
                    </div>

                    <div className="container relative mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-left">
                                <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                                    Master the art of
                                    <br />
                                    <span className="text-white">Forex Trading</span>
                                </h1>

                                <div className="mb-8 flex gap-8">
                                    <div>
                                        <div className="text-3xl lg:text-4xl font-bold text-accent">500+</div>
                                        <div className="text-base text-primary-foreground/70">Active Students</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl lg:text-4xl font-bold text-accent">95%</div>
                                        <div className="text-base text-primary-foreground/70">Success Rate</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl lg:text-4xl font-bold text-accent">24/7</div>
                                        <div className="text-base text-primary-foreground/70">Signal Support</div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-left lg:text-right">
                                <p className="mb-8 text-xl text-primary-foreground/80 sm:text-2xl max-w-md lg:ml-auto">
                                    Learn Forex & Synthetic Indices trading from industry experts. Get premium signals,
                                    automated trading robots, and certified courses to accelerate your trading journey.
                                </p>

                                <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setOpen(true)}
                                        className="inline-flex items-center justify-center bg-accent text-accent-foreground hover:bg-accent/90 h-12 rounded-md px-6 text-sm font-medium w-full sm:w-auto"
                                    >
                                        Start Free Class
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center border border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent rounded-full px-8 py-3 w-full sm:w-auto"
                                    >
                                        <Play className="mr-2 h-5 w-5 fill-current" />
                                        Watch Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <MentorSection />
                <ServicesSection />
                <TestimonialsSection />

                <section className="relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1b2a7a_0%,_#0b0f2a_45%,_#140b3a_100%)]" />
                    <div className="relative">
                        <CTASection />
                        <Footer />
                    </div>
                </section>
            </div>

            {open && (
                <div className="fixed inset-0 z-50 grid grid-cols-1 bg-primary/90 lg:grid-cols-[1fr_1.1fr]">
                    <div className="relative hidden items-center justify-center lg:flex">
                        <img src="/images/BG-auth.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
                        <div className="relative max-w-md px-8 text-primary-foreground">
                            <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70">Free class</p>
                            <h3 className="mt-4 text-4xl font-bold">Start your forex journey today.</h3>
                            <p className="mt-4 text-base text-primary-foreground/80">
                                Fill the form and we will send class access details plus your starter kit.
                            </p>
                        </div>
                    </div>

                    <div className="relative flex h-full items-center justify-center bg-white px-6 py-12">
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="absolute right-6 top-6 rounded-full border border-border bg-white p-2 text-gray-600 shadow hover:text-gray-900"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="w-full max-w-xl">
                            <h3 className="text-3xl font-bold text-foreground mb-2">Start Free Class</h3>
                            <p className="text-sm text-muted-foreground mb-8">
                                Enter your details to access the free class.
                            </p>

                            <form onSubmit={submit} className="space-y-5">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="text-xs font-semibold text-muted-foreground">First name</label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            value={data.first_name}
                                            onChange={(event) => setData('first_name', event.target.value)}
                                            className="mt-1 w-full rounded-xl border border-border px-4 py-3 text-sm"
                                        />
                                        {errors.first_name && (
                                            <p className="mt-1 text-xs text-red-600">{errors.first_name}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="text-xs font-semibold text-muted-foreground">Last name</label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            value={data.last_name}
                                            onChange={(event) => setData('last_name', event.target.value)}
                                            className="mt-1 w-full rounded-xl border border-border px-4 py-3 text-sm"
                                        />
                                        {errors.last_name && (
                                            <p className="mt-1 text-xs text-red-600">{errors.last_name}</p>
                                        )}
                                    </div>
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
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="text-xs font-semibold text-muted-foreground">Phone number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={data.phone}
                                            onChange={(event) => setData('phone', event.target.value)}
                                            className="mt-1 w-full rounded-xl border border-border px-4 py-3 text-sm"
                                        />
                                        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                                    </div>
                                    <div>
                                        <label className="text-xs font-semibold text-muted-foreground">Gender</label>
                                        <select
                                            name="gender"
                                            value={data.gender}
                                            onChange={(event) => setData('gender', event.target.value)}
                                            className="mt-1 w-full rounded-xl border border-border px-4 py-3 text-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="Female">Female</option>
                                            <option value="Male">Male</option>
                                            <option value="Other">Other</option>
                                            <option value="Prefer not to say">Prefer not to say</option>
                                        </select>
                                        {errors.gender && <p className="mt-1 text-xs text-red-600">{errors.gender}</p>}
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-primary hover:bg-accent/90 disabled:opacity-70"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
