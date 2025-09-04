import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { setLoading } from "@/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

const Signup = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
    file: "",
    fullname: "",
    phone: "", // ✅ changed from phoneNumber
  });

  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const formData = new FormData();
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("role", input.role);
    formData.append("fullname", input.fullname);
    formData.append("phone", input.phone); // ✅ fixed key
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mt-0 flex justify-center items-center sm:mx-auto sm:px-25 sm:py-10 py-6 px-5">
        <form onSubmit={submitHandler} className="sm:w-1/2 w-full max-w-md">
          <h1 className="text-3xl font-bold text-blue-500 text-center">
            Sign Up
          </h1>

          <div>
            <Label className="mt-4 mb-2 text-lg">Full Name</Label>
            <Input
              type="text"
              placeholder="Enter your name"
              name="fullname"
              onChange={changeEventHandler}
              value={input.fullname}
            />
          </div>

          <div>
            <Label className="mt-4 mb-2 text-lg">Email</Label>
            <Input
              type="text"
              placeholder="Enter your @email"
              name="email"
              onChange={changeEventHandler}
              value={input.email}
            />
          </div>

          <div>
            <Label className="mt-4 mb-2 text-lg">Phone number</Label>
            <Input
              type="text"
              placeholder="Enter your phone no."
              name="phone" // ✅ changed
              onChange={changeEventHandler}
              value={input.phone}
            />
          </div>

          <div>
            <Label className="mt-4 mb-2 text-lg">Password</Label>
            <Input
              type="password"
              placeholder="#@124&_094..."
              name="password"
              onChange={changeEventHandler}
              value={input.password}
            />
          </div>

          {/* Responsive container for radio + profile */}
          <div className="mt-4 flex flex-wrap items-center justify-between border-1 py-1 px-1 rounded-lg gap-3">
            {/* Role selection */}
            <RadioGroup
              defaultValue="comfortable"
              className="flex items-center gap-3 ml-1.5"
            >
              <div className="flex items-center gap-2">
                <Input
                  type="radio"
                  name="role"
                  value="Student" // ✅ Capital S
                  checked={input.role === "Student"}
                  onChange={changeEventHandler}
                />
                <Label htmlFor="r1" className="text-lg">
                  Student
                </Label>
              </div>

              <div className="flex items-center gap-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recruiter" // ✅ Capital R
                  checked={input.role === "Recruiter"}
                  onChange={changeEventHandler}
                />
                <Label htmlFor="r2" className="text-lg">
                  Recruiter
                </Label>
              </div>
            </RadioGroup>

            {/* Profile input */}
            <div className="flex items-center gap-2 sm:ml-6.5 sm:mr-10 w-full sm:w-auto mb-2 mt-0">
              <Label className="text-lg">Profile</Label>
              <Input
                accept="image/*"
                type="file"
                onChange={changeFileHandler}
                className="cursor-pointer w-full sm:w-70 border-gray-400"
              />
            </div>
          </div>

          {loading ? (
            <Button
              disabled
              className="w-full mt-4 border-1 text-lg hover:bg-blue-400 bg-blue-300 py-1.5 rounded-lg cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Loader2 className="w-5 h-5 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full mt-4 border-1 text-lg hover:bg-blue-400 bg-blue-300 py-1.5 rounded-lg cursor-pointer"
            >
              Signup
            </Button>
          )}

          <h3 className="mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Signup;
