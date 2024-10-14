import { useRef } from "react";
import { Bed, Bath, Ruler ,ChevronLeft, ChevronRight} from "lucide-react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const properties = [
  { id: 1, image: "/house1.jpeg", price: "3.25 Crore", beds: 6, baths: 6, area: "7 Marla", type: "residential", date: "February 21, 2024" },
  { id: 2, image: "/house2.jpeg", price: "1.20 Crore", beds: 3, baths: 2, area: "1 Kanal", type: "residential", date: "January 3, 2024" },
  { id: 3, image: "/house3.jpeg", price: "7 Crore", beds: 6, baths: 6, area: "20 Marla", type: "residential", date: "December 19, 2023" },
  { id: 4, image: "/house1.jpeg", price: "4.25 Crore", beds: 4, baths: 4, area: "26 Marla", type: "plot", date: "October 6, 2023" },
  { id: 5, image: "/house2.jpeg", price: "2.75 Crore", beds: 5, baths: 4, area: "10 Marla", type: "residential", date: "March 15, 2024" },
  { id: 6, image: "/house3.jpeg", price: "5.5 Crore", beds: 7, baths: 7, area: "1.5 Kanal", type: "residential", date: "April 2, 2024" },
];

export default function PropertyCarousel() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="relative overflow-hidden px-4 pb-4 mx-auto max-w-7xl">
      {/* Title */}
      <div className="py-6">
        <h2 className="text-4xl font-extrabold text-left text-green-600 animate-fadeIn">
          Featured Properties
        </h2>
      </div>

      {/* Dropdown for small devices and buttons for larger screens */}
      <div className="flex justify-between items-center mb-8">
        {/* Buttons for larger screens */}
        <div className="hidden sm:flex space-x-4">
          <button className="bg-white text-black px-4 py-2 rounded border-2 hover:bg-green-600 hover:text-white transition-colors duration-300">
            Islamabad
          </button>
          <button className="bg-white text-black px-4 py-2 rounded border-2 hover:bg-green-600 hover:text-white transition-colors duration-300">
            Peshawar
          </button>
          <button className="bg-white text-black px-4 py-2 rounded border-2 hover:bg-green-600 hover:text-white transition-colors duration-300">
            Lahore
          </button>
          <button className="bg-white text-black px-4 py-2 rounded border-2 hover:bg-green-600 hover:text-white transition-colors duration-300">
            Karachi
          </button>
        </div>

        {/* Dropdown for small screens */}
        <div className="sm:hidden">
          <select className="block w-full text-black px-4 py-2 border-2 rounded bg-white hover:border-green-600 focus:ring focus:ring-green-300">
            <option value="islamabad">Islamabad</option>
            <option value="peshawar">Peshawar</option>
            <option value="lahore">Lahore</option>
            <option value="karachi">Karachi</option>
          </select>
        </div>

        {/* View All Button */}
        <div>
          <button className="bg-white text-black px-4 py-2 border-2 rounded hover:bg-green-600 hover:text-white transition-colors duration-300">
            View All
          </button>
        </div>
      </div>

      {/* Carousel */}
      <Slider ref={sliderRef} {...settings}>
        {properties.map((property) => (
          <div key={property.id} className="px-2 py-4">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative">
              <div className="relative">
                <img
                  src={property.image}
                  alt={`Property ${property.id}`}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <span className="absolute top-2 left-2 bg-gray-900 text-white px-2 py-1 text-xs rounded">
                  {property.type}
                </span>
              </div>
              <div className="p-4">
                <div className="text-xl font-bold text-green-600 mb-2">
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
                    <Ruler size={16} className="mr-1" /> {property.area}
                  </span>
                </div>
                <div className="text-xs text-gray-500">Posted On: {property.date}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      
      {/* Previous Button */}
      <button
        className="absolute left-6 top-1/2 transform bg-white/70 rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all hover:bg-white  z-10"
        onClick={goToPrev}
        aria-label="Previous investment"
      >
        <ChevronLeft size={12} />
      </button>

      {/* Next Button */}
      <button
        className="absolute right-6 top-1/2 transform bg-white/70 rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all hover:bg-white z-10"
        onClick={goToNext}
        aria-label="Next investment"
      >
        <ChevronRight size={12} />
      </button>
    </div>
  );
}
