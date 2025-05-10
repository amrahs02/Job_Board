import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { Phone, Briefcase } from "lucide-react"; // Adding icons for character and jobs
import { motion } from "framer-motion"; // Import Framer Motion

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  // Animation variants for different elements
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="min-h-[94vh] bg-gray-100 m-1 rounded-3xl flex items-center justify-center px-4"
      
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <div className="max-w-4xl w-full space-y-8 relative">
        {/* Header Tag - Mimicking "Customer Support" */}
        

        <div className="text-center relative">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            We Find the Jobs, <br />

            {/* make this text as emerald gradient  */}
            <span className="
              bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text
              text-6xl md:text-7xl font-bold
            
            ">You Land the Dream</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-gray-700 text-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ delay: 0.2 }}
          >
            Job searches, applications, and opportunities—we handle it all
            seamlessly.

            <br /> 
            Get fast, friendly, and professional results, and you
            take the credit!
          </motion.p>

         
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2, // Stagger the animation for each card
                },
              },
            }}
          >
            
          </motion.div>
        </div>

        <motion.div
          className="flex items-center gap-2 bg-gray-100 rounded-full p-3 shadow-md"
          initial="hidden"
          animate="visible"
          variants={slideInVariants}
        >
          <motion.input
            type="text"
            placeholder="Search for your dream job..."
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-3 py-1 bg-transparent text-gray-800 placeholder-gray-500 outline-none text-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          />
          <motion.button
            as={Button}
            onClick={searchJobHandler}
            className="bg-emerald-500 text-white flex items-center justify-center  hover:bg-emerald-600 rounded-full px-6 py-3 transition-colors text-lg"
            initial="hidden"
            animate="visible"
            variants={scaleUpVariants}
          >
            <Search className="h-5  w-5 mr-2" />
            Search
          </motion.button>
        </motion.div>

        {/* Call to Action Button - Mimicking "Offload your tasks today" */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={scaleUpVariants}
        >
          <Button
            onClick={searchJobHandler}
            className="bg-emerald-500 text-white hover:bg-emerald-600 rounded-full px-8 py-3 text-lg shadow-md"
          >
            Start Your Job Search Today
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
