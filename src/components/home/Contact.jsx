import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Util from "../shared/Util";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="bg-[#1A1E23]">
      <div className="flex justify-center gap-20">
        <div>
          <Util />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-6xl text-[#12F7D6] font-semibold">Contact</h1>
        <h1 className="bg-[#12F7D6] w-24 rounded-lg mx-auto my-3 h-1 "></h1>
        <p className="text-white font-semibol ">
          I’m currently available for freelance work
        </p>
        <div className="py-5">
          <button className="bg-[#1A1E23] text-white text-3xl my-5 p-5 border-4 border-teal-300 px-5 py-3 rounded-tl-[50px] rounded-br-[50px]">
            Send Me A Message
          </button>
        </div>
        <div className="container mx-auto py-5 p-3">
          <form>
            <div className="grid gap-10 mb-6 grid-cols-2 lg:mx-20 lg:px-20 p-5">
              <div className="text-left">
                <label
                  htmlFor="name"
                  className="text-[#12F7D6]"
                >
                  Your Name: 
                </label>
                <input
                className="bg-[#1A1E23] border-b-2 border-gray-500 py-2 w-full mt-2"
                  type="text"
                  id="name"
                  placeholder="John"
                  required
                />
              </div>
              <div className="text-left">
                <label
                  htmlFor="email"
                  className="text-[#12F7D6]"
                >
                  Your Email: 
                </label>
                <input
                className="bg-[#1A1E23] border-b-2 border-gray-500 py-2 w-full mt-2"
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="text-left col-span-2">
                <label
                  htmlFor="message"
                  className="text-[#12F7D6]"
                >
                  Your Message: 
                </label>
                <input
                className="bg-[#1A1E23] border-b-2 border-gray-500 py-2 w-full mt-2"
                  type="text"
                  id="message"
                  placeholder="message type"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#12F7D6] px-4 py-2 rounded-full font-semibold flex items-center gap-2 mx-auto"
            >
              Send Message
              <FontAwesomeIcon icon={faPaperPlane} className="w-3" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
