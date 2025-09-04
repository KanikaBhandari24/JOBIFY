import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({job}) => {
  const navigate=useNavigate();
  // const jobId="ujnferkjfm";
  const daysAgo=(mongodbTime)=>{
    const createdAt=new Date(mongodbTime);
    const currentTime=new Date();
    const timeDiff=currentTime-createdAt;
    return Math.floor(timeDiff/(1000*60*60*24));

  }

  return (
    <div className="flex flex-col gap-2 p-4 border border-gray-300 rounded-lg ml-5">
      <div className="flex justify-between items-center">
        <p className="text-sm">{daysAgo(job?.createdAt)===0?"Today":`${daysAgo(job?.createdAt)} days ago`}</p>
        <Button variant="" className="rounded-full" size="">
          {" "}
          <Bookmark />
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button>
          <Avatar>
            <AvatarImage src="https://res.cloudinary.com/vistaprint/images/c_scale,w_448,h_448,dpr_2/f_auto,q_auto/v1706191816/ideas-and-advice-prod/blogadmin/Screenshot-2024-01-25-at-15.09.28/Screenshot-2024-01-25-at-15.09.28.png?_i=AA" />
          </Avatar>
        </Button>
        <div className="flex flex-col">
        <h1 className="font-bold text-xl">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">{job?.location}</p>
      </div>
        </div>
      <div>
        <h1 className="text-lg mt-3 mb-1 font-semibold">{job?.title}</h1>
        <p className="text-sm mb-3">{job?.description}</p>
      </div>
      <div className="flex gap-2 mb-3 sm:flex-row flex-col md:flex-row flex-wrap">
        <Badge variant='ghost' className={"text-blue-500 font-bold"}>{job?.position}</Badge>
        <Badge variant='ghost' className={"text-orange-500 font-bold"}>{job?.jobType}</Badge>
        <Badge variant='ghost' className={"text-green-500 font-bold"}>{job?.salary}</Badge>
      </div>
      <div className="flex gap-5 ">
        <Button onClick={()=>navigate(`/detail/${job?._id}`)} className='cursor-pointer hover:text-red-500'>Details</Button>
        <Button className='text-blue-500 border-1 hover:bg-blue-500 hover:text-white'>Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
