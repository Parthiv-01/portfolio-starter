import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodingninjas,
  SiCodechef,
} from "react-icons/si";
//images
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/top-programming-languages.jpg";
import Img3 from "../assets/4314f99a4ffbb44f6d795cc3e0ad928c_res.jpeg";
const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <h2 className="h2 leading-tight text-accent">My Skills</h2>
              <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                <a
                  href="https://leetcode.com/parthivsadhukhan"
                  className="hover:bg-yellow-600 rounded-full p-2"
                >
                  <SiLeetcode />
                </a>
                <a
                  href="https://auth.geeksforgeeks.org/user/parthivsadhukhan"
                  className="hover:bg-yellow-600 rounded-full p-2"
                >
                  <SiGeeksforgeeks />
                </a>
              </div>
            </motion.div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                src={Img1}
                alt=""
                className="group-hover:scale-150 transition-all duration-300"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">
                  Web Development Frameworks
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  HTML ; CSS ; JS ; ReactJS ; Tailwind CSS ; PHP ; Python
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-y-10">
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>
              {/* img */}
              <img
                src={Img2}
                alt=""
                className="group-hover:scale-150 transition-all duration-300"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Programming Languages</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  C ; C++ ; JAVA ; Python ; MATLAB ; LaTeX
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                src={Img3}
                alt=""
                className="group-hover:scale-150 transition-all duration-300"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Competititive Programming</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  Leetcode ; GeeksforGeeks ; CodeChef
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
