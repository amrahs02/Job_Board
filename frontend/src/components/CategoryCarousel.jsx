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
    <div className="py-12 bg-yellow-100">
      <div className="max-w-5xl mx-auto px-4 relative">
        {/* Header Tag - Mimicking "Job Portal" */}
        <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-tl-lg rounded-br-lg">
          Job Categories
        </div>

        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Explore Job Categories
        </h2>
        <Carousel className="w-full">
          <CarouselContent className="-ml-2">
            {category.map((cat, index) => (
              <CarouselItem
                key={index}
                className="pl-2 basis-full sm:basis-1/2 md:basis-1/3"
              >
                <Button
                  onClick={() => searchJobHandler(cat)}
                  variant="outline"
                  className="w-full h-24 text-gray-700 text-sm font-medium bg-white border-gray-200 rounded-full shadow-md hover:bg-green-100 hover:text-green-600 transition-all duration-200"
                >
                  {cat}
                </Button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-white text-gray-600 hover:text-gray-800 hover:bg-gray-100" />
          <CarouselNext className="right-0 bg-white text-gray-600 hover:text-gray-800 hover:bg-gray-100" />
        </Carousel>
      </div>
    </div>
  );
};

export default CategoryCarousel;