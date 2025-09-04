import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCards = ({ job }) => {
  return (
    <div className=" border-1 p-4 rounded-xl shadow-xl border-gray-400 flex flex-col gap-4 mt-2">
      <div>
        <h1 className="text-xl font-bold">{job?.company?.name}</h1>
        <p className="text-gray-500">{job?.location}</p>
      </div>
      <div>
        <h1 className="text-lg font-bold">{job?.title}</h1>
        <p className="text-gray-500 text-sm">{job?.description}</p>
      </div>
      <div className="flex gap-2 sm:flex-row flex-col md:flex-row flex-wrap">
        <Badge variant="ghost" className={"text-blue-500 font-bold"}>
          {job?.position}
        </Badge>
        <Badge variant="ghost" className={"text-orange-500 font-bold"}>
          {job?.jobType}
        </Badge>
        <Badge variant="ghost" className={"text-green-500 font-bold"}>
          {job?.salary}
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
