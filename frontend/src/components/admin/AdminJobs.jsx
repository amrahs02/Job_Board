import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from '../ui/button'; 
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux'; 
import AdminJobsTable from './AdminJobsTable';
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs';
import { setSearchJobByText } from '@/redux/jobSlice';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);

  // Animation variants for Framer Motion
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <motion.div 
        className="max-w-6xl mx-auto my-10 bg-yellow-50 rounded-3xl p-6 shadow-md bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23e5e7eb%22 fill-opacity=%220.1%22%3E%3Crect x=%220%22 y=%220%22 width=%2210%22 height=%2210%22 /%3E%3Crect x=%2210%22 y=%2210%22 width=%2210%22 height=%2210%22 /%3E%3C/g%3E%3C/svg%3E')] bg-[length:20px_20px] bg-repeat"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        {/* Header Tag - Mimicking "Job Categories" */}
        <div className="absolute top-24 left-6 bg-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-tl-lg rounded-br-lg">
          Admin Jobs
        </div>

        <div className="flex items-center justify-between my-5">
          <motion.div 
            className="relative w-fit"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <Input
              className="w-full max-w-md px-4 py-2 rounded-full border-gray-300 focus:border-emerald-500 focus:ring-0 text-gray-700 placeholder-gray-500 shadow-md transition-all duration-200"
              placeholder="Filter by name, role"
              onChange={(e) => setInput(e.target.value)}
            />
          </motion.div>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={scaleUpVariants}
          >
            <Button 
              onClick={() => navigate("/admin/jobs/create")}
              className="bg-emerald-500 text-white hover:bg-emerald-600 rounded-full px-6 py-2 transition-colors duration-200 shadow-md transform hover:scale-105"
            >
              New Jobs
            </Button>
          </motion.div>
        </div>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.2 }}
        >
          <AdminJobsTable />
        </motion.div>
      </motion.div>
    </div>
  );
};

// Animation variant for scaling (used for the New Jobs button)
const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default AdminJobs;