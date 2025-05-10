import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  // Animation variants for Framer Motion
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div 
      className="flex flex-col bg-yellow-50 mx-1 rounded-3xl p-6 shadow-md justify-center items-center bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23e5e7eb%22 fill-opacity=%220.1%22%3E%3Crect x=%220%22 y=%220%22 width=%2210%22 height=%2210%22 /%3E%3Crect x=%2210%22 y=%2210%22 width=%2210%22 height=%2210%22 /%3E%3C/g%3E%3C/svg%3E')] bg-[length:20px_20px] bg-repeat"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      {/* Header Tag - Mimicking "Job Categories" */}
      <div className="absolute top-4 left-4 bg-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-tl-lg rounded-br-lg">
        Latest Jobs
      </div>

      <motion.h1 
        className="text-6xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-500 via-yellow-400 to-emerald-600 bg-clip-text text-transparent"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        Latest & Top Job Openings
      </motion.h1>
      <div className="grid w-3/4 sm:grid-cols-3 grid-cols-1 gap-4 my-24">
        {allJobs.length <= 0 ? (
          <span className="text-gray-600 text-center">No Job Available</span>
        ) : (
          allJobs
            ?.slice(0, 6)
            .map((job) => (
              <motion.div
                key={job._id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <LatestJobCards job={job} />
              </motion.div>
            ))
        )}
      </div>
    </motion.div>
  );
};

export default LatestJobs;