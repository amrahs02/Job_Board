import { Linkedin } from "lucide-react";
import React from "react";
import {} from "react-icons";
import {
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white rounded-t-3xl text-gray-700 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <h2 className="text-xl font-bold">JobBoard</h2>
            <p className="text-xs opacity-80">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>

          <div className="flex text-gray-300 space-x-4 mt-2 md:mt-0">
            <a
              href="https://github.com/amrahs02"
              aria-label="GitHub
                        "
              target="_blank"
            >
              <FaGithub color="black" />
            </a>
            <a
              href="https://twitter.com/amrahs02"
              aria-label="Twitter"
              target="_blank"
            >
              {/* //twitter icons from react-icons */}

              <FaTwitter color="black"  />
            </a>
            <a
              href="https://linkedin.com/in/sandeepsharma2183"
              aria-label="LinkedIn"
              target="_blank"
            >
              <FaLinkedinIn color="black" />
            </a>
          </div>
        </div>

        <div className="mt-2 text-center text-sm opacity-80">
          <p className="text-gray-800" >
            Designed and Developed by{" "}
            <a
              href="https://amrahs.vercel.app"
              className="text-blue-500 font-bold hover:underline"
            >
              Sandeep Sharma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
