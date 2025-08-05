import React from "react";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div className="w-full p-2">
      {/* <Title title={"Contact"} /> */}
      <div className="w-full flex justify-between py-4 gap-2">
        <div className="w-[50%] flex flex-col justify-center items-start pl-6">
          <div className="">
            <div>
              <span>Email: </span>
              <span>dhirajv418@gmail.com</span>
            </div>
            <div>
              <span>Phone: </span>
              <span>+91 6391732413</span>
            </div>
          </div>
          <div className="flex my-4">
            <div className="w-20 h-20 flex justify-center items-center rounded-lg backdrop-blur-md border p-2 m-2 cursor-pointer hover:bg-white hover:text-black">
              <span>Linkedin</span>
            </div>
            <div className="w-20 h-20 flex justify-center items-center rounded-lg backdrop-blur-md border p-2 m-2 cursor-pointer hover:bg-white hover:text-black">
              <span>GitHub</span>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center">
          <form
            action=""
            className="px-5 w-96 border backdrop-blur-l rounded-md"
          >
            <div className="text-center">
              <Title title={"Contact Me"} />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-transparent border-b p-3 my-2 outline-none"
              />
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent border-b p-3 outline-none"
              />
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-transparent border-b p-3 my-2 outline-none"
              />
              <textarea
                name=""
                id=""
                rows={4}
                placeholder="Enter your Message"
                className="bg-transparent border rounded-lg p-3 my-2 outline-none"
              ></textarea>
              <button className="border px-3 py-2 my-3 text-lg backdrop-blur-lg rounded-lg hover:bg-white hover:text-black">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
