export default function HeroSection() {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute z-0 w-full h-full object-cover"
        >
          <source
            src="https://images.graana.com/video/upload/agency21/2_1/1655993188.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
  
        {/* Dark Overlay */}
        <div className="absolute z-5 w-full h-full bg-black bg-opacity-40"></div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen text-white">
          <main className="flex-grow flex items-center justify-center px-4 md:px-12">
            <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-8 animate-fadeIn">
              {/* Title with Fade-in Animation */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideUp pt-16">
                Bahria Town's Leading<br />Highrise Developer
              </h1>
  
              {/* Subtitle */}
              <p className="text-xl md:text-3xl mb-8 animate-slideUp delay-150">
                <span className="text-yellow-300">Find your new home</span>
                <br />
                Search properties for sale and rent in Bahria Town
              </p>
  
              {/* Buttons Section */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-12">
                <button
                  className="bg-black text-white border border-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-fadeIn delay-200 py-4 px-8 rounded-lg w-72 text-center flex flex-col items-center justify-center h-24"
                >
                  <span className="block text-base font-normal mb-1">Selling or Renting out?</span>
                  <span className="block font-bold text-2xl">Free Valuation</span>
                </button>
                <button
                  className="bg-[#2e8b57] hover:bg-[#236e44] text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-fadeIn delay-300 py-4 px-8 rounded-lg w-72 text-center flex flex-col items-center justify-center h-24"
                >
                  <span className="block text-base font-normal mb-1">Buying, Renting or Invest?</span>
                  <span className="block font-bold text-2xl">Hot Deals</span>
                </button>
              </div>
  
              {/* Secondary Button */}
              <button className="bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-slideUp delay-400 py-6 px-16 text-lg rounded-lg">
                Looking for Highrise Investment
              </button>
  
              {/* Form Section */}
              <div className="mt-16 bg-white bg-opacity-20 p-6 rounded-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 max-w-5xl w-full animate-fadeIn delay-500">
                <select className="bg-white text-black rounded px-4 py-3 flex-grow focus:ring-2 focus:ring-yellow-400 transition-all duration-300 shadow-md">
                  <option>City</option>
                </select>
                <select className="bg-white text-black rounded px-4 py-3 flex-grow focus:ring-2 focus:ring-yellow-400 transition-all duration-300 shadow-md">
                  <option>Area</option>
                </select>
                <select className="bg-white text-black rounded px-4 py-3 flex-grow focus:ring-2 focus:ring-yellow-400 transition-all duration-300 shadow-md">
                  <option>All Types</option>
                </select>
                <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-12 py-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 rounded-lg">
                  BUY
                </button>
                <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-12 py-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 rounded-lg">
                  RENT
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
  