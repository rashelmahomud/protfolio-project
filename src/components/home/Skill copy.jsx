import {
  faCss3Alt,
  faHtml5,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faLaptop,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Util from "../shared/Util";

const Skill = () => {
  return (
    <div className='bg-[url("/assates/abc5.png")] bg-no-repeat bg-center bg-cover'>
      <div className=" bg-[#1A1E23] bg-opacity-60 p-20">
        <div>
          <div className="flex justify-center gap-20">
            <div className="ml-32">
              <Util />
            </div>
            <span className="mt-20 hidden sm:block">
              <FontAwesomeIcon icon={faCode} className="w-28 text-[#12F7D6]" />
            </span>
          </div>
          <div className="text-center">
            <h1 className="lg:text-6xl text-4xl text-[#12F7D6] font-semibold">Skills</h1>
            <h1 className="bg-[#12F7D6] w-24 rounded-lg mx-auto my-3 h-1 "></h1>
            <p className="text-white font-semibol">
              I am striving to never stop learning and improving
            </p>
          </div>
          <div className="flex gap-10 lg:flex-row flex-col justify-center my-10">
            <div className="bg-[#98FAEC] border-l-8 border-indigo-200 border-l-indigo-500 p-5 rounded-lg text-center ">
              <FontAwesomeIcon
                icon={faLaptop}
                className="w-7 mx-auto text-gray-800"
              />
              <h2 className="text-xl font-semibold text-gray-600">
                Web Development
              </h2>
              <p className="text-gray-700">HTML.CSS.JS.REACT</p>
            </div>
            <div className="bg-[#98FAEC] border-l-8 border-indigo-200 border-l-indigo-500 p-5 rounded-lg text-center">
              <span>
                <FontAwesomeIcon
                  icon={faMobileScreen}
                  className="w-5 mx-auto text-gray-800"
                />
              </span>
              <h2 className="text-xl font-semibold text-gray-600">
                App Development
              </h2>
              <p className="text-gray-700">ios. Android</p>
            </div>
          </div>
          <ul className="grid lg:grid-cols-4 md:grid-cols-2 text-center text-white gap-10 lg:px-32 lg:mx-20">
            <li className="flex flex-col  items-center">
              <span>
                <FontAwesomeIcon
                  className="mb-2 bg-[#E54F26] w-20 h-20 rounded-full p-4"
                  icon={faHtml5}
                />
              </span>
              <span className="text-[#E54F26]">HTML</span>
            </li>
            <li className="flex flex-col  items-center">
              <FontAwesomeIcon
                className="mb-2 bg-[#0C73B8] w-20 h-20 rounded-full p-4"
                icon={faCss3Alt}
              />
              <span className="text-[#0C73B8]">CSS</span>
            </li>
            <li className="flex flex-col  items-center">
              <FontAwesomeIcon
                className="mb-2 bg-[#E7A020] w-20 h-20 rounded-full p-4"
                icon={faNodeJs}
              />
              <span className="text-[#E7A020]">JS</span>
            </li>
            <li className="flex flex-col  items-center">
              <FontAwesomeIcon
                className="mb-2 bg-[#28A9E0] w-20 h-20 rounded-full p-4"
                icon={faReact}
              />
              <span className="text-[#28A9E0]">REACT</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
