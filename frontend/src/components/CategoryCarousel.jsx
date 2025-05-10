import React from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
  "Firmware Engineer",
];

const CategoryCards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  // Button size and style constants for symmetry
  const buttonClasses = "h-12 px-6 text-sm font-medium rounded-full shadow-md bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-300 ease-in-out hover:shadow-lg";

  // Animation variants for Framer Motion
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const cardHoverVariants = {
    initial: { 
      scale: 1, 
      rotate: 0, 
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
    },
    hover: { 
      scale: 1.05, 
      rotate: 2, // Slight tilt on hover, mimicking 3D effect
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
      transition: { 
        duration: 0.3, 
        ease: "easeInOut" 
      },
    },
  };

  const cardTapVariants = {
    tap: { 
      scale: 0.98, 
      rotate: -1, 
      transition: { 
        duration: 0.1, 
        ease: "easeInOut" 
      },
    },
  };

  return (
    <motion.div 
      className="py-12 bg-yellow-50 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23e5e7eb%22 fill-opacity=%220.1%22%3E%3Crect x=%220%22 y=%220%22 width=%2210%22 height=%2210%22 /%3E%3Crect x=%2210%22 y=%2210%22 width=%2210%22 height=%2210%22 /%3E%3C/g%3E%3C/svg%3E')] bg-[length:20px_20px] bg-repeat"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <div className="max-w-5xl mx-auto px-4 relative">
        {/* Header Tag - Mimicking "Job Portal" */}
        <div className="absolute top-4 left-4 bg-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-tl-lg rounded-br-lg">
          Job Categories
        </div>

        <motion.h2 
          className="text-6xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-500 via-yellow-400 to-emerald-600 bg-clip-text text-transparent"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          Explore Job Categories
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {category.map((cat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-6 border border-emerald-300 shadow-md transform -translate-y-2 hover:shadow-xl transition-all duration-300"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    delay: index * 0.2, // Stagger animation for each card
                  },
                },
              }}
              variants={cardHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                onClick={() => searchJobHandler(cat)}
                className={buttonClasses.replace("bg-emerald-500", "bg-white").replace("hover:bg-emerald-600", "hover:bg-emerald-100").replace("text-white", "text-gray-700")}
              >
                {cat}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCards;