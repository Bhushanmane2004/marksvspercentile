import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  rank: string;
  year: number;
  quote: string;
  college: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aditya Sharma",
    rank: "AIR 27",
    year: 2024,
    quote: "Rising Education's MHT-CET prep course was instrumental in my success.",
    college: "COEP Pune"
  },
  {
    id: 2,
    name: "Priya Deshmukh",
    rank: "AIR 42",
    year: 2024,
    quote: "Unique strategies and daily practice helped me achieve my dream rank.",
    college: "VJTI Mumbai"
  },
  {
    id: 3,
    name: "Rahul Patil",
    rank: "AIR 56",
    year: 2024,
    quote: "Faculty gave personal attention and feedback that made the difference.",
    college: "SPIT Mumbai"
  },
  {
    id: 4,
    name: "Sneha Joshi",
    rank: "AIR 83",
    year: 2024,
    quote: "From average to top ranks — the study material was top-notch!",
    college: "WCE Sangli"
  },
  {
    id: 5,
    name: "Vikas Kumar",
    rank: "AIR 95",
    year: 2024,
    quote: "The YouTube channel got me started, and I joined the full course!",
    college: "GCOEA Amravati"
  }
];

const SuccessTestimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const visibleCount = isMobile ? 1 : 2;

  const next = () => {
    setCurrent((prev) => (prev + 1) % (testimonials.length - visibleCount + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + (testimonials.length - visibleCount + 1)) % (testimonials.length - visibleCount + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:w-4/5 mx-auto bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-xl font-bold text-center text-gray-900 mb-8">
        Our MHT-CET Success Stories
      </h2>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(100 / visibleCount) * current}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`w-full ${visibleCount === 2 ? 'md:w-1/2' : 'w-full'} px-4 flex-shrink-0`}
              >
                <div className="bg-white rounded-xl shadow-sm p-6 relative h-full">
                  <Quote className="absolute top-4 left-4 h-6 w-6 text-blue-100" />
                  <div className="text-center">
                    <p className="text-gray-700 italic mb-6 mt-4 relative z-10 text-base md:text-lg">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-gray-100 pt-4">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-blue-600 font-bold mt-1">{testimonial.rank}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {testimonial.college} | MHT-CET {testimonial.year}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: testimonials.length - visibleCount + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              current === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SuccessTestimonials;
