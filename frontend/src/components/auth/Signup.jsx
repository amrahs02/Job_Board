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

  return (
    <div className="min-h-screen   flex flex-col ">
      <Navbar />
      <div className="flex mx-2 rounded-2xl bg-red-400    items-center justify-center flex-1">
        <form
          onSubmit={submitHandler}
          className="w-full sm:max-w-xl max-w-md rounded-2xl shadow-md p-10 bg-white"
        >
          <h1 className="font-bold text-2xl text-center mb-6 text-gray-700">
            Sign Up
          </h1>

          <div className="my-4">
            <Label htmlFor="fullname" className="block text-gray-600 mb-1">
              Full Name
            </Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Enter Your Full Name"
              className="border border-gray-300 rounded-2xl-md p-2 w-full rounded-full focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <div className="my-4">
            <Label htmlFor="email" className="block text-gray-600 mb-1">
              Email
            </Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter Your Email"
              className="border border-gray-300 rounded-2xl-md p-2 w-full rounded-full focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <div className="my-4">
            <Label htmlFor="phoneNumber" className="block text-gray-600 mb-1">
              Phone Number
            </Label>
            <Input
              type="text"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="Enter Your Phone Number"
              className="border border-gray-300 rounded-2xl-md p-2 w-full rounded-full focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <div className="my-4">
            <Label htmlFor="password" className="block text-gray-600 mb-1">
              Password
            </Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter Your Password"
              className="border border-gray-300 rounded-2xl-md p-2 w-full rounded-full focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col items-start justify-between gap-6  rounded-lg w-full max-w-lg">
            <div className="w-full">
              <Label
                htmlFor="role"
                className="block text-lg font-semibold text-gray-700 mb-4"
              >
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
                    className="cursor-pointer h-5 w-5 border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <Label
                    htmlFor="r1"
                    className="ml-3 text-gray-700 font-medium"
                  >
                    Student
                  </Label>
                </div>
                <div className="flex items-center">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                    className="cursor-pointer h-5 w-5 border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <Label
                    htmlFor="r2"
                    className="ml-3 text-gray-700 font-medium"
                  >
                    Recruiter
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="w-full">
              <Label
                htmlFor="file"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Profile Image
              </Label>
              <div className="flex items-center gap-4">
                <Input
                  accept="image/*"
                  type="file"
                  onChange={changeFileHandler}
                  className="cursor-pointer rounded-full px-4 py-2 border border-gray-300 bg-gray-50 text-gray-700 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          </div>

          <div className="my-4">
            {loading ? (
              <Button className="w-full flex items-center rounded-full justify-center py-2 bg-blue-600 text-white rounded-2xl-md hover:bg-blue-700 transition">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full py-2 bg-blue-600 rounded-full text-white rounded-2xl-md hover:bg-blue-700 transition"
              >
                Signup
              </Button>
            )}
          </div>

          <div className="text-center">
            <span className="text-sm text-gray-600">
              Already have an account?
              <Link to="/login" className="text-blue-600 font-semibold">
                {" "}
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
