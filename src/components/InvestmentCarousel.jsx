import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const investments = [
  {
    id: 1,
    image: "/aprtment.jpg",
    price: "Starting from Rs 11.25 Lac (Total SQFT 300)",
    name: "Milton Apartments",
    location: "Islamabad",
    startingFrom: "45 Lac",
  },
  {
    id: 2,
    image: "/coffeeshop.jpg",
    price: "Get 350,000 Monthly Return",
    name: "Milton Coffee House",
    location: "Islamabad",
    startingFrom: "Starting from Rs 2.55 Crore",
  },
  {
    id: 3,
    image: "/resturant.jpg",
    price: "Starting from Rs 22 Lac",
    name: "Milton Rooftop Space",
    location: "Islamabad",
    startingFrom: "Starting from Rs 3.75 Lac (Total SQFT 50)",
  },
];

export default function InvestmentCarousel() {
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
        Investments
      </h2>

      <div className="flex overflow-x-auto space-x-6 px-8 transform transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${scrollPosition}px)` }}>
        {investments.map((investment) => (
          <div
            key={investment.id}
            className="flex-none w-80 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative"
          >
            <div className="relative group">
              <img
                src={investment.image}
                alt={investment.name}
                className="w-full h-48 object-cover rounded-t-lg group-hover:brightness-75 transition-all duration-300"
              />
              {investment.startingFrom && (
                <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs rounded animate-pulse">
                  HOT
                </span>
              )}
            </div>
            <div className="p-4">
              <div className="text-xl font-bold text-green-600 mb-2 transition-transform group-hover:translate-x-1">
                {investment.price}
              </div>
              <div className="text-md font-semibold mb-1">{investment.name}</div>
              <div className="text-sm text-gray-600">{investment.location}</div>
              {investment.startingFrom && (
                <div className="text-sm text-gray-600 mt-2">
                  Starting from Rs {investment.startingFrom}
                </div>
              )}
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
