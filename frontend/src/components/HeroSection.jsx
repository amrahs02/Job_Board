import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { Phone } from "lucide-react"; // Adding a phone icon to mimic the character

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="min-h-[94vh] bg-yellow-100 m-1 rounded-3xl flex items-center justify-center px-4">
      <div className="max-w-4xl w-full space-y-8 relative">
        {/* Header Tag - Mimicking "Customer Support" */}
        <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-tl-lg rounded-br-lg">
          Job Opportunities
        </div>

        <div className="text-center relative">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            We Find the Jobs, <br /> You Land the Dream
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Job searches, applications, and opportunities—we handle it all seamlessly. Get fast, friendly, and professional results, and you take the credit!
          </p>

          {/* Simulated Character (Text + Icon) */}
          <div className="absolute right-0 top-0 transform -translate-y-1/4 translate-x-1/4">
            <div className="flex flex-col items-center">
              <Phone className="h-24 w-24 text-green-500" />
              <span className="text-sm font-medium text-gray-700 bg-white rounded-full px-2 py-1 mt-2 shadow-md">
                5 Stars
              </span>
              <span className="text-yellow-500 text-2xl">😊</span>
            </div>
          </div>

          {/* Rating and Smiley - Mimicking the top-right elements */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700 bg-white rounded-full px-2 py-1 shadow-md">
              5 Stars
            </span>
            <span className="text-yellow-500 text-2xl">😊</span>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-gray-100 rounded-full p-3 shadow-md">
          <input
            type="text"
            placeholder="Search for your dream job..."
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-2 bg-transparent text-gray-800 placeholder-gray-500 outline-none text-lg"
          />
          <Button
            onClick={searchJobHandler}
            className="bg-green-500 text-white hover:bg-green-600 rounded-full px-6 py-3 transition-colors text-lg"
          >
            <Search className="h-5 w-5 mr-2" />
            Search
          </Button>
        </div>

        {/* Call to Action Button - Mimicking "Offload your tasks today" */}
        <div className="text-center">
          <Button
            onClick={searchJobHandler}
            className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg px-8 py-3 text-lg shadow-md"
          >
            Start Your Job Search Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;