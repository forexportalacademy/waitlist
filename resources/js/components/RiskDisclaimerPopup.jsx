import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'fpa_risk_disclaimer_ack';

export function RiskDisclaimerPopup() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        try {
            if (!localStorage.getItem(STORAGE_KEY)) {
                setVisible(true);
            }
        } catch {
            setVisible(true);
        }
    }, []);

    const acknowledge = () => {
        try {
            localStorage.setItem(STORAGE_KEY, '1');
        } catch {
            // Ignore storage errors; popup simply reappears next visit.
        }
        setVisible(false);
    };

    if (!visible) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-4 sm:items-center">
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
                <h2 className="text-lg font-bold text-foreground sm:text-xl">Risk Disclaimer</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Trading forex, CFDs, cryptocurrencies, and other financial instruments involves significant risk and may
                    not be suitable for all investors. The content on this site is for educational and informational purposes
                    only and does not constitute financial, investment, legal, or tax advice. You may lose some or all of your
                    capital, past performance is not a guarantee of future results, and any trading decisions you make are
                    solely your responsibility. By using this site, you acknowledge that you understand and accept these risks.
                </p>
                <div className="mt-6 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
                    <Link
                        href="/risk-disclaimer"
                        className="text-center text-sm font-medium text-primary hover:underline"
                    >
                        Read full disclaimer
                    </Link>
                    <button
                        type="button"
                        onClick={acknowledge}
                        className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                    >
                        I Understand &amp; Accept
                    </button>
                </div>
            </div>
        </div>
    );
}
