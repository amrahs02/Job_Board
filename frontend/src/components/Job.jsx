import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="flex flex-col p-8 rounded-xl shadow-lg bg-white  border-gray-300 border  cursor-pointer hover:shadow-xl transition-shadow duration-300">
      {/* Job Time */}
      <div className="flex justify-between mb-4"></div>

      {/* Company Information */}
      <div className=" flex justify-between items-start ">
        <div className="flex items-center  mb-6" >

        <Button className="rounded-full aspect-square mr-4">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>

        <div>
          <h1 className="font-semibold text-xl text-gray-800">
            {job?.company?.name}
          </h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
        </div>
        <p className="text-xs text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Posted Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
      </div>

      {/* Job Title and Description */}
      <div className="mb-4">
        <h2 className="font-bold text-2xl text-gray-900">{job?.title}</h2>
        <p className="text-sm text-gray-600 leading-relaxed mt-2 line-clamp-3">
          {job?.description}
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
          className="flex-1 rounded-full text-gray-700 border-gray-300 hover:bg-gray-100"
        >
          Details
        </Button>
       
      </div>
    </div>
  );
};

export default Job;
