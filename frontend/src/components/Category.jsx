import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay"; 

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "Mobile App Developer",
  "Data Scientist",
  "Machine Learning Engineer",
  "AI Engineer",
  "Cloud Engineer",
  "DevOps Engineer",
  "UI/UX Designer",
  "Graphic Designer",
  "Product Manager",
  "Project Manager",
  "Business Analyst",
  "Cybersecurity Specialist",
  "Database Administrator",
  "Software Tester (QA)",
  "Game Developer",
  "Network Engineer",
  "IT Support Specialist",
  "Digital Marketing Specialist",
  "Content Writer",
  "SEO Specialist",
  "HR Specialist",
  "Sales Executive",
];

const Category = () => {
  return (
    <div className=" flex items-center justify-center mt-8">
      <Carousel
  plugins={[
    Autoplay({ delay: 2000 }),
  ]}
  className="w-full max-w-5xl relative"
>
  <CarouselContent className="px-33"> {/* more padding prevents cutting */}
    {category.map((cat, index) => (
      <CarouselItem
        key={index}
        className="basis-1/2 sm:basis-1/3 md:basis-1/4 flex justify-center"
      >
        <Card className="bg-blue-100 flex items-center justify-center shadow-md hover:shadow-xl transition rounded-full px-4 py-2 max-w-[140px]">
          <span className="text-xs sm:text-sm font-medium text-center leading-tight">
            {cat}
          </span>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>

  {/* Floating arrows - they don’t cut into items */}
  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20" />
  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20" />
</Carousel>





    </div>
  );
};

export default Category;
