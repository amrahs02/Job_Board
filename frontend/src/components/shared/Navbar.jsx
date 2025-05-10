import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

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
    <nav
      className="bg-emerald-200 mx-1 mb-1 p-2 rounded-3xl shadow-md sticky top-0 z-10"
      style={{
        backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23e5e7eb" fill-opacity="0.2"%3E%3Crect x="0" y="0" width="10" height="10" /%3E%3Crect x="10" y="10" width="10" height="10" /%3E%3C/g%3E%3C/svg%3E')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between relative">
        {/* Logo - Mimicking the playful header */}
        <div
          // redirect to homepage
          onClick={() => navigate("/")}
          className="absolute top-2 left-4 bg-emerald-300 text-emerald-800 text-xl font-medium px-3 py-1 rounded-tl-lg rounded-br-lg"
        >
          JobBoard
        </div>
        <h1 className="text-2xl font-bold text-gray-900">
          {/* <Link to="/">Job<span className="text-blue-500">Board</span></Link> */}
        </h1>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex items-center gap-4 absolute md:static top-20 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none rounded-b-2xl`}
        >
          <ul className="flex flex-col md:flex-row gap-4 text-sm text-gray-700">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link
                    to="/admin/companies"
                    className="hover:text-gray-900 bg-emerald-300 p-3 rounded-md border-2 border-black transition-colors duration-300 ease-in-out shadow-[4px_4px_0_0_rgba(192,132,252,0.5)]"
                  >
                    Companies
                  </Link>
                </li>

                <li>
                  <Link
                    to="/admin/jobs"
                    className="hover:text-gray-900 bg-emerald-300 p-3 rounded-md border-2 border-black transition-colors duration-300 ease-in-out shadow-[4px_4px_0_0_rgba(192,132,252,0.5)]"
                  >
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    className="hover:text-gray-900 bg-emerald-300 p-3 rounded-md border-2 border-black transition-colors duration-300 ease-in-out shadow-[4px_4px_0_0_rgba(192,132,252,0.5)]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs"
                    className="hover:text-gray-900 bg-emerald-300 p-3 rounded-md border-2 border-black transition-colors duration-300 ease-in-out shadow-[4px_4px_0_0_rgba(192,132,252,0.5)]"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/browse"
                    className="hover:text-gray-900 bg-emerald-300 p-3 rounded-md border-2 border-black transition-colors duration-300 ease-in-out shadow-[4px_4px_0_0_rgba(192,132,252,0.5)]"
                  >
                    Browse
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Authentication */}
          {!user ? (
            <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
              <Link to="/login">
                <Button
                  variant="ghost"
                  className="hover:text-gray-900 bg-emerald-300 p-3 rounded-md border-2 border-black transition-colors duration-300 ease-in-out shadow-[4px_4px_0_0_rgba(192,132,252,0.5)]"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="hover:text-gray-900 bg-emerald-300 p-3 rounded-md border-2 border-black transition-colors duration-300 ease-in-out shadow-[4px_4px_0_0_rgba(192,132,252,0.5)]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="h-10 w-10 cursor-pointer hover:ring-2 hover:ring-emerald-200 transition-all">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt={user?.fullname}
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4 bg-white rounded-lg shadow-md border border-emerald-100">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt={user?.fullname}
                      />
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        {user?.fullname}
                      </h4>
                      <p className="text-xs text-gray-600 truncate">
                        {user?.profile?.bio || "No bio"}
                      </p>
                    </div>
                  </div>
                  {user.role === "student" && (
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 text-gray-700 hover:text-emerald-600"
                    >
                      <User2 className="h-4 w-4 text-gray-600" />
                      <span className="text-sm">Profile</span>
                    </Link>
                  )}
                  <button
                    onClick={logoutHandler}
                    className="flex items-center gap-2 w-full text-left text-gray-700 hover:text-red-600"
                  >
                    <LogOut className="h-4 w-4 text-gray-600" />
                    <span className="text-sm">Logout</span>
                  </button>
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
