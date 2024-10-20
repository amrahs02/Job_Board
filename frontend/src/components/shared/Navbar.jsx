  import React from "react";
  import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
  import { Button } from "../ui/button";
  import { Avatar, AvatarImage } from "../ui/avatar";
  import { LogOut, User2 } from "lucide-react";
  import { FaHome, FaBriefcase, FaThList } from "react-icons/fa"; // Import icons from react-icons
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
      <div className="bg-gray-100 shadow-lg">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-6">
          <h1 className="text-2xl font-bold text-gray-800">
            <Link to="/">
              Job<span className="text-[#527ae0]">Board</span>
            </Link>
          </h1>
          <div className="flex items-center gap-8">
            <ul className="flex font-medium items-center gap-5 text-gray-700">
              {user && user.role === "recruiter" ? (
                <>
                  <li className="flex items-center">
                    <FaThList className="mr-1" />
                    <Link to="/admin/companies" className="hover:text-[#F83002]">
                      Companies
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FaBriefcase className="mr-1" />
                    <Link to="/admin/jobs" className="hover:text-[#F83002]">
                      Jobs
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-center">
                    <FaHome className="mr-1" />
                    <Link to="/" className="hover:text-[#F83002]">
                      Home
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FaBriefcase className="mr-1" />
                    <Link to="/jobs" className="hover:text-[#F83002]">
                      Jobs
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FaThList className="mr-1" />
                    <Link to="/browse" className="hover:text-[#F83002]">
                      Browse
                    </Link>
                  </li>
                </>
              )}
            </ul>
            {!user ? (
              <div className="flex items-center gap-4">
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="text-gray-800 rounded-2xl border-gray-300 hover:bg-gray-200"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-[#6A38C2] rounded-2xl hover:bg-[#5b30a6] text-white">
                    Signup
                  </Button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80 rounded-2xl shadow-lg p-4 bg-white">
                  <div className="flex items-center gap-2 mb-4">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {user?.fullname}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col text-gray-600">
                    {user.role === "student" && (
                      <div className="flex items-center gap-2 cursor-pointer mb-2">
                        <User2 className="text-gray-600" />
                        <Link to="/profile">
                          <Button
                            variant="link"
                            className="text-gray-600 hover:text-[#F83002]"
                          >
                            View Profile
                          </Button>
                        </Link>
                      </div>
                    )}
                    <div className="flex items-center gap-2 cursor-pointer">
                      <LogOut className="text-gray-600" />
                      <Button
                        onClick={logoutHandler}
                        variant="link"
                        className="text-gray-600 hover:text-[#F83002]"
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
      </div>
    );
  };

  export default Navbar;
