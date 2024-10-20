import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="h-screen  text-white flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b  m-2 rounded-2xl  from-green-400 to-green-700 shadow-lg opacity-50" />
      <div className="flex flex-col items-center w-full md:w-1/2 gap-6 z-10">
        <span className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-full shadow-md">
          Your Dream Job Awaits
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-center">
          Search, Apply & <br />
          <span className="text-yellow-400">Get Your Dream Job</span>
        </h1>
        <p className="text-lg text-center max-w-md">
          Discover opportunities that align with your passion and skills. Let’s
          get started!
        </p>
        <div className="flex sm:w-full w-3/4 shadow-lg bg-white rounded-full overflow-hidden border border-gray-300">
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="sm:py-4 sm:px-6 py-2 px-3 w-full text-gray-800 placeholder-gray-400 outline-none"
          />
          <Button
            onClick={searchJobHandler}
            className="bg-green-600 text-white sm:py-7 sm:px-10 py-3 px-5 rounded-r-full hover:bg-green-700 transition duration-300"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
