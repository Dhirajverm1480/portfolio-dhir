import Title from "../components/Title";
import EmailImg from "../assets/icons/envelope-open.png";
import PhoneImg from '../assets/icons/phone.png'

const Contact = () => {
  return (
    <div className="w-full p-2">
      {/* <Title title={"Contact"} /> */}
      <div className="w-full sm:flex justify-between py-4 gap-2">
        <div className="sm:w-[40%] flex flex-col justify-between px-6">
          <div>
            <Title title={"Contact"} />
          </div>
          <div className="mx-2">
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
        <div className="w-full sm:w-[50%] flex justify-center">
          <form
            action=""
            className="px-5 w-full sm:w-[60%] border backdrop-blur-l rounded-md"
          >
            <div className="mt-5">
              <h2 className="text-3xl">Contact Me</h2>
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
