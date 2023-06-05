import React from "react";
//icon
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//services data
const services = [
  {
    name: "Virtual Mouse",
    description:
      "In this project, I have created a virtual mouse using PyAutoGUI, OpenCV and Python. It can be used to control the mouse pointer using hand gestures.",
    link: "https://github.com/Parthiv-01/virtual-mouse",
  },
  {
    name: "My Portfolio",
    description:
      "In this project, I have created my portfolio website using ReactJS, TailwindCSS and Framer Motion.",
    link: "https://parthiv-sadhukhan.netlify.app",
  },
  {
    name: "AI enabled Tic-Tac-Toe",
    description:
      "In this project, I have created a Tic-Tac-Toe game using Python. The game is played between a human and an AI. The AI is unbeatable.",
    link: "https://replit.com/@Parthiv-01/TicTacToe",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*text & image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I have done.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I am a undergraduate student and I have done some projects in
              these years.
            </h3>
            <button className="btn btn-sm">
              <a href="https://github.com/Parthiv-01" target="_blank">
                See My Projects
              </a>
            </button>
          </motion.div>
          {/*services*/}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/*services list*/}
            <div>
              {services.map((service, index) => {
                //Destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-38px flex items-center justify-between"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight ">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <button
                        onClick={() => window.open(link, "_blank")}
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </button>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
