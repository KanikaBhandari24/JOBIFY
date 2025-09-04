import React from "react";
import LatestJobCards from "./LatestJobCards";
import store from "@/redux/store";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const {allJobs}=useSelector(store=>store.job);
  return (
    <div className="md:px-15 md:py-6 w-full lg:px-25 sm:py-7 py-6 px-5 mt-10">
      <h1 className="text-4xl sm:text-4xl font-bold">Latest & Top <span className="text-4xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">Jobs</span></h1>
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-6">
      {
        allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job} />)
      }
      </div>
    </div>
  );
};

export default LatestJobs;
