import Title from "../components/Title";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { Icon } from "../constants/data";

const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dhirajverma-v1",
    className: "social-card",
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    id: 2,
    name: "GitHub",
    href: "https://github.com/Dhirajverm1480",
    className: "social-card",
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    id: 3,
    name: "FaceBook",
    href: "https://www.facebook.com/share/1DVQcENmWP/",
    className: "social-card",
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    id: 4,
    name: "LeetCode",
    href: "https://leetcode.com/u/dhirajverma001/",
    className: "social-card",
    target: "_blank",
    rel: "noopener noreferrer"
  },

];

const addresses = [
  {
    id: 1,
    name: "Email",
    address: "dhirajv418@gmail.com",
    image: Icon.EmailImg,
  },
  {
    id: 2,
    name: "Phone No",
    address:  "+91 63917324",
    image: Icon.PhoneIcon,
  },
  {
    id: 3,
    name: "Address",
    address: "Mayur Vihar Phase III Delhi India.",
    image: Icon.GlobeImg,
  }
]

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const onSubmitHandling = async (e) => {
    try {
      e.preventDefault();
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
        alert("Thank you very much for contact us" || response.data.sucess);

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
            {
              addresses.map((item) => (
                <div key={item.id} className="mb-4 flex items-center gap-2">
                  <img src={item.image} alt="" className="w-8" />
                  <div className="flex flex-col">
                    <span>{item.name}: </span>
                    <span>{item.address}</span>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="my-4">
            <Title title={"Social"} />
            <div className="flex flex-wrap py-3">
              {
                socialLinks.map((item) => (
                  <div key={item.id}>
                    <a
                      href={item.href}
                      className={item.className}
                      target={item.target}
                      rel={item.rel} // its only for security purpose
                    >
                      <span>{item.name}</span>
                    </a>
                  </div>
                ))
              }
              <small>Some social links may require you to log in to the specific platform to view my profile.</small>
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
