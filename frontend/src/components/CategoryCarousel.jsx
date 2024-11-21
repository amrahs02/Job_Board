import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className=" flex  flex-col justify-center items-center mx-2">
      <div className="w-full  flex flex-col justify-center items-center bg-white  rounded-2xl   overflow-hidden">
        <h2 className="text-center  bg-gradient-to-r w-fit  from-blue-500   via-violet-500 to-red-500 bg-clip-text text-transparent   text-6xl font-bold mb-6 bg-white ">
          Explore Job Categories
        </h2>
        <div className="flex space-x-4 my-20 p-6">
          {category.map((cat, index) => (
            <div key={index} className="flex  justify-center items-center">
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-3xl h-96 w-72 text-base font-semibold py-3 px-8 transition duration-300 transform shadow-lg bg-white  hover:bg-gradient-to-r hover:from-green-100 hover:scale-105 hover:to-blue-200 hover:text-blue-500"

              >
                {cat}
              </Button>
            </div>
          ))}
        </div>
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-gray-800 hover:text-gray-600 transition duration-300">
          <span className="sr-only">Previous</span>
          <i className="fas fa-chevron-left text-2xl"></i>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-gray-800 hover:text-gray-600 transition duration-300">
          <span className="sr-only">Next</span>
          <i className="fas fa-chevron-right text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
