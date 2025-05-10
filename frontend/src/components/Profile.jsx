import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

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
        className="max-w-4xl mx-auto pt-8 pb-12 space-y-6 bg-yellow-50 rounded-3xl p-4 shadow-md bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23e5e7eb%22 fill-opacity=%220.1%22%3E%3Crect x=%220%22 y=%220%22 width=%2210%22 height=%2210%22 /%3E%3Crect x=%2210%22 y=%2210%22 width=%2210%22 height=%2210%22 /%3E%3C/g%3E%3C/svg%3E')] bg-[length:20px_20px] bg-repeat"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        {/* Header Tag - Mimicking "Job Categories" */}
        <div className="absolute top-20 left-4 bg-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-tl-lg rounded-br-lg">
          My Profile
        </div>

        {/* Profile Card */}
        <motion.div 
          className="bg-white rounded-3xl shadow-md p-6"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                  alt="profile"
                />
              </Avatar>
              <div>
                <h1 className="text-xl font-medium text-gray-900">
                  {user?.fullname || "N/A"}
                </h1>
                <p className="text-gray-600 text-sm mt-1">
                  {user?.profile?.bio || "No bio available"}
                </p>
              </div>
            </div>
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              <Button
                onClick={() => setOpen(true)}
                className={buttonClasses}
              >
                Edit Profile
                <Pen className="h-5 w-5 ml-2" />
              </Button>
            </motion.div>
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="h-4 w-4 text-gray-500" />
              <span className="text-sm">{user?.email || "Not provided"}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Contact className="h-4 w-4 text-gray-500" />
              <span className="text-sm">{user?.phoneNumber || "Not provided"}</span>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-sm font-medium text-gray-600">Skills</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {user?.profile?.skills.length !== 0 ? (
                user?.profile?.skills.map((item, index) => (
                  <Badge
                    key={index}
                    className="bg-emerald-100 text-emerald-700 px-2 py-1 text-xs rounded-full"
                  >
                    {item}
                  </Badge>
                ))
              ) : (
                <span className="text-gray-500 text-sm">No skills added</span>
              )}
            </div>
          </div>
          <div className="mt-6">
            <Label className="text-sm font-medium text-gray-600">Resume</Label>
            <div className="mt-1">
              {isResume && user?.profile?.resume ? (
                <a
                  target="_blank"
                  href={user?.profile?.resume}
                  className="text-emerald-600 hover:text-emerald-700 text-sm underline transition-colors"
                >
                  {user?.profile?.resumeOriginalName || "Resume"}
                </a>
              ) : (
                <span className="text-gray-500 text-sm">No resume uploaded</span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Applied Jobs Section */}
        <motion.div 
          className="bg-white rounded-3xl shadow-md p-6"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-lg font-medium text-gray-900 mb-4">Applied Jobs</h2>
          <AppliedJobTable />
        </motion.div>
      </motion.div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;