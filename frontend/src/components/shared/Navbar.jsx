import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import axios from "axios";
import { toast } from "sonner";

const Navbar = () => {
  // const user = true;  true-avatar, false-login/sigup
  const { user } = useSelector((store) => store.auth);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => setMenuOpen(!menuOpen);
  const handleCloseMenu = () => setMenuOpen(false);

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const logoutHandler=async()=>{
    try {
      const res=await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true});
      if(res.data.success){
        dispatch(setUser(null))
        navigate("/")
        toast.success(res.data.success)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }


  return (
    <nav className="w-full sm:px-25 sm:py-6 md:px-15 md:py-6 lg:py-6 lg:px-25 py-5 px-5 flex items-center justify-between relative z-50">
      {/* Left: Logo */}
      <div className="flex items-center gap-1 sm:gap-2 md:gap-1 md:ml-0">
        <img
          className="lg:w-10 lg:h-10 h-7 w-7 md:h-7 md:w-7"
          src="/job-portal (1).png"
          alt="logo"
        />
        <h1 className="text-3xl lg:text-4xl md:text-3xl font-bold">
          Jobi
          <span className="text-3xl sm:text-3xl lg:text-4xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
            Fy
          </span>
        </h1>
      </div>

      {/* Middle: Nav links (hidden on small screens) */}
      <ul className="hidden sm:flex font-semibold lg:gap-10 gap-7 md:text-md text-lg">
        <li className="cursor-pointer hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:underline">
          <Link to="/jobs">Jobs</Link>
        </li>
        <li className="cursor-pointer hover:underline">
          <Link to="/browse">Browse</Link>
        </li>
      </ul>

      {/* Right: Auth + Hamburger */}
      <div className="flex items-center gap-4 sm:gap-6">
        {!user ? (
          <>
            <Link to="/login">
              <button className="text-sm sm:text-base font-semibold hover:text-green-500">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-3 py-1.5 text-sm sm:text-base hover:bg-blue-400 bg-blue-300 rounded-lg">
                Sign Up
              </button>
            </Link>
          </>
        ) : (
          <Popover className=''>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={user?.profile?.profilePhoto} alt="user" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="sm:mr-10 mr-2 w-64 p-4 mt-2 shadow-lg border rounded-lg bg-white z-50">
              {/* User Info */}
              <div className="flex gap-3 items-center border-b pb-3">
                <Avatar>
                  <AvatarImage src={user?.profile?.profilePhoto} alt="user" />
                </Avatar>
                <div>
                  <h2 className="font-semibold">{user?.fullname}</h2>
                  <p className="text-sm text-gray-500">
                    {user?.profile?.bio}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2 mt-3 text-gray-700">
                <Link
                  to="/profile"
                  className="flex items-center gap-2 hover:text-green-500"
                >
                  <User2 className="h-4 w-4" />
                  View Profile
                </Link>
                <button
                  className="flex items-center gap-2 hover:text-red-500"
                  onClick={logoutHandler}
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </PopoverContent>
          </Popover>
        )}

        {/* Hamburger icon for mobile nav */}
        <Menu className="cursor-pointer sm:hidden" onClick={handleMenuClick} />
      </div>

      {/* Dropdown nav on small screens */}
      {menuOpen && (
        <div className="absolute top-full right-4 mt-2 bg-white rounded-lg shadow-lg sm:hidden z-50">
          <ul className="flex flex-col text-base font-semibold p-4 gap-3 min-w-[150px]">
            <li>
              <Link
                to="/"
                className="cursor-pointer hover:text-blue-500"
                onClick={handleCloseMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/jobs"
                className="cursor-pointer hover:text-blue-500"
                onClick={handleCloseMenu}
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/browse"
                className="cursor-pointer hover:text-blue-500"
                onClick={handleCloseMenu}
              >
                Browse
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
