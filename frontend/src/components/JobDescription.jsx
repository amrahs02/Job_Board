import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const JobDescription = () => {
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  const [isApplied, setIsApplied] = useState(false);
  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        { withCredentials: true }
      );

      if (res.data.success) {
        setIsApplied(true);
        const updatedSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updatedSingleJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications.some(
              (application) => application.applicant === user?._id
            )
          );
        }
      } catch (error) {
        toast.error("Failed to fetch job details.");
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className="container mx-auto p-6 my-12 border border-gray-200 shadow-lg rounded-2xl">
      <header className="flex justify-between items-center border-b pb-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {singleJob?.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <Badge className="text-blue-700 bg-blue-200 font-medium">{singleJob?.postion} Positions</Badge>
            <Badge className="text-red-500 bg-red-200 font-medium">{singleJob?.jobType}</Badge>
            <Badge className="text-purple-700 bg-purple-200 font-medium">{singleJob?.salary} LPA</Badge>
          </div>
        </div>
        <Button
          onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className={`rounded-lg px-6 py-2 ${
            isApplied ? "bg-gray-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"
          } text-white`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </header>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Job Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p className="font-medium">
            <span className="text-gray-600">Role:</span> {singleJob?.title}
          </p>
          <p className="font-medium">
            <span className="text-gray-600">Location:</span> {singleJob?.location}
          </p>
          <p className="font-medium col-span-full">
            <span className="text-gray-600">Description:</span> {singleJob?.description}
          </p>
          <p className="font-medium">
            <span className="text-gray-600">Experience:</span> {singleJob?.experience} yrs
          </p>
          <p className="font-medium">
            <span className="text-gray-600">Salary:</span> {singleJob?.salary} LPA
          </p>
          <p className="font-medium">
            <span className="text-gray-600">Total Applicants:</span> {singleJob?.applications?.length}
          </p>
          <p className="font-medium">
            <span className="text-gray-600">Posted Date:</span>{" "}
            {new Date(singleJob?.createdAt).toLocaleDateString()}
          </p>
        </div>
      </section>
    </div>
  );
};

export default JobDescription;
