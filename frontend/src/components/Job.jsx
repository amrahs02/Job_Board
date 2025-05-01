import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  // Animation variants for Framer Motion
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Button size and style constants for symmetry
<<<<<<< HEAD
  const buttonClasses = "h-12 px-6 text-sm font-medium rounded-full shadow-md bg-green-500 text-white hover:bg-green-600 transition-all duration-300 ease-in-out hover:shadow-lg";
=======
  const buttonClasses = "h-12 px-6 text-sm font-medium rounded-full shadow-md bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-300 ease-in-out hover:shadow-lg";
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)

  return (
    <motion.div 
      className="flex flex-col p-6 rounded-3xl shadow-md bg-white border border-gray-300 cursor-pointer hover:shadow-xl transition-shadow duration-300 bg-yellow-50 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23e5e7eb%22 fill-opacity=%220.1%22%3E%3Crect x=%220%22 y=%220%22 width=%2210%22 height=%2210%22 /%3E%3Crect x=%2210%22 y=%2210%22 width=%2210%22 height=%2210%22 /%3E%3C/g%3E%3C/svg%3E')] bg-[length:20px_20px] bg-repeat"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      {/* Job Time */}
      <div className="flex justify-between mb-4">
        <span className="text-xs text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Posted Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </span>
      </div>

      {/* Company Information */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center">
<<<<<<< HEAD
          <Button className="rounded-full aspect-square w-12 h-12 mr-4 bg-green-500 shadow-md hover:bg-green-600 transition-all duration-300">
=======
          <Button className="rounded-full aspect-square w-12 h-12 mr-4 bg-emerald-500 shadow-md hover:bg-emerald-600 transition-all duration-300">
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
            <Avatar className="w-full h-full">
              <AvatarImage src={job?.company?.logo} />
            </Avatar>
          </Button>
          <div>
            <h1 className="font-semibold text-xl text-gray-800">
              {job?.company?.name || "N/A"}
            </h1>
            <p className="text-sm text-gray-500">India</p>
          </div>
        </div>
      </div>

      {/* Job Title and Description */}
      <div className="mb-4">
        <h2 className="font-bold text-2xl text-gray-900">{job?.title || "N/A"}</h2>
        <p className="text-sm text-gray-600 leading-relaxed mt-2 line-clamp-3">
          {job?.description || "No description available"}
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-3 mt-auto">
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

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
<<<<<<< HEAD
          className={`${buttonClasses.replace("bg-green-500", "bg-white").replace("hover:bg-green-600", "hover:bg-gray-100").replace("text-white", "text-gray-700")} border-gray-300`}
=======
          className={`${buttonClasses.replace("bg-emerald-500", "bg-white").replace("hover:bg-emerald-600", "hover:bg-gray-100").replace("text-white", "text-gray-700")} border-gray-300`}
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
        >
          Details
        </Button>
        <Button
          className={buttonClasses}
        >
          <Bookmark className="mr-2 h-5 w-5" />
          Save
        </Button>
      </div>
    </motion.div>
  );
};

export default Job;