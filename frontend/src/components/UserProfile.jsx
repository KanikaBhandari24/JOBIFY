import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./Footer";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobsTable from "./AppliedJobsTable";
import { FaFilePdf } from "react-icons/fa6";
import UpdateProfile from "./UpdateProfile";
import { useSelector } from "react-redux";

// const skills = [
//   "Html",
//   "Css",
//   "Tailwind Css",
//   "React",
//   "Next",
//   "Node",
//   "Express",
// ];

const isResume = true;

const UserProfile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow sm:px-6 md:px-12 lg:px-40 py-6 px-4">
        {/* Profile Top */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16 sm:w-20 sm:h-20">
              <AvatarImage
                src="https://res.cloudinary.com/vistaprint/images/c_scale,w_448,h_448,dpr_2/f_auto,q_auto/v1706191816/ideas-and-advice-prod/blogadmin/Screenshot-2024-01-25-at-15.09.28/Screenshot-2024-01-25-at-15.09.28.png?_i=AA"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-bold text-lg sm:text-xl">{user?.fullname}</h1>
              <p className="text-sm text-gray-600">{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="self-start sm:self-auto cursor-pointer"
          >
            <Pen className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-5 space-y-2">
          <div className="flex gap-2 sm:gap-3 items-center text-sm sm:text-base">
            <Mail className="w-4 h-4" />
            <span>{user?.email}</span>
          </div>
          <div className="flex gap-2 sm:gap-3 items-center text-sm sm:text-base">
            <Contact className="w-4 h-4" />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h2 className="mb-2 font-bold text-lg sm:text-xl">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {user?.profile?.skills?.length > 0 ? (
              user.profile.skills.map((item, index) => (
                <Badge
                  className="hover:bg-blue-300 cursor-pointer text-sm sm:text-base"
                  variant="outline"
                  key={index}
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>

        {/* Resume */}
        <div className="grid w-full items-center gap-1.5 mt-6">
          <Label className="font-bold text-lg sm:text-xl">Resume</Label>
          {isResume ? (
            <a
              href={user?.profile?.resume}
              target="_blank"
              rel="noopener noreferrer"
              download={user?.profile?.resumeOriginalName || "resume.pdf"}
              className="text-sm sm:text-base flex items-center gap-2"
            >
              {user?.profile?.resumeOriginalName}
              <FaFilePdf className="hover:text-red-600 w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>

        {/* Applied Jobs */}
        <div className="mt-6">
          <h2 className="font-bold text-lg sm:text-xl mb-2">Applied Jobs</h2>
          <AppliedJobsTable />
        </div>

        {/* Update Profile Dialog */}
        <UpdateProfile open={open} setOpen={setOpen} />
      </div>

      <Footer />
    </div>
  );
};

export default UserProfile;
