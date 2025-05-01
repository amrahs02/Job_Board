import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { FaFilter } from "react-icons/fa";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  useEffect(() => {
    if (searchedQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

  // Button size and style constants for symmetry
<<<<<<< HEAD
  const buttonClasses = "h-12 px-6 text-sm font-medium rounded-full shadow-md bg-green-500 text-white hover:bg-green-600 transition-all duration-300 ease-in-out hover:shadow-lg";
=======
  const buttonClasses = "h-12 px-6 text-sm font-medium rounded-full shadow-md bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-300 ease-in-out hover:shadow-lg";
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)

  // Animation variants for Framer Motion
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <motion.div 
        className="w-3/4 border border-gray-300 rounded-3xl bg-yellow-50 mx-auto m-5 px-4 shadow-md bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23e5e7eb%22 fill-opacity=%220.1%22%3E%3Crect x=%220%22 y=%220%22 width=%2210%22 height=%2210%22 /%3E%3Crect x=%2210%22 y=%2210%22 width=%2210%22 height=%2210%22 /%3E%3C/g%3E%3C/svg%3E')] bg-[length:20px_20px] bg-repeat"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div className="flex flex-col m-2 md:flex-row gap-5 relative">
          {/* Header Tag - Mimicking "Job Categories" */}
<<<<<<< HEAD
          <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-tl-lg rounded-br-lg">
=======
          <div className="absolute top-4 left-4 bg-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-tl-lg rounded-br-lg">
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
            Job Listings
          </div>

          {/* Toggle Filter Button */}
          <motion.button
            onClick={() => setIsFilterVisible(!isFilterVisible)}
            className={buttonClasses}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <FaFilter className="mr-2 inline" />
            Filter Jobs
          </motion.button>

          {/* Sliding Filter Panel */}
          <motion.div
            className={`fixed top-0 left-0 z-20 bg-white shadow-2xl h-full w-3/4 md:w-1/6 transition-transform duration-500 ${
              isFilterVisible ? "translate-x-0" : "-translate-x-full"
            }`}
            initial="hidden"
            animate={isFilterVisible ? "visible" : "hidden"}
            variants={slideInVariants}
          >
            <div className="relative">
              {/* Close Button inside the filter panel */}
              <motion.button
                onClick={() => setIsFilterVisible(false)}
<<<<<<< HEAD
                className={`${buttonClasses.replace("bg-green-500", "bg-gray-200").replace("hover:bg-green-600", "hover:bg-gray-300").replace("text-white", "text-gray-700")} absolute top-4 right-4`}
=======
                className={`${buttonClasses.replace("bg-emerald-500", "bg-gray-200").replace("hover:bg-emerald-600", "hover:bg-gray-300").replace("text-white", "text-gray-700")} absolute top-4 right-4`}
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
              >
                X
              </motion.button>
              <FilterCard />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className={`flex-1 h-[88vh] overflow-y-auto pb-5 ${
              isFilterVisible ? "opacity-50 pointer-events-none md:pointer-events-auto" : ""
            }`}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            {filterJobs.length <= 0 ? (
              <span className="text-center md:text-left text-gray-600">Job not found</span>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    key={job?._id}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Jobs;