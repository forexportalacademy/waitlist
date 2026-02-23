import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Adebayo Johnson',
        role: 'Forex trader',
        content:
            'The mentorship program completely transformed my trading journey. I went from losing money consistently to becoming a profitable trader in just 3 months.',
        rating: 5,
        avatar: '/images/know-your-mentor.png',
    },
    {
        name: 'Chioma Okonkwo',
        role: 'Student',
        content:
            'Clear explanations, practical strategies, and constant support. This is exactly what I needed to start my trading career. Highly recommended!',
        rating: 5,
        avatar: '/images/know-your-mentor.png',
    },
    {
        name: 'Emmanuel Nwachukwu',
        role: 'Business owner',
        content:
            'I was skeptical at first, but the results speak for themselves. The synthetic indices course opened up a whole new income stream for me.',
        rating: 5,
        avatar: '/images/know-your-mentor.png',
    },
];

export function TestimonialsSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Students Say</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Join hundreds of successful traders who have transformed their financial future
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-[#FFF7E6] p-8"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            <p className="text-foreground leading-relaxed mb-8 text-[15px]">
                                &quot;{testimonial.content}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
