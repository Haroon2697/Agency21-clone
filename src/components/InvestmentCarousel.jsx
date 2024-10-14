import React, { useRef } from "react";
import { Bed, Bath, Ruler, ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const investments = [
  {
    id: 1,
    image: "/apartment.jpg",
    price: "11.25 Lac",
    name: "Milton Apartments",
    location: "Islamabad",
    startingFrom: "Starting from Rs 11.25 Lac (Total SQFT 300)",
    beds: 2,
    baths: 2,
    area: "300 sqft",
    type: "residential",
    date: "April 15, 2024",
  },
  {
    id: 2,
    image: "/coffeeshop.jpg",
    price: "2.55 Crore",
    name: "Milton Coffee House",
    location: "Islamabad",
    startingFrom: "Starting from Rs 3.5 Lac (Total SQFT 50)",
    beds: 0,
    baths: 2,
    area: "1000 sqft",
    type: "commercial",
    date: "April 10, 2024",
  },
  {
    id: 3,
    image: "/resturant.jpg",
    price: "22 Lac",
    name: "Milton Rooftop Space",
    location: "Islamabad",
    startingFrom: "Starting from Rs 3.75 Lac (Total SQFT 50)",
    beds: 0,
    baths: 1,
    area: "50 sqft",
    type: "commercial",
    date: "April 5, 2024",
  },
  {
    id: 4,
    image: "/coffeeshop.jpg",
    price: "18 Lac",
    name: "Milton Office Spaces",
    location: "Islamabad",
    startingFrom: "Starting from Rs 18 Lac (Total SQFT 250)",
    beds: 0,
    baths: 1,
    area: "250 sqft",
    type: "commercial",
    date: "March 30, 2024",
  },
];

export default function CircularInvestmentCarousel() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="relative overflow-hidden px-4 py-8 bg-white mx-auto max-w-7xl">
      <h2 className="text-4xl font-extrabold mb-12 text-start text-green-600 animate-fadeIn">
        Investments
      </h2>

      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          <button className="bg-white text-black px-4 py-2 rounded border-2 hover:bg-green-600 hover:text-white transition-colors duration-300">
            Residential
          </button>
          <button className="bg-white text-black px-4 py-2 rounded border-2 hover:bg-green-600 hover:text-white transition-colors duration-300">
            Commercial
          </button>
        </div>
        <div>
          <button className="bg-white text-black px-4 py-2 border-2 rounded hover:bg-green-600 hover:text-white transition-colors duration-300">
            View All
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {investments.map((investment) => (
          <div key={investment.id} className="px-2 py-4">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative">
              <div className="relative group">
                <img
                  src={investment.image}
                  alt={investment.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <span className="absolute top-2 left-2 bg-gray-900 text-white px-2 py-1 text-xs rounded">
                  {investment.type}
                </span>
                <div className="absolute inset-0 hover:bg-black/30 flex items-center justify-center">

                </div>
              </div>
              <div className="p-4">
                <div className="text-xl font-bold text-green-600 mb-2 transition-transform group-hover:translate-x-1">
                  PKR {investment.price}
                </div>
                <div className="text-md font-semibold mb-1">{investment.name}</div>
                <div className="text-sm text-gray-600 mb-2">{investment.location}</div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  {investment.beds > 0 && (
                    <span className="flex items-center">
                      <Bed size={16} className="mr-1" /> {investment.beds} Bed
                    </span>
                  )}
                  {investment.baths > 0 && (
                    <span className="flex items-center">
                      <Bath size={16} className="mr-1" /> {investment.baths} Bath
                    </span>
                  )}
                  <span className="flex items-center">
                    <Ruler size={16} className="mr-1" /> {investment.area}
                  </span>
                </div>
                <div className="text-xs text-gray-500">Posted On: {investment.date}</div>
                <div className="text-sm text-gray-600 mt-2">{investment.startingFrom}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 z-10"
        onClick={goToPrev}
        aria-label="Previous investment"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 z-10"
        onClick={goToNext}
        aria-label="Next investment"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
