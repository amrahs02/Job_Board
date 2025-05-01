import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const Footer = () => {
  // Animation variants for Framer Motion
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.footer 
<<<<<<< HEAD
      className="bg-green-200 rounded-t-3xl text-gray-700 py-4 shadow-md bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23e5e7eb%22 fill-opacity=%220.2%22%3E%3Crect x=%220%22 y=%220%22 width=%2210%22 height=%2210%22 /%3E%3Crect x=%2210%22 y=%2210%22 width=%2210%22 height=%2210%22 /%3E%3C/g%3E%3C/svg%3E')] bg-[length:20px_20px] bg-repeat"
=======
      className="bg-emerald-200 rounded-t-3xl text-gray-700 py-4 shadow-md bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23e5e7eb%22 fill-opacity=%220.2%22%3E%3Crect x=%220%22 y=%220%22 width=%2210%22 height=%2210%22 /%3E%3Crect x=%2210%22 y=%2210%22 width=%2210%22 height=%2210%22 /%3E%3C/g%3E%3C/svg%3E')] bg-[length:20px_20px] bg-repeat"
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <h2 className="text-xl font-bold text-gray-900">JobBoard</h2>
            <p className="text-xs text-gray-600 opacity-80">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>

          <div className="flex text-gray-600 space-x-4 mt-2 md:mt-0">
            <a
              href="https://github.com/amrahs02"
              aria-label="GitHub"
              target="_blank"
<<<<<<< HEAD
              className="hover:text-green-500 transition-colors"
=======
              className="hover:text-emerald-500 transition-colors"
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/amrahs02"
              aria-label="Twitter"
              target="_blank"
<<<<<<< HEAD
              className="hover:text-green-500 transition-colors"
=======
              className="hover:text-emerald-500 transition-colors"
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/sandeepsharma2183"
              aria-label="LinkedIn"
              target="_blank"
<<<<<<< HEAD
              className="hover:text-green-500 transition-colors"
=======
              className="hover:text-emerald-500 transition-colors"
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-2 text-center text-sm text-gray-600 opacity-80">
          <p>
            Designed and Developed by{" "}
            <a
              href="https://amrahs.vercel.app"
<<<<<<< HEAD
              className="text-green-600 font-bold hover:underline transition-colors"
=======
              className="text-emerald-600 font-bold hover:underline transition-colors"
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
            >
              Sandeep Sharma
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;