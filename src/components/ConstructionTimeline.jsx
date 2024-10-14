import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ConstructionTimeline() {
  const phases = [
    { title: "Site Preparation", status: "Completed", date: "September 2021", progress: 100 },
    { title: "Foundation Laying", status: "Completed", date: "March 2022", progress: 100 },
    { title: "Structural Framework", status: "Completed", date: "June 2024", progress: 100 },
    { title: "Exterior Work", status: "In Progress", date: "Starting now", progress: 0 },
    { title: "Interior Finishing", status: "Upcoming", date: "Starting on January 5, 2024", progress: 0 }
  ];

  const [exteriorWorkProgress, setExteriorWorkProgress] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setExteriorWorkProgress((prev) => (prev >= 100 ? 30 : prev + 1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="construction-timeline bg-white py-8 px-4 sm:py-12 md:py-16 md:px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        
        {/* Left Box: YouTube Video */}
        <div className="video-section pt-4">
          <div className="video-preview mb-4 rounded-lg overflow-hidden p-1 border-2 border-gray-500 shadow-sm">
            <div className="rounded-lg shadow-md">
              <iframe 
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/Wzgv4IrjzjU"
                title="Construction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <motion.div 
            className="video-description text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="mb-2 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
              Watch the <span className="text-green-700">live construction</span> of the complex!
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 sm:px-4 sm:py-2 text-white rounded-md text-sm sm:text-base font-semibold shadow-lg transform transition-transform hover:scale-105">
              Book Now
            </button>
          </motion.div>
        </div>

        {/* Right Box: Construction Timeline with Stylish Progress Bars */}
        <motion.div
          className="progress-section"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 text-gray-900 tracking-wide">
            Construction <span className="text-green-700">Progress</span>
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {phases.map((phase, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="text-sm sm:text-base font-semibold text-black">
                    Phase {index + 1}: {phase.title}
                  </span>
                  <span className={`text-xs ${phase.progress === 100 ? 'text-green-900' : phase.status === 'In Progress' ? 'text-yellow-900' : 'text-gray-500'}`}>
                    {phase.status} – {phase.date}
                  </span>
                </div>
                <motion.div
                  className="h-2 sm:h-3 rounded-full bg-gray-300 overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5 }}
                >
                  <motion.div
                    className={`h-full ${
                      phase.progress === 100
                        ? 'bg-gradient-to-r from-green-500 to-green-700'
                        : phase.status === 'In Progress'
                        ? 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600'
                        : 'bg-gray-400'
                    }`}
                    initial={{ width: "0%" }}
                    animate={{ width: phase.status === 'In Progress' ? `${exteriorWorkProgress}%` : `${phase.progress}%` }}
                    transition={{ ease: "linear", duration: 1 }}
                  ></motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
        
      </div>

      {/* HR Line Below the Component */}
      <hr className="mt-12 border-t-1 border-gray-300 w-3/4 mx-auto" />
    </section>
  );
}