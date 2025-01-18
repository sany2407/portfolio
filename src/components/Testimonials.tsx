import React, { useState } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        'Working with this developer was a game-changer for our project. Their expertise in MERN stack and low-code solutions helped us launch our platform in record time.',
      name: 'Sarah Johnson',
      role: 'CTO, TechStart Inc.',
    },
    {
      quote:
        'Exceptional technical skills combined with great communication. They delivered a complex Next.js application that exceeded our expectations.',
      name: 'Michael Chen',
      role: 'Product Manager, Digital Solutions',
    },
    {
      quote:
        'Their expertise in building low-code tools transformed our development process. We\'ve significantly reduced our time-to-market for new features.',
      name: 'Emily Rodriguez',
      role: 'CEO, Innovation Labs',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <p className="text-gray-400 text-xl">What people say about working with me</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full bg-neutral-800 p-8 rounded-xl border border-neutral-700"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg mb-6 text-center">{`"${testimonial.quote}"`}</p>
                  <div className="text-center">
                    <h4 className="text-white font-bold mb-1">{testimonial.name}</h4>
                    <p className="text-blue-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
            <button
              onClick={prevSlide}
              className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none hover:bg-blue-600 transition-colors"
              aria-label="Previous Slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none hover:bg-blue-600 transition-colors"
              aria-label="Next Slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index
                    ? 'bg-blue-500'
                    : 'bg-gray-500 hover:bg-gray-400'
                } transition-colors`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;