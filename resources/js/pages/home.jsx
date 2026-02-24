import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { ArrowRight, X } from 'lucide-react';
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
    const [formSuccess, setFormSuccess] = useState(false);
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
            setFormSuccess(true);
            setToastVisible(false);
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
                                        className="inline-flex items-center justify-center bg-accent text-accent-foreground hover:bg-accent/90 h-12 rounded-full px-8 py-3 text-sm font-medium w-full sm:w-auto"
                                    >
                                        Start Free Class
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </button>
                                    <a
                                        href="https://wa.link/tf3zia"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center border border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent rounded-full px-8 py-3 w-full sm:w-auto"
                                    >
                                        <svg className="mr-2 h-5 w-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.686z"/>
                                        </svg>
                                        Contact Us
                                    </a>
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
                        <CTASection setOpen={setOpen} />
                        <Footer />
                    </div>
                </section>
            </div>

            {open && (
                <div className="fixed inset-0 z-50 grid grid-cols-1 bg-primary/90 lg:grid-cols-[1fr_1.1fr] overflow-hidden">
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

                    <div className="relative flex h-full items-center justify-center bg-white px-3 sm:px-6 py-6 sm:py-12 overflow-y-auto max-w-fit">
                        <button
                            type="button"
                            onClick={() => {
                                setOpen(false);
                                setFormSuccess(false);
                                reset();
                            }}
                            className="absolute right-6 top-6 rounded-full border border-border bg-primary p-2 text-white shadow hover:bg-primary/90"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="w-full max-w-[calc(100vw-1.5rem)] sm:max-w-xl px-1 sm:px-0">
                            {formSuccess ? (
                                <div className="text-center py-8">
                                    <p className="text-muted-foreground mb-6">
                                        Thanks for joining the waitlist! Check your email for course details and confirmation.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setOpen(false);
                                            setFormSuccess(false);
                                            reset();
                                        }}
                                        className="rounded-xl bg-accent px-6 py-3 text-white text-sm font-semibold text-primary hover:bg-accent/90"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <>
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
                                    <p className="mt-1 text-xs text-amber-600">
                                        <span className='text-shadow-amber-200'>Please check your email before submission to confirm your registration for the free course.</span>
                                    </p>
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
                                    className="w-full rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-primary/90 disabled:opacity-70"
                                >
                                    Submit
                                </button>
                            </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
