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
  {
    id: 4,
    name: "Sara Ahmad",
    title: "Luxury Property Owner",
    review:
      "Milton Developers provided outstanding service with top-notch quality. Their attention to detail in luxury apartments is unmatched, and it has significantly increased the value of my properties.",
    image: "/client3.jpeg",
  },
  {
    id: 5,
    name: "Usman Tariq",
    title: "Commercial Investor",
    review:
      "The professionalism and expertise of Milton Developers in delivering high-end commercial properties have elevated my business ventures. Their projects consistently meet and exceed expectations.",
    image: "/client2.jpeg",
  },
];

export default function TestimonialCarousel() {
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);

  // Constants for the visible range (only 3 at a time)
  const visibleCount = 3;
  const maxIndex = testimonials.length;

  // Scroll to the left, ensuring we don't go beyond index 0
  const scrollLeft = () => {
    setVisibleStartIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : maxIndex - visibleCount
    );
  };

  // Scroll to the right, ensuring we don't go beyond the last testimonial
  const scrollRight = () => {
    setVisibleStartIndex((prevIndex) =>
      prevIndex < maxIndex - visibleCount ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="relative bg-white py-16 overflow-hidden">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-green-600 animate-fadeIn">
        Client Testimonials
      </h2>

      {/* Display only the visible testimonials */}
      <div className="flex justify-center space-x-6 px-8">
        {testimonials
          .slice(visibleStartIndex, visibleStartIndex + visibleCount)
          .map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-none w-80 rounded-lg shadow-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative border-t-2 border-l-2 border-green-200" // Border and shadow adjustments
            >
              <div className="relative group">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mt-4 object-cover group-hover:brightness-75 transition-all duration-300 border-4 border-green-600" // Added border here
                />
              </div>
              <div className="p-4 text-center">
                <div className="text-lg  font-medium font-serif text-green-600 mb-2">
                  {testimonial.name}
                </div>
                <div className="text-base font-light  font-serif text-green-600 mb-4">
                  {testimonial.title}
                </div>
                <p className="text-sm font-serif text-gray-800 italic">
                  "{testimonial.review}"
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* Carousel controls */}
      <button
        className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-green-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-transform hover:scale-110"
        onClick={scrollLeft}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-green-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-transform hover:scale-110"
        onClick={scrollRight}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
