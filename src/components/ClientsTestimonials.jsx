import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    title: "Real Estate Investor",
    review:
      "Milton Developers delivered exceptional quality in record time. Their high-rise projects in Islamabad have been a game changer for my portfolio.",
    image: "/client1.jpeg",
  },
  {
    id: 2,
    name: "Fatima Malik",
    title: "Commercial Property Owner",
    review:
      "The design and functionality of their commercial high-rises are remarkable. The monthly returns from my investment have exceeded expectations!",
    image: "/client3.jpeg",
  },
  {
    id: 3,
    name: "Saad Ali",
    title: "Residential Home Buyer",
    review:
      "I am incredibly satisfied with my new home in their high-rise development. The modern architecture and premium amenities make it a perfect living space.",
    image: "/client2.jpeg",
  },
];

export default function TestimonialCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    const newPos = scrollPosition - 300;
    setScrollPosition(newPos < 0 ? 0 : newPos);
  };

  const scrollRight = () => {
    setScrollPosition(scrollPosition + 300);
  };

  return (
    <div className="relative bg-white py-16 overflow-hidden">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-green-600 animate-fadeIn">
        Client Testimonials
      </h2>

      <div className="flex overflow-x-auto space-x-6 px-8 transform transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${scrollPosition}px)` }}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-none w-80 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative"
          >
            <div className="relative group">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mt-4 object-cover group-hover:brightness-75 transition-all duration-300"
              />
            </div>
            <div className="p-4 text-center">
              <div className="text-lg font-semibold text-green-600 mb-2">{testimonial.name}</div>
              <div className="text-sm font-light text-gray-600 mb-4">{testimonial.title}</div>
              <p className="text-sm text-gray-600 italic">"{testimonial.review}"</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-transform hover:scale-110"
        onClick={scrollLeft}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-transform hover:scale-110"
        onClick={scrollRight}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
