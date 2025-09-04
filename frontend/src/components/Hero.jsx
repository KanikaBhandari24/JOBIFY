import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center justify-center">
      {/* Background image with opacity */}
      <div
        style={{ backgroundImage: "url('/bg-jobportal.png')" }}
        className="absolute inset-0 bg-cover bg-center opacity-50"
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full sm:px-25 py-6 px-5">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-red-500 font-bold">No.1 Job hunting platform</h2>
          <h1 className="mt-5 font-bold text-4xl max-w-[500px] text-center mx-auto sm:text-5xl">
            Dream, Apply & Reach the Sky — Find Your Future with Jobi
            <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
              Fy
            </span>
          </h1>
          <p className="mt-5 text-sm">
            Search Between More Than 50,000 Open Jobs.
          </p>
          <div className="mt-5 rounded-full border border-gray-300 w-full max-w-2xl flex items-center gap-3 shadow-lg bg-white/90">
            <input
              type="text"
              placeholder="Find your dream jobs..."
              className="px-2 py-3 sm:py-3 sm:px-5 flex-1 outline-none focus:outline-none focus:ring-0 bg-transparent"
            />
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-full h-12 w-12">
              <Search className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
