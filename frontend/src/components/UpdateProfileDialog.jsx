import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.map((skill) => skill) || "",
    file: user?.profile?.resume || "",
  });
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
    setOpen(false);
    console.log(input);
  };

  return (
    <Dialog open={open}>
      <DialogContent 
        className="sm:max-w-[650px] bg-gray-50 rounded-lg shadow-sm border-none p-6"
        onInteractOutside={() => setOpen(false)}
      >
        <DialogHeader className="mb-6">
          <DialogTitle className="text-xl font-medium text-gray-900">
            Edit Profile
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={submitHandler} className="space-y-5">
          <div className="space-y-1">
            <Label htmlFor="name" className="text-sm text-gray-600">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={input.fullname}
              onChange={changeEventHandler}
              className="w-full border border-gray-300  rounded-full bg-white py-2 px-3 text-gray-900 focus:border-gray-500 focus:ring-0 transition-colors"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email" className="text-sm text-gray-600">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={input.email}
              onChange={changeEventHandler}
              className="w-full border border-gray-300  rounded-full bg-white py-2 px-3 text-gray-900 focus:border-gray-500 focus:ring-0 transition-colors"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="number" className="text-sm text-gray-600">
              Phone
            </Label>
            <Input
              id="number"
              name="number"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              className="w-full border border-gray-300  rounded-full bg-white py-2 px-3 text-gray-900 focus:border-gray-500 focus:ring-0 transition-colors"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="bio" className="text-sm text-gray-600">
              Bio
            </Label>
            <Input
              id="bio"
              name="bio"
              value={input.bio}
              onChange={changeEventHandler}
              className="w-full border border-gray-300  rounded-full bg-white py-2 px-3 text-gray-900 focus:border-gray-500 focus:ring-0 transition-colors"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="skills" className="text-sm text-gray-600">
              Skills
            </Label>
            <Input
              id="skills"
              name="skills"
              value={input.skills}
              onChange={changeEventHandler}
              className="w-full border border-gray-300  rounded-full bg-white py-2 px-3 text-gray-900 focus:border-gray-500 focus:ring-0 transition-colors"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="file" className="text-sm text-gray-600">
              Resume
            </Label>
            <Input
              id="file"
              name="file"
              type="file"
              accept="application/pdf"
              onChange={fileChangeHandler}
              className="w-full border border-gray-300 bg-white py-2 px-3 text-gray-900 file:bg-gray-100 file:border-0 file:mr-4 file:py-1 file:px-3 file: rounded-full file:text-gray-700 hover:file:bg-gray-200 transition-colors"
            />
          </div>
          <DialogFooter className="pt-4">
            {loading ? (
              <Button 
                className="w-full bg-gray-800 text-white  rounded-full py-2 hover:bg-gray-900 transition-colors flex items-center justify-center"
                disabled
              >
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                Saving...
              </Button>
            ) : (
              <Button 
                type="submit" 
                className="w-full bg-gray-800 text-white  rounded-full py-2 hover:bg-gray-900 transition-colors"
              >
                Save Changes
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfileDialog;