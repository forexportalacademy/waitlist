import { ArrowRight } from 'lucide-react';

export function CTASection({ setOpen }) {
    return (
        <section className="py-16 text-center text-white">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-5xl space-y-4">
                    <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                        Ready to transform your financial future?
                    </h3>
                    <p className="text-white/80 text-base md:text-lg">
                        Join thousands of successful traders who started their journey with us. Your first class is
                        completely free.
                    </p>
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="inline-flex items-center justify-center bg-accent text-primary hover:bg-accent/90 h-11 rounded-md px-6 text-sm font-semibold"
                    >
                        Start Free Class
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
