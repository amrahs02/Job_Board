import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { FaHome, FaBriefcase, FaThList } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <nav className="bg-gradient-to-r mx-2 rounded-2xl  from-green-400 to-green-500 shadow-lg sticky top-0 z-10">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-6 md:px-8">
        <h1 className="text-3xl font-bold text-white transition duration-200 hover:underline">
          <Link to="/">
            Job<span className="text-blue-600">Board</span>
          </Link>
        </h1>
        <div className="flex items-center gap-6">
          <ul className="flex font-medium items-center gap-8 text-white">
            {user && user.role === "recruiter" ? (
              <>
                <li className="flex items-center transition-colors duration-200 hover:text-yellow-300">
                  <FaThList className="mr-1" />
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li className="flex items-center transition-colors duration-200 hover:text-yellow-300">
                  <FaBriefcase className="mr-1" />
                  <Link to="/admin/jobs">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li className="flex items-center transition-colors duration-200 hover:text-yellow-300">
                  <FaHome className="mr-1" />
                  <Link to="/">Home</Link>
                </li>
                <li className="flex items-center transition-colors duration-200 hover:text-yellow-300">
                  <FaBriefcase className="mr-1" />
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li className="flex items-center transition-colors duration-200 hover:text-yellow-300">
                  <FaThList className="mr-1" />
                  <Link to="/browse">Browse</Link>
                </li>
              </>
            )}
          </ul>

          {!user ? (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="text-blue-600 border-white rounded-full hover:bg-white hover:text-blue-600 transition duration-200"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-white text-blue-600 rounded-full px-6 hover:bg-blue-200 transition duration-200">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer border-2 border-white transition-transform duration-200 transform hover:scale-110">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt={user?.fullname}
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-64 rounded-lg shadow-lg p-4 bg-white border border-gray-300">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt={user?.fullname}
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-800">{user?.fullname}</h4>
                    <p className="text-sm text-gray-500">{user?.profile?.bio}</p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-600">
                  {user.role === "student" && (
                    <div className="flex items-center gap-2 cursor-pointer mb-2 hover:text-blue-600 transition-colors duration-200">
                      <User2 className="text-gray-600" />
                      <Link to="/profile">
                        <Button
                          variant="link"
                          className="text-gray-600 hover:text-blue-600"
                        >
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  )}
                  <div className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition-colors duration-200">
                    <LogOut className="text-gray-600" />
                    <Button
                      onClick={logoutHandler}
                      variant="link"
                      className="text-gray-600 hover:text-red-600"
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;