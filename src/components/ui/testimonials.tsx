import ShamirLogo from '@/assets/shamir-logo.png';
import { ReactNode } from "react";

// This is the original Testimonials component that we're not supposed to modify
// It's a placeholder for what would typically be a read-only component
export const Testimonials = () => {
  const testimonials = [
    {
      id: "t1",
      quote: "Shamir is the only messaging app I trust with truly sensitive communications.",
      author: "User#8A42F1"
    },
    {
      id: "t2",
      quote: "The self-destructing messages feature gives me peace of mind I've never had with other apps.",
      author: "User#C39DE0"
    },
    {
      id: "t3",
      quote: "Finally, a messenger that delivers on its privacy promises without compromising usability.",
      author: "User#7B21E9"
    }
  ];

  return (
    <section className="py-24 px-4 bg-shamir-dark">
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-3xl md:text-4xl mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            What Our Users Say
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-shamir-darker/60 backdrop-blur-md rounded-xl p-6 border border-white/5 hover:border-shamir-neon/20 transition-all duration-300"
            >
              <blockquote className="text-gray-300 mb-4">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <img src={ShamirLogo} alt="Shamir Logo" className="w-8 h-8" />
                <cite className="text-sm text-gray-400 not-italic font-mono">{testimonial.author}</cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
