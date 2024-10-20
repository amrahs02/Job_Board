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
    <div className="my-20 m-3">
      <h2 className="text-center text-white  text-4xl font-bold mb-6">
        Explore Job Categories
      </h2>
      <Carousel className="w-full bg-gray-200 rounded-full p- max-w-2xl mx-auto">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center"
            >
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-2xl text-lg font-medium py-3 px-6 transition duration-200 transform hover:scale-105 border-gray-300 text-gray-800 hover:bg-gray-200"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 z-10 text-gray-800 hover:text-blue-600 transition duration-200" />
        <CarouselNext className="absolute right-0 z-10 text-gray-800 hover:text-blue-600 transition duration-200" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
