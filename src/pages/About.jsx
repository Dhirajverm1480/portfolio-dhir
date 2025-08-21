import Title from "../components/Title";
import Image from "../assets/image3.jpg";
import { educationData, hobbyData } from "../constants/data.js";
import Education from "../components/Education.jsx";
import Hobby from "../components/Hobby.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

const About = () => {
  useGSAP(() => {
    const aboutParaSplit = new SplitText("#about-para", { type: "lines" });

    gsap.from(aboutParaSplit.lines, {
      opacity: 0,
      xPercent: -100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from("#about-img", {
      opacity: 0,
      xPercent: 100,
      duration: 1.6,
      ease: "expo.out",
    });

    ScrollTrigger.create({
      trigger: '#education',
      start: 'top 50%',
      onEnter: () => {
        gsap.from("#edu-div", {
          opacity: 0,
          xPercent: 100,
          duration: 1.6,
          ease: 'expo.out',
          delay: 0.6,
        })
      },
      // markers: true,
    })

    ScrollTrigger.create({
      trigger: '#education',
      start: 'bottom bottom',
      onEnter: () => {
        gsap.from("#hobby-div", {
          opacity: 0,
          xPercent: 100,
          duration: 1.6,
          ease: 'expo.out',
          delay: 0.8,
        })
      },
      // markers: true,
    })

    gsap.from("#edu-div", {
      opacity: 0,
      xPercent: 100,
      duration: 1.6,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap.from("#hobby-div", {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
  }, []);

  // console.log("Edu : ", educationData)

  return (
    <section id="about-section" className="page-frame overflow-hidden">
      {/* <Title title={'About'} /> */}
      <div id="about" className="md:h-[70vh] lg:h-full sm:flex justify-between items-center w-full">
        <div className="md:w-[65%] lg:w-[50%] sm:py-4">
          <Title title={"About"} />
          <p id="about-para" className="py-5">
            Hi, I’m Dhiraj — a frontend developer with a passion for building
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
        <div className="md:w-[30%] lg:w-[50%] flex justify-center items-center py-4">
          <img id="about-img" src={Image} alt="" className="w-full sm:w-96" />
        </div>
      </div>

      {/* Education */}
      <div id="education" className="w-full">
        <div className="py-4">
          <Title title={"Education"} />
          <div className="sm:flex justify-between py-5 backdrop-blur-sm">
            <div className="sm:w-[25%]"></div>
            <div className="sm:w-[70%]">
              {educationData.education.map((item) => (
                <div id="edu-div" key={item.id}>
                  <Education
                    title={item.title}
                    institution={item.institution}
                    start={item.timeline.start}
                    end={item.timeline.end}
                    duration={item.timeline.duration}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hobbies */}
      <div id="hobby" className="w-full">
        <div className="py-4">
          <Title title={"Hobbies"} />
          <div className="sm:flex justify-between py-5 backdrop-blur-sm">
            <div className="hidden lg:block lg:w-[20%]"></div>
            <div className="flex flex-wrap justify-between lg:w-[80%]">
              {hobbyData.hobbies.map((item) => (
                <div
                  id="hobby-div"
                  key={item.id}
                  className="md:w-[45%] lg:w-[30%]"
                >
                  <Hobby
                    title={item.name}
                    description={item.description}
                    relatedSkill={item.relatedSkills}
                    frequency={item.frequency}
                  />
                </div>
              ))}
              <div className="w-[30%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;