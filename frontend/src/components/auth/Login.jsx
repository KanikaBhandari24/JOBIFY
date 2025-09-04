import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant.js";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user))
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.log(error);
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
            Login
          </h1>
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
              value={input.role}
              onValueChange={(value) => setInput({ ...input, role: value })}
              className="flex items-center gap-3 ml-1.5"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="Student" id="student" />
                <Label htmlFor="student" className="text-lg">
                  Student
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="Recruiter" id="recruiter" />
                <Label htmlFor="recruiter" className="text-lg">
                  Recruiter
                </Label>
              </div>
            </RadioGroup>
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
              Login
            </Button>
          )}

          <h3 className="mt-4 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Signup
            </Link>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Login;
