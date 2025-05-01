import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();

  // Animation variants for Framer Motion
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
      onClick={() => navigate(`/description/${job._id}`)}
<<<<<<< HEAD
      className="p-6 rounded-3xl bg-white border border-green-300 shadow-md cursor-pointer bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23e5e7eb%22 fill-opacity=%220.1%22%3E%3Crect x=%220%22 y=%220%22 width=%2210%22 height=%2210%22 /%3E%3Crect x=%2210%22 y=%2210%22 width=%2210%22 height=%2210%22 /%3E%3C/g%3E%3C/svg%3E')] bg-[length:20px_20px] bg-repeat hover:shadow-xl transition-all duration-300"
=======
      className="p-6 rounded-3xl bg-white border border-emerald-300 shadow-md cursor-pointer bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23e5e7eb%22 fill-opacity=%220.1%22%3E%3Crect x=%220%22 y=%220%22 width=%2210%22 height=%2210%22 /%3E%3Crect x=%2210%22 y=%2210%22 width=%2210%22 height=%2210%22 /%3E%3C/g%3E%3C/svg%3E')] bg-[length:20px_20px] bg-repeat hover:shadow-xl transition-all duration-300"
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      variants={cardHoverVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <div>
        <h1 className="font-medium text-lg text-gray-900">{job?.company?.name || "N/A"}</h1>
        <p className="text-sm text-gray-600">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2 text-gray-900">{job?.title || "N/A"}</h1>
        <p className="text-sm text-gray-600">{job?.description || "No description available"}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-600 bg-blue-100 font-medium px-3 py-1 rounded-full">
          {job?.position} Positions
        </Badge>
        <Badge className="text-red-600 bg-red-100 font-medium px-3 py-1 rounded-full">
          {job?.jobType}
        </Badge>
        <Badge className="text-purple-600 bg-purple-100 font-medium px-3 py-1 rounded-full">
          {job?.salary} LPA
        </Badge>
      </div>
    </motion.div>
  );
};

export default LatestJobCards;