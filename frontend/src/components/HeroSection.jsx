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
<<<<<<< HEAD
      className="min-h-[94vh] bg-yellow-50 m-1 rounded-3xl flex items-center justify-center px-4"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
=======
      className="min-h-[94vh] bg-gray-100 m-1 rounded-3xl flex items-center justify-center px-4"
      
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <div className="max-w-4xl w-full space-y-8 relative">
        {/* Header Tag - Mimicking "Customer Support" */}
<<<<<<< HEAD
        <motion.div
          className="absolute top-4 left-4 bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-tl-lg rounded-br-lg"
          initial="hidden"
          animate="visible"
          variants={slideInVariants}
        >
          Job Opportunities
        </motion.div>

        <div className="text-center relative">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900"
=======
        

        <div className="text-center relative">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900"
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
<<<<<<< HEAD
            We Find the Jobs, <br /> You Land the Dream
=======
            We Find the Jobs, <br />

            {/* make this text as emerald gradient  */}
            <span className="
              bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text
              text-6xl md:text-7xl font-bold
            
            ">You Land the Dream</span>
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
          </motion.h1>
          <motion.p
            className="mt-4 text-gray-700 text-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ delay: 0.2 }}
          >
            Job searches, applications, and opportunities—we handle it all
<<<<<<< HEAD
            seamlessly. Get fast, friendly, and professional results, and you
            take the credit!
          </motion.p>

          {/* Playful Character (Mimicking the phone character) */}
          <motion.div
            className="absolute right-0 top-0 transform -translate-y-1/4 translate-x-1/4"
            initial="hidden"
            animate="visible"
            variants={scaleUpVariants}
          >
            <div className="flex flex-col items-center">
              <Briefcase className="h-24 w-24 text-green-500" />{" "}
              {/* Job-seeker mascot */}
              <span className="text-sm font-medium text-gray-700 bg-white rounded-full px-2 py-1 mt-2 shadow-md">
                5 Stars
              </span>
              <span className="text-yellow-500 text-2xl">😊</span>
            </div>
          </motion.div>

          {/* Rating and Smiley - Top-right corner */}
          <motion.div
            className="absolute top-4 right-4 flex items-center gap-2"
            initial="hidden"
            animate="visible"
            variants={slideInVariants}
          >
            <span className="text-sm font-medium text-gray-700 bg-white rounded-full px-2 py-1 shadow-md">
              5 Stars
            </span>
            <span className="text-yellow-500 text-2xl">😊</span>
          </motion.div>

          {/* Visual Stickers/Cards (Inspired by Daisy’s design) */}
=======
            seamlessly.

            <br /> 
            Get fast, friendly, and professional results, and you
            take the credit!
          </motion.p>

         
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
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
<<<<<<< HEAD
            <motion.div
              className="bg-white rounded-lg shadow-md p-4 border border-green-300 transform rotate-[-2deg]"
              initial="hidden"
              variants={scaleUpVariants}
            >
              <h3 className="text-lg font-semibold text-gray-800">Tech Jobs</h3>
              <p className="text-sm text-gray-600">
                Find your next coding gig!
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow-md p-4 border border-green-300 transform rotate-[2deg]"
              initial="hidden"
              variants={scaleUpVariants}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                Creative Roles
              </h3>
              <p className="text-sm text-gray-600">Unleash your creativity!</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow-md p-4 border border-green-300 transform rotate-[-1deg]"
              initial="hidden"
              variants={scaleUpVariants}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                Remote Work
              </h3>
              <p className="text-sm text-gray-600">Work from anywhere!</p>
            </motion.div>
=======
            
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
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
<<<<<<< HEAD
            className="flex-1 px-4 py-2 bg-transparent text-gray-800 placeholder-gray-500 outline-none text-lg"
=======
            className="flex-1 px-3 py-1 bg-transparent text-gray-800 placeholder-gray-500 outline-none text-lg"
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          />
          <motion.button
            as={Button}
            onClick={searchJobHandler}
<<<<<<< HEAD
            className="bg-green-500 text-white hover:bg-green-600 rounded-full px-6 py-3 transition-colors text-lg"
=======
            className="bg-emerald-500 text-white flex items-center justify-center  hover:bg-emerald-600 rounded-full px-6 py-3 transition-colors text-lg"
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
            initial="hidden"
            animate="visible"
            variants={scaleUpVariants}
          >
<<<<<<< HEAD
            <Search className="h-5 w-5 mr-2" />
=======
            <Search className="h-5  w-5 mr-2" />
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
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
<<<<<<< HEAD
            className="bg-purple-500 text-white hover:bg-purple-600 rounded-lg px-8 py-3 text-lg shadow-md"
=======
            className="bg-emerald-500 text-white hover:bg-emerald-600 rounded-full px-8 py-3 text-lg shadow-md"
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
          >
            Start Your Job Search Today
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
