import { useRef } from "react";
import { Bed, Bath, Maximize } from "lucide-react";
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
    <div className="relative overflow-hidden px-4 py-14">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-green-600 animate-fadeIn">
        Featured Properties
      </h2>

      <Slider ref={sliderRef} {...settings} className="mx-auto max-w-7xl">
        {properties.map((property) => (
          <div key={property.id} className="px-2 py-4">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative">
              <div className="relative group">
                <img
                  src={property.image}
                  alt={`Property ${property.id}`}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:brightness-75 transition-all duration-300"
                />
                <span className="absolute top-2 left-2 bg-gray-900 text-white px-2 py-1 text-xs rounded">
                  {property.type}
                </span>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-4 py-2 rounded hover:bg-green-600 hover:text-white transition-colors duration-300">
                    View Details
                  </button>
                </div>
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
          </div>
        ))}
      </Slider>

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-transform hover:scale-110 z-10"
        onClick={goToPrev}
        aria-label="Previous property"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-transform hover:scale-110 z-10"
        onClick={goToNext}
        aria-label="Next property"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="mt-8 text-center">
        <button className="px-6 py-2 border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white transition-colors duration-300">
          View All Properties
        </button>
      </div>
    </div>
  );
}