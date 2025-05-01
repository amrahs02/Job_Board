import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, [dispatch]);

  // Animation variants for Framer Motion
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <motion.div 
        className="w-3/4 border border-gray-300 rounded-3xl m-5 mx-auto bg-yellow-50 p-5 shadow-md bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23e5e7eb%22 fill-opacity=%220.1%22%3E%3Crect x=%220%22 y=%220%22 width=%2210%22 height=%2210%22 /%3E%3Crect x=%2210%22 y=%2210%22 width=%2210%22 height=%2210%22 /%3E%3C/g%3E%3C/svg%3E')] bg-[length:20px_20px] bg-repeat"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        {/* Header Tag - Mimicking "Job Categories" */}
<<<<<<< HEAD
        <div className="absolute top-20 left-5 bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-tl-lg rounded-br-lg">
=======
        <div className="absolute top-20 left-5 bg-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-tl-lg rounded-br-lg">
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
          Browse Jobs
        </div>

        <h1 className="font-bold text-xl my-10 text-gray-800">
          Search Results ({allJobs.length})
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allJobs.map((job) => (
            <motion.div
              key={job._id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Job job={job} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Browse;