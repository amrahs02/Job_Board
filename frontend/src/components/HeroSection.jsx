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
    <div className="h-screen flex bg-white rounded-2xl mx-2 mt-2 flex-col justify-center items-center  overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute bg-gradient-to-b  shadow-lg opacity-50" />
      <div className="bg-gradient-to-r from-teal-500 from-30%  via-lime-500 to-blue-500 to-70% bg-clip-text text-transparent  flex flex-row justify-center items-center w-full md:w-1/2 gap-6 z-10">
        <div className=" ">
          <div className="text-7xl mb-6 font-extrabold text-center">
            Search, Apply & Get Your <br />
            Dream Job
          </div>
          <div className="flex mx-4 border p-3 border-gray-300 bg-white rounded-full overflow-hidden ">
            <input
              type="text"
              placeholder="Find your dream jobs"
              onChange={(e) => setQuery(e.target.value)}
              className=" w-full mx-5  text-gray-800 rounded-full placeholder-gray-400 outline-none"
            />
            <Button
              onClick={searchJobHandler}
              className="  text-white rounded-full   border-gray-200 bg-blue-400 hover:bg-blue-500  transition duration-300"
            >
              <Search className="" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
