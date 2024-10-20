import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div className=" " >

    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-5 rounded-md  shadow-xl bg-white border border-gray-100 cursor-pointer hover:shadow-2xl transition-shadow duration-300"
      >
      <div className="flex flex-col">
        <h1 className="font-medium text-lg md:text-xl">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">{job?.location || 'India'}</p>
      </div>
      <div className="flex flex-col mt-2">
        <h1 className="font-bold text-lg my-2 md:text-xl">{job?.title}</h1>
        <p className="text-sm text-gray-600 md:text-base">{job?.description}</p>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>
    </div>
      </div>
  );
};

export default LatestJobCards;
