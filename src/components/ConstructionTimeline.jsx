import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ConstructionTimeline = () => {
  const phases = [
    { title: "Site Preparation", status: "Completed", date: "September 2021", progress: 100 },
    { title: "Foundation Laying", status: "Completed", date: "March 2022", progress: 100 },
    { title: "Structural Framework", status: "Completed", date: "June 2024", progress: 100 }, // Updated progress to 100%
    { title: "Exterior Work", status: "In Progress", date: "Starting now", progress: 0 }, // We will animate this one
    { title: "Interior Finishing", status: "Upcoming", date: "Starting on January 5, 2024", progress: 0 }
  ];

  const [exteriorWorkProgress, setExteriorWorkProgress] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setExteriorWorkProgress((prev) => (prev >= 100 ? 30 : prev + 1)); // Loop between 30 and 100
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="construction-timeline bg-white py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Box: YouTube Video */}
        <div className="video-section">
          <div className="video-preview mb-8 shadow-lg rounded-lg overflow-hidden">
            <iframe
              className="w-full h-96"
              src="https://www.youtube.com/embed/Wzgv4IrjzjU"
              title="Construction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <motion.div 
            className="video-description text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="mb-4 text-2xl font-bold text-gray-800">
              Watch the <span className="text-green-800">live construction</span> of the complex!
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 text-white rounded-full text-lg font-semibold shadow-lg transform transition-transform hover:scale-105">
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
          <h2 className="text-4xl font-extrabold mb-6 text-gray-900 tracking-wide">
            Construction <span className="text-green-700">Progress</span>
          </h2>
          <div className="space-y-8">
            {phases.slice(0, 3).map((phase, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xl font-semibold text-green-700">
                    {`Phase ${index + 1}: ${phase.title}`}
                  </span>
                  <span className={`text-sm ${phase.progress === 100 ? 'text-green-600' : 'text-gray-500'}`}>
                    {phase.status} – {phase.date}
                  </span>
                </div>
                <motion.div
                  className="h-4 rounded-full bg-gray-300 overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: `${phase.progress}%` }}
                  transition={{ duration: 1.5 }}
                >
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-700"></div>
                </motion.div>
              </div>
            ))}

            {/* Phase 4 with animated progress */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xl font-semibold text-green-700">
                  Phase 4: Exterior Work
                </span>
                <span className="text-sm text-yellow-600">
                  In Progress – {phases[3].date}
                </span>
              </div>
              <div className="h-4 rounded-full bg-gray-300 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"
                  initial={{ width: "30%" }}
                  animate={{ width: `${exteriorWorkProgress}%` }}
                  transition={{ ease: "linear", duration: 1 }}
                ></motion.div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xl font-semibold text-green-700">
                  Phase 5: Interior Finishing
                </span>
                <span className="text-sm text-gray-500">
                  Upcoming – {phases[4].date}
                </span>
              </div>
              <div className="h-4 rounded-full bg-gray-300 overflow-hidden">
                <div className="h-full bg-gray-400"></div>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default ConstructionTimeline;
