import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { IoCopy } from "react-icons/io5";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { loading, user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Function to fill in the test credentials only
  const fillTestCredentials = (email, password, role) => {
    setInput({ email, password, role });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "An error occurred. Please try again.");
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
        className="flex bg-emerald-200 mx-2 rounded-3xl items-center justify-center flex-grow bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23e5e7eb%22 fill-opacity=%220.2%22%3E%3Crect x=%220%22 y=%220%22 width=%2210%22 height=%2210%22 /%3E%3Crect x=%2210%22 y=%2210%22 width=%2210%22 height=%2210%22 /%3E%3C/g%3E%3C/svg%3E')] bg-[length:20px_20px] bg-repeat"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <motion.form 
          onSubmit={submitHandler}
          className="w-full max-w-md bg-white shadow-lg rounded-3xl p-8 m-4"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          {/* Header Tag - Mimicking "Job Categories" */}
          <div className="absolute top-24 left-8 bg-yellow-400 text-emerald-800 text-sm font-medium px-3 py-1 rounded-tl-lg rounded-br-lg">
            Login
          </div>

          <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">Login</h1>
          <div className="mb-4">
            <Label className="text-gray-700">Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter Your Email"
              className="mt-1 rounded-full border-gray-300 focus:border-emerald-500 focus:ring-0 text-gray-700 placeholder-gray-500 shadow-md transition-all duration-200"
            />
          </div>
          <div className="mb-4">
            <Label className="text-gray-700">Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter Your Password"
              className="mt-1 rounded-full border-gray-300 focus:border-emerald-500 focus:ring-0 text-gray-700 placeholder-gray-500 shadow-md transition-all duration-200"
            />
          </div>
          <div className="mb-6">
            <Label className="block mb-3 text-gray-700">Select Role</Label>
            <RadioGroup className="flex items-center gap-4">
              <div className="flex items-center">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer h-5 w-5 border-gray-300 text-emerald-600 focus:ring-emerald-500"
                />
                <Label htmlFor="r1" className="ml-2 text-gray-700">Student</Label>
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
                <Label htmlFor="r2" className="ml-2 text-gray-700">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <Button 
              type="submit"
              className={buttonClasses}
            >
              {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : "Login"}
            </Button>
          </motion.div>
          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account? 
            <Link to="/signup" className="text-emerald-600 hover:underline ml-1">Signup</Link>
          </p>
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">Test Credentials:</p>
            <div className="flex justify-center items-center gap-4 mt-2">
              <div>
                <p className="text-gray-600 text-sm">Email: <strong>test@gmail.com</strong> | Password: <strong>test</strong></p>
                <motion.button
                  type="button"
                  className={buttonClasses.replace("bg-emerald-500", "bg-gray-200").replace("hover:bg-emerald-600", "hover:bg-gray-300").replace("text-white", "text-gray-700")}
                  onClick={() => fillTestCredentials("test@gmail.com", "test", "student")}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                >
                  <IoCopy className="mr-2" />
                  Copy
                </motion.button>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Email: <strong>admin@gmail.com</strong> | Password: <strong>admin</strong></p>
                <motion.button
                  type="button"
                  className={buttonClasses.replace("bg-emerald-500", "bg-gray-200").replace("hover:bg-emerald-600", "hover:bg-gray-300").replace("text-white", "text-gray-700")}
                  onClick={() => fillTestCredentials("admin@gmail.com", "admin", "recruiter")}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                >
                  <IoCopy className="mr-2" />
                  Copy
                </motion.button>
              </div>
            </div>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Login;