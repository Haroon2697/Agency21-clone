import { ChevronLeft, ChevronRight, Bed, Bath, Maximize } from "lucide-react";
import { useState } from "react";

const properties = [
  { id: 1, image: "/house1.jpeg", price: "3.25 Crore", beds: 6, baths: 6, area: "7 Marla", type: "residential", date: "February 21, 2024" },
  { id: 2, image: "/house2.jpeg", price: "1.20 Crore", beds: 3, baths: 2, area: "1 Kanal", type: "residential", date: "January 3, 2024" },
  { id: 3, image: "/house3.jpeg", price: "7 Crore", beds: 6, baths: 6, area: "20 Marla", type: "residential", date: "December 19, 2023" },
  { id: 4, image: "/house1.jpeg", price: "4.25 Crore", beds: 4, baths: 4, area: "26 Marla", type: "plot", date: "October 6, 2023" },
];

export default function PropertyCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    const newPos = scrollPosition - 300;
    setScrollPosition(newPos < 0 ? 0 : newPos);
  };

  const scrollRight = () => {
    setScrollPosition(scrollPosition + 300);
  };

  return (
    <div className="relative overflow-hidden">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-green-600 animate-fadeIn">Featured Properties</h2>

      <div className="flex overflow-x-auto space-x-6 px-8 transform transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${scrollPosition}px)` }}>
        {properties.map((property) => (
          <div
            key={property.id}
            className="flex-none w-80 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative"
          >
            <div className="relative group">
              <img
                src={property.image}
                alt={`Property ${property.id}`}
                className="w-full h-48 object-cover rounded-t-lg group-hover:brightness-75 transition-all duration-300"
              />
              <span className="absolute top-2 left-2 bg-gray-900 text-white px-2 py-1 text-xs rounded">
                {property.type}
              </span>
            </div>
            <div className="p-4">
              <div className="text-xl font-bold text-green-600 mb-2 transition-transform group-hover:translate-x-1">
                PKR {property.price}
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span className="flex items-center">
                  <Bed size={16} className="mr-1" /> {property.beds} Bed
                </span>
                <span className="flex items-center">
                  <Bath size={16} className="mr-1" /> {property.baths} Bath
                </span>
                <span className="flex items-center">
                  <Maximize size={16} className="mr-1" /> {property.area}
                </span>
              </div>
              <div className="text-xs text-gray-500">Posted On: {property.date}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-transform hover:scale-110"
        onClick={scrollLeft}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-transform hover:scale-110"
        onClick={scrollRight}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
