import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
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

  return (
    <div>
      <Navbar />
      <div className="w-3/4 border border-b-gray-400 rounded-2xl bg-white mx-auto m-5 px-4">
        <div className="flex flex-col m-2 md:flex-row gap-5 relative">
          {/* Toggle Filter Button */}
          <button
            onClick={() => setIsFilterVisible(!isFilterVisible)}
            className="px-4 py-2 bg-blue-200 text-blue-500 h-fit rounded-full sm:m-0 mt-2"
          >
            <FaFilter className=" mr-2 inline" />
            Filter Jobs
          </button>

          {/* Sliding Filter Panel */}
          <div
            className={`fixed top-0 left-0 z-20 bg-white shadow-2xl h-full w-3/4 md:w-1/6 transition-transform duration-500 ${
              isFilterVisible ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="relative">
              {/* Close Button inside the filter panel */}
              <button
                onClick={() => setIsFilterVisible(false)}
                className="absolute top-4 right-4 px-4 py-2 bg-gray-200 rounded-2xl hover:bg-gray-300"
              >
                X
              </button>
              <FilterCard />
            </div>
          </div>

          {/* Main Content */}
          <div
            className={`flex-1 h-[88vh] overflow-y-auto pb-5 ${
              isFilterVisible ? "opacity-50 pointer-events-none md:pointer-events-auto" : ""
            }`}
          >
            {filterJobs.length <= 0 ? (
              <span className="text-center md:text-left">Job not found</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
