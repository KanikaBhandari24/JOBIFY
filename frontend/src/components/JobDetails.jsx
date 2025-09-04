import React, { useEffect } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Navbar from "./shared/Navbar";
import { useParams } from "react-router-dom";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

const JobDetails = () => {
  const params = useParams();
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  // const isApplied = singleJob?.applicants?.includes(store.getState().auth.user?._id) || false;
  const isApplied =
    singleJob?.applications?.some(
      (application) => application.applicant === user?._id
    ) || false;

  const jobId = params.id;

  const dispatch = useDispatch();

  const applyJobHandler=async()=>{
    try {
      const res=await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {
        withCredentials: true});
      console.log(res.data);  
      if(res.data.success){
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div>
      <Navbar />
      <div className="w-full sm:px-25 sm:py-6 md:px-15 md:py-6 lg:py-15 lg:px-45 py-5 px-5 ">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-3xl mb-5">{singleJob?.title}</h1>
            <div className="flex gap-2 sm:flex-row flex-col md:flex-row flex-wrap">
              <Badge variant="ghost" className={"text-blue-500 font-bold"}>
                {singleJob?.position} Positions
              </Badge>
              <Badge variant="ghost" className={"text-orange-500 font-bold"}>
                {singleJob?.jobType}
              </Badge>
              <Badge variant="ghost" className={"text-green-500 font-bold"}>
                {singleJob?.salary}
              </Badge>
            </div>
          </div>
          <Button
          onClick={isApplied?null:applyJobHandler}
            disabled={isApplied}
            className={`${
              isApplied
                ? "bg-red-500 cursor-not-allowed"
                : "hover:bg-green-500 bg-green-400"
            }`}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>
        <div>
          <h1 className="mt-10 font-bold text-2xl mb-2">Job Details</h1>
          <hr className="text-gray-500" />
          <div className="mt-3">
            <p className="font-bold mb-1">
              Role:{" "}
              <span className="ml-3 font-medium text-gray-600 ">
                {singleJob?.title}
              </span>
            </p>
            <p className="font-bold mb-1">
              Location:{" "}
              <span className="ml-3 font-medium text-gray-600">
                {singleJob?.location}
              </span>
            </p>
            <p className="font-bold mb-1">
              Description:{" "}
              <span className="ml-3 font-medium text-gray-600">
                {singleJob?.description}
              </span>
            </p>
            <p className="font-bold mb-1">
              Experience:{" "}
              <span className="ml-3 font-medium text-gray-600">
                {singleJob?.experienceLevel} yrs
              </span>
            </p>
            <p className="font-bold mb-1">
              Salary:{" "}
              <span className="ml-3 font-medium text-gray-600">
                {singleJob?.salary}
              </span>
            </p>
            <p className="font-bold mb-1">
              Total Applicants:{" "}
              <span className="ml-3 font-medium text-gray-600">
                {singleJob?.applicants?.length}
              </span>
            </p>
            <p className="font-bold">
              Posted Date:{" "}
              <span className="ml-3 font-medium text-gray-600">
                {singleJob?.createdAt.split("T")[0]}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
