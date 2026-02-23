import { Send, Twitter, Youtube } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative pb-0">
            <div className="relative mx-auto px-[84px]">
                <div className="relative overflow-hidden rounded-t-[28px] bg-black px-8 py-12 pb-28 text-white shadow-2xl">
                    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
                        <div className="space-y-4">
                            <img src="/logo-white.png" alt="Forex Portal" className="h-8 w-auto" />
                            <p className="text-sm text-white/70 max-w-xs">
                                Lagos, Nigeria&apos;s premier Forex &amp; Synthetic Indices trading academy. Learn, trade,
                                and succeed with us.
                            </p>
                        </div>

                        <div className="space-y-3 text-sm text-white/70">
                            <h4 className="text-white text-base font-semibold">Services</h4>
                            <p>Forex classes</p>
                            <p>Synthetic indices</p>
                            <p>Trading signals</p>
                            <p>Copy trading</p>
                            <p>Mamba75 robot</p>
                        </div>

                        <div className="space-y-3 text-sm text-white/70">
                            <h4 className="text-white text-base font-semibold">Quick links</h4>
                            <p>Dashboard</p>
                            <p>My courses</p>
                            <p>Settings</p>
                            <p>Terms &amp; Conditions</p>
                            <p>Privacy policy</p>
                        </div>

                        <div className="space-y-3 text-sm text-white/70">
                            <h4 className="text-white text-base font-semibold">Contact us</h4>
                            <p>Lagos, Nigeria</p>
                            <p>+234 800 000 0000</p>
                            <p>contact@forexportal.ng</p>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col items-start justify-between gap-6 text-sm text-white/60 md:flex-row md:items-center">
                        <p>Forex Portal © 2026. All Rights Reserved</p>
                        <div className="flex items-center gap-4 text-white/70">
                            <Twitter className="h-5 w-5" />
                            <Youtube className="h-5 w-5" />
                            <Send className="h-5 w-5" />
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 text-center text-[200px] font-bold text-white/5 leading-none">
                        Forex Portal
                    </div>
                </div>
            </div>
        </footer>
    );
}
