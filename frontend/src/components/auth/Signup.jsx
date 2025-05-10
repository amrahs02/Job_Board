import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const { loading, user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(); // FormData object
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Button size and style constants for symmetry
  const buttonClasses = "h-12 px-6 text-sm font-medium rounded-full shadow-md bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-300 ease-in-out hover:shadow-lg";

  // Animation variants for Framer Motion
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <motion.div 
        className="flex mx-2 rounded-3xl bg-emerald-200 items-center justify-center flex-1 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23e5e7eb%22 fill-opacity=%220.2%22%3E%3Crect x=%220%22 y=%220%22 width=%2210%22 height=%2210%22 /%3E%3Crect x=%2210%22 y=%2210%22 width=%2210%22 height=%2210%22 /%3E%3C/g%3E%3C/svg%3E')] bg-[length:20px_20px] bg-repeat"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <motion.form
          onSubmit={submitHandler}
          className="w-full sm:max-w-xl max-w-md rounded-3xl shadow-lg p-8 m-4 bg-white"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          {/* Header Tag - Mimicking "Job Categories" */}
          <div className="absolute top-24 left-8 bg-yellow-400 text-emerald-800 text-sm font-medium px-3 py-1 rounded-tl-lg rounded-br-lg">
            Sign Up
          </div>

          <h1 className="font-bold text-2xl text-center mb-6 text-gray-800">Sign Up</h1>

          <div className="my-4">
            <Label htmlFor="fullname" className="block text-gray-700 mb-1">
              Full Name
            </Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Enter Your Full Name"
              className="mt-1 rounded-full border-gray-300 focus:border-emerald-500 focus:ring-0 text-gray-700 placeholder-gray-500 shadow-md transition-all duration-200"
              required
            />
          </div>

          <div className="my-4">
            <Label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter Your Email"
              className="mt-1 rounded-full border-gray-300 focus:border-emerald-500 focus:ring-0 text-gray-700 placeholder-gray-500 shadow-md transition-all duration-200"
              required
            />
          </div>

          <div className="my-4">
            <Label htmlFor="phoneNumber" className="block text-gray-700 mb-1">
              Phone Number
            </Label>
            <Input
              type="text"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="Enter Your Phone Number"
              className="mt-1 rounded-full border-gray-300 focus:border-emerald-500 focus:ring-0 text-gray-700 placeholder-gray-500 shadow-md transition-all duration-200"
              required
            />
          </div>

          <div className="my-4">
            <Label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter Your Password"
              className="mt-1 rounded-full border-gray-300 focus:border-emerald-500 focus:ring-0 text-gray-700 placeholder-gray-500 shadow-md transition-all duration-200"
              required
            />
          </div>

          <div className="flex flex-col items-start justify-between gap-6 rounded-lg w-full max-w-lg">
            <div className="w-full">
              <Label htmlFor="role" className="block text-lg font-semibold text-gray-700 mb-4">
                Select Role
              </Label>
              <RadioGroup className="flex items-center gap-8">
                <div className="flex items-center">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer h-5 w-5 border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <Label htmlFor="r1" className="ml-3 text-gray-700 font-medium">Student</Label>
                </div>
                <div className="flex items-center">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                    className="cursor-pointer h-5 w-5 border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <Label htmlFor="r2" className="ml-3 text-gray-700 font-medium">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="w-full">
              <Label htmlFor="file" className="block text-lg font-semibold text-gray-700 mb-2">
                Profile Image
              </Label>
              <motion.div 
                className="flex items-center gap-4"
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
              >
                <Input
                  accept="image/*"
                  type="file"
                  onChange={changeFileHandler}
                  className="cursor-pointer rounded-full px-4 py-2 border border-gray-300 bg-gray-50 text-gray-700 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="my-4"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            {loading ? (
              <Button 
                className={buttonClasses.replace("bg-emerald-500", "bg-gray-200").replace("hover:bg-emerald-600", "hover:bg-gray-300").replace("text-white", "text-gray-700")}
              >
                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Please wait
              </Button>
            ) : (
              <Button 
                type="submit"
                className={buttonClasses}
              >
                Signup
              </Button>
            )}
          </motion.div>

          <div className="text-center">
            <span className="text-sm text-gray-600">
              Already have an account?
              <Link to="/login" className="text-emerald-600 font-semibold hover:underline ml-1"> Login</Link>
            </span>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Signup;