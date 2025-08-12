import Title from "../components/Title";
import Image from '../assets/image3.jpg';
import { educationData } from '../constants/data.js'
import Education from "../components/Education.jsx";

const About = () => {
  console.log("Edu : ", educationData)

  return (
    <div className="page-frame">
      {/* <Title title={'About'} /> */}
      <div className=" sm:flex justify-between items-center w-full">
        <div className="sm:w-[50%] py-4">
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
          <button className="border px-3 py-2 my-3 text-lg rounded-lg hover:bg-white hover:text-black">
            Contact Me
          </button>
        </div>
        <div className="sm:w-[50%] flex justify-center items-center">
          <img src={Image} alt="" className="w-full sm:w-96" />
        </div>
      </div>
      <div className="w-full">
        <div className="py-4">
          <Title title={'Education'} />
          <div className="sm:flex justify-between py-5">
            <div className="sm:w-[25%]"></div>
            <div className="sm:w-[70%]">
              {
                educationData.education.map((item) => (
                  <div key={item.id}>
                    <Education title={item.title} institution={item.institution} start={item.timeline.start} end={item.timeline.end} duration={item.timeline.duration} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
