import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const investments = [
  {
    id: 1,
    image: "apartment.jpg",
    price: "Starting from Rs 11.25 Lac (Total SQFT 300)",
    name: "Milton Apartments",
    location: "Islamabad",
    startingFrom: "45 Lac",
  },
  {
    id: 2,
    image: "coffeeshop.jpg",
    price: "Get 350,000 Monthly Return",
    name: "Milton Coffee House",
    location: "Islamabad",
    startingFrom: "Starting from Rs 2.55 Crore",
  },
  {
    id: 3,
    image: "resturant.jpg",
    price: "Starting from Rs 22 Lac",
    name: "Milton Rooftop Space",
    location: "Islamabad",
    startingFrom: "Starting from Rs 3.75 Lac (Total SQFT 50)",
  },
];

export default function CircularInvestmentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % investments.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + investments.length) % investments.length);
  };

  const getCardIndex = (offset) => {
    return (currentIndex + offset + investments.length) % investments.length;
  };

  if (!isClient) {
    return <div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>;
  }

  return (
    <div className="relative bg-white py-16 overflow-hidden">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-green-600 animate-fadeIn">Investments</h2>

      <div className="flex justify-center items-center space-x-4 px-4">
        {[-1, 0, 1].map((offset) => {
          const investment = investments[getCardIndex(offset)];
          return (
            <div
              key={`${investment.id}-${offset}`}
              className={`w-72 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out relative ${
                offset === 0 ? "z-10" : "opacity-70"
              }`}
              style={{
                transform: `translateX(${offset * 80}px) scale(${offset === 0 ? 1 : 0.8})`,
                transition: "all 0.5s ease-in-out",
              }}
            >
              <div className="relative group overflow-hidden rounded-t-lg">
                <img
                  src={`/${investment.image}`}
                  alt={investment.name}
                  className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105"
                />
                {investment.startingFrom && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
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
                  <div className="text-sm text-gray-600 mt-2">Starting from Rs {investment.startingFrom}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Carousel controls */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95"
        onClick={prevCard}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95"
        onClick={nextCard}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}