import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./Footer";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import store from "@/redux/store";

const jobArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  const {allJobs}=useSelector(store=>store.job)
  return (
    <div>
      <Navbar />
      <div className="mt-3 w-full sm:px-6 sm:py-6 md:px-10 md:py-6 lg:py-6 lg:px-20 py-5 px-5">
        <div className="flex flex-col lg:flex-row gap-3">
          {/* Sidebar */}
          <div className="lg:w-20%">
            <FilterCard />
          </div>

          {/* Jobs Section */}
          {allJobs.length <= 0 ? (
            <span>No Job Found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {allJobs.map((job) => (
                  <div key={job?._id}>
                    <Job job={job} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;