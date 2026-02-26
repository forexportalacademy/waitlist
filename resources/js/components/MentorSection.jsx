import { Users, Award, Headphones } from 'lucide-react';

export function MentorSection() {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-foreground mb-4">Know your Mentor</h2>
                    <p className="text-muted-foreground text-lg">Learn from an experienced professional</p>
                </div>

                <div className="grid lg:grid-cols-[5fr_7fr] gap-10 max-w-6xl mx-auto items-center">
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-[420px] h-[520px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/mentor.jpeg"
                                alt="Mr. Andrew Tate - Forex Mentor"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="bg-[#000733] rounded-2xl p-10 text-white min-h-[520px] flex flex-col justify-between">
                        <h3 className="text-3xl font-bold mb-2">Mr. Andrew Tate</h3>
                        <p className="text-accent font-medium mb-6 text-lg">Professional Forex Trader & Mentor</p>

                        <p className="text-primary-foreground/90 leading-relaxed mb-8 text-base">
                            With years of experience in the forex and synthetic indices markets, our mentor has helped
                            hundreds of students achieve financial freedom through strategic trading. His practical
                            approach combines technical analysis with risk management, making complex concepts easy to
                            understand for beginners and advanced traders alike.
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-[#0F1853] rounded-lg p-4 text-center">
                                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                                <p className="text-2xl font-bold text-accent mb-1">22k+</p>
                                <p className="text-sm text-primary-foreground/70">Students trained</p>
                            </div>
                            <div className="bg-[#0F1853] rounded-lg p-4 text-center">
                                <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                                <p className="text-2xl font-bold text-accent mb-1">7+</p>
                                <p className="text-sm text-primary-foreground/70">Years experience</p>
                            </div>
                            <div className="bg-[#0F1853] rounded-lg p-4 text-center">
                                <Headphones className="h-8 w-8 text-accent mx-auto mb-2" />
                                <p className="text-2xl font-bold text-accent mb-1">24/7</p>
                                <p className="text-sm text-primary-foreground/70">Live Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
