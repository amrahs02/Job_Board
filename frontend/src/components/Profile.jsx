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

const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-8 pb-12 space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
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
                  {user?.fullname}
                </h1>
                <p className="text-gray-600 text-sm mt-1">
                  {user?.profile?.bio || "No bio available"}
                </p>
              </div>
            </div>
            <Button
              onClick={() => setOpen(true)}
              className="bg-gray-800 text-white hover:bg-gray-900 rounded-md px-4 py-2 flex items-center gap-2 transition-colors"
            >
              Edit Profile
              <Pen className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="h-4 w-4 text-gray-500" />
              <span className="text-sm">{user?.email}</span>
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
                    className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-md"
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
                  className="text-gray-800 hover:text-gray-900 text-sm underline transition-colors"
                >
                  {user?.profile?.resumeOriginalName}
                </a>
              ) : (
                <span className="text-gray-500 text-sm">No resume uploaded</span>
              )}
            </div>
          </div>
        </div>

        {/* Applied Jobs Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Applied Jobs</h2>
          <AppliedJobTable />
        </div>
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;