import React from "react";
import Title from "../components/Title";
import Image from '../assets/image.png'

const About = () => {
  return (
    <div className="w-full">
      {/* <Title title={'About'} /> */}
      <div className=" sm:flex justify-between items-center w-full p-5">
        <div className="sm:w-[50%]">
          <Title title={"About"} />
          <p className="py-5">
            Hi, I’m Dev — a frontend developer with a passion for building
            clean, responsive, and user-focused web applications. My journey
            into web development started with a simple curiosity about how
            websites are made, and it quickly grew into a full-time passion. I
            specialize in HTML, CSS, JavaScript, and frameworks like React, and
            I love bringing designs to life in the browser. Whether it’s
            crafting pixel-perfect layouts or optimizing performance, I’m always
            looking to create intuitive and engaging digital experiences.
          </p>
          <button className="border px-3 py-2 my-3 text-lg backdrop-blur-lg rounded-lg hover:bg-white hover:text-black">
            Contact Me
          </button>
        </div>
        <div className="sm:w-[50%] flex justify-center items-center">
          <img src={Image} alt="" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default About;
