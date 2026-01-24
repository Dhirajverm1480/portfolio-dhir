import Title from "../components/Title";
import EmailImg from "../assets/icons/envelope-open.png";
import PhoneImg from "../assets/icons/phone.png";
import GlobeImg from "../assets/icons/globe.png";
// import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const onSubmitHandling = async (e) => {
    try {
      e.preventDefault();
      // const formData = new FormData();

      // formData.append("senderName", senderName);
      // formData.append("senderEmail", senderEmail);
      // formData.append("senderPhone", senderPhone);
      // formData.append("senderMessage", senderMessage);

      // This only used when you want to post the file on your backend if not you only push json data just like written in below

      const formData = {
        senderName,
        senderEmail,
        senderPhone,
        senderMessage,
      };

      const response = await axios.post(
        backendUrl + "/api/v1/senders/addSender",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        console.log("Response Success: ", response.data.success);
        alert("Thank you very much for contact us"||  response.data.sucess);

        // Clear form
        setSenderName("");
        setSenderEmail("");
        setSenderPhone("");
        setSenderMessage("");
      }
      alert("Thank you very much for contact us.");
    } catch (error) {
      console.error("Sender Error:", error.response?.data || error.message);
      alert(
        error.response?.data?.message ||
          "Failed to submit the post Sender Message."
      );
    }
  };

  return (
    <div className="page-frame">
      {/* <Title title={"Contact"} /> */}
      <div className="w-full lg:flex justify-between items-center md:px-5">
        <div className="w-full md:h-[50vh] lg:h-full lg:w-[40%] flex flex-col justify-between">
          <div>
            <Title title={"Contact"} />
          </div>
          <div className="mx-2 py-4">
            <div className="mb-4 flex items-center gap-2">
              <img src={EmailImg} alt="" className="w-8" />
              <div className="flex flex-col">
                <span>Email: </span>
                <span>dhirajv418@gmail.com</span>
              </div>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <img src={PhoneImg} alt="" className="w-8" />
              <div className="flex flex-col">
                <span>Phone: </span>
                <span>+91 6391732413</span>
              </div>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <img src={GlobeImg} alt="" className="w-8" />
              <div className="flex flex-col">
                <span>Address: </span>
                <span>Khora Colony G.Z.B (U.P) India (Barat). </span>
              </div>
            </div>
          </div>
          <div className="my-4">
            <Title title={"Social"} />
            <div className="flex flex-wrap py-3">
              <a
                href="https://www.linkedin.com/in/dhirajverma-v1"
                className="social-card"
                target="_blank"
                rel="noreferrer"
              >
                <span>Linkedin</span>
              </a>
              <a
                href="https://github.com/Dhirajverm1480"
                className="social-card"
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
              </a>
              <a
                href="https://www.facebook.com/share/1DVQcENmWP/"
                className="social-card"
                target="_blank"
                rel="noreferrer"
              >
                <span>FaceBook</span>
              </a>
              <a
                href="https://leetcode.com/u/dhirajverma001/"
                className="social-card"
                target="_blank"
                rel="noreferrer"
              >
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-full lg:w-[50%] flex justify-center">
          <form
            onSubmit={onSubmitHandling}
            // action=""
            className="px-5 pb-4 w-full lg:w-[60%] border backdrop-blur-md rounded-md"
          >
            <div className="mt-5">
              <h2 className="text-3xl">Contact Me</h2>
            </div>
            <div className="flex flex-col">
              <input
                onChange={(e) => setSenderName(e.target.value)}
                value={senderName}
                type="text"
                placeholder="Enter your name"
                className="bg-transparent border-b p-3 my-2 outline-none"
              />
              <input
                onChange={(e) => setSenderEmail(e.target.value)}
                value={senderEmail}
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-b p-3 outline-none"
              />
              <input
                onChange={(e) => setSenderPhone(e.target.value)}
                value={senderPhone}
                type="tel"
                placeholder="Enter your Phone Number"
                className="bg-transparent border-b p-3 my-2 outline-none"
                required
              />
              <textarea
                onChange={(e) => setSenderMessage(e.target.value)}
                value={senderMessage}
                name="message"
                // id=""
                rows={4}
                placeholder="Enter your Message"
                className="bg-transparent border rounded-lg p-3 my-2 outline-none"
                required
              ></textarea>
              <button
                className="border px-3 py-2 my-3 text-lg backdrop-blur-lg rounded-lg hover:bg-white hover:text-black"
                type="submit"
              >
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
