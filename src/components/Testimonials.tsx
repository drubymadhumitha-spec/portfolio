import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '../types';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Mitchell',
      role: 'Homeowner',
      content:
        'Working with Elegant Interiors was an absolute dream. They transformed our dated living room into a sophisticated space that perfectly captures our style. The attention to detail and professionalism exceeded all expectations.',
      imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
    },
    {
      id: '2',
      name: 'James Anderson',
      role: 'Business Owner',
      content:
        'Our office redesign has completely transformed how our team works. The design is not only beautiful but incredibly functional. Client meetings have never been more impressive. Highly recommend their services!',
      imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
    },
    {
      id: '3',
      name: 'Emily Chen',
      role: 'Interior Design Enthusiast',
      content:
        'From the initial consultation to final reveal, every step was seamless. They listened to our needs and delivered a space that feels both luxurious and livable. Our home has become our sanctuary.',
      imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
    },
    {
      id: '4',
      name: 'Michael Roberts',
      role: 'Restaurant Owner',
      content:
        'The team brought our vision to life in ways we never imagined. The ambiance they created has significantly enhanced our customers dining experience. Our restaurant has never looked better or felt more inviting.',
      imageUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-warmgray-50 to-eggshell relative overflow-hidden"
      id="testimonials"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border-2 border-gold rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-navy rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="font-sans text-lg text-warmgray-600">
            Trusted by homeowners and businesses alike
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].imageUrl}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-gold shadow-lg"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                <p className="font-sans text-lg text-warmgray-700 mb-6 italic leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                <div>
                  <h4 className="font-serif text-xl text-navy font-semibold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="font-sans text-sm text-warmgray-500">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white text-navy p-3 rounded-full shadow-lg hover:bg-gold hover:text-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white text-navy p-3 rounded-full shadow-lg hover:bg-gold hover:text-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-gold w-8' : 'bg-warmgray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
