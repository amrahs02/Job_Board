import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div className=" flex flex-col bg-white  mx-2 rounded-2xl justify-center items-center">
      <h1 className="text-6xl font-bold">
        <span className=" bg-gradient-to-r w-fit from-red-500 text-center   via-green-500 to-blue-500 bg-clip-text text-transparent ">
          Latest & TopJob Openings
        </span>
      </h1>
      <div className="grid  w-3/4  sm:grid-cols-3 grid-cols-1 gap-4 my-24">
        {allJobs.length <= 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs
            ?.slice(0, 6)
            .map((job) => <LatestJobCards key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
