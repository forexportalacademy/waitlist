import { Link } from '@inertiajs/react';
import { ChevronDown } from 'lucide-react';

export function Navbar({ transparent = false }) {
    const navClasses = transparent
        ? 'fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-primary/90 to-transparent backdrop-blur-sm'
        : 'fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200';

    const textClasses = transparent
        ? 'text-primary-foreground/90 hover:text-accent'
        : 'text-gray-900 hover:text-blue-600';

    return (
        <nav className={navClasses}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center h-16">
                    <Link href="/" className={transparent ? 'text-xl font-bold text-primary-foreground' : ''}>
                        {transparent ? (
                            <img src="/logo-white.png" alt="Forex Portal" className="h-8 w-auto" />
                        ) : (
                            <span className="text-xl font-bold text-gray-900">Forex Portal</span>
                        )}
                    </Link>

                    <div className="ml-auto hidden md:flex items-center space-x-8">
                        <Link href="/courses" className={`${textClasses} transition-colors font-medium`}>
                            Courses
                        </Link>

                        <div className={`flex items-center gap-1 ${textClasses} transition-colors font-medium`}>
                            Forex
                            <ChevronDown className="h-4 w-4" />
                        </div>

                        <Link href="/mamba75" className={`${textClasses} transition-colors font-medium`}>
                            Mamba75 Robot
                        </Link>

                        <Link href="/events" className={`${textClasses} transition-colors font-medium`}>
                            Events
                        </Link>
                    </div>

                    <div className="flex items-center gap-4"></div>
                </div>
            </div>
        </nav>
    );
}
