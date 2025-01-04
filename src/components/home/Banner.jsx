import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faEnvelope,
  faFolder,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#292F36] text-gray-300">
      <div className="container mx-auto py-10">
        <h1 className="lg:text-7xl text-3xl text-center">Developer</h1>
        <div className="flex lg:flex-row flex-col justify-center gap-10 p-3">
          <div className="border-4 border-teal-300 rounded-tl-[180px] rounded-br-[180px] p-5 py-10">
            <div className="flex flex-col items-center">
              <Image
                src="/assates/logo img.png"
                width={80}
                height={80}
                className="rounded-full border-4 border-teal-300"
                alt="developer image"
              />
              <h1 className="mt-3">Rashel</h1>
              <p>Front-End Developer</p>
            </div>
            <ul className="my-2">
              <li className="flex gap-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-3 text-[#12F7D6]"
                />
                rashelmahmudraj1998@gmail.com
              </li>
              <li className="flex gap-2">
                {" "}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="w-3 text-[#12F7D6]"
                />
                Bangladesh
              </li>
              <li className="flex gap-2">
                <FontAwesomeIcon
                  icon={faFolder}
                  className="w-3 text-[#12F7D6]"
                />
                fresher developer
              </li>
              <li className="flex gap-2">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="w-3 text-[#12F7D6]"
                />
                +8801835199061
              </li>
            </ul>
            <ul className="flex gap-2">
              <li className="bg-[#12F7D6] text-black font-semibold rounded-full px-3">
                HTML
              </li>
              <li className="bg-[#12F7D6] text-black font-semibold rounded-full px-3">
                CSS
              </li>
              <li className="bg-[#12F7D6] text-black font-semibold rounded-full px-3">
                JS
              </li>
              <li className="bg-[#12F7D6] text-black font-semibold rounded-full px-3">
                REACT
              </li>
            </ul>
            <button className="flex justify-center items-center gap-2 bg-white text-gray-300 font-semibold text-[#292F36] text-xl leading-6 p-4 rounded-full my-3">
              Download CV{" "}
              <FontAwesomeIcon
                icon={faDownload}
                className="w-5 text-gray-400"
              />
            </button>
          </div>
          <div className="flex lg:flex-row flex-col p-3 gap-5">
          <div>
            <pre>&lt;h1&gt;
            <h1 className="lg:text-6xl">Hey</h1>
            <h1 className="lg:text-6xl">
              I'am <span className="text-[#12F7D6]">Rashel</span>,
            </h1>
            <span className="lg:text-6xl">Front-EndDeveloper</span>&lt;/h1&gt;</pre>
            <pre>&lt;p&gt;</pre>
            <p className="p-3">
              I help business grow by crafting amazing web experiences. If
              you’re <br />looking for a developer that likes to get stuff done,
            </p><pre>&lt;/p&gt;</pre>
            
            <h1 className="flex gap-2 items-center text-2xl text-[#12F7D6]">
              Let’s Talk{" "}
              <Link href={"/"}>
                <FontAwesomeIcon icon={faEnvelope} className="w-5" />
              </Link>
            </h1>
          </div>
          <div className="flex flex-col mx-auto bg-[#1A1E23] p-10 m-10 rounded-full">
            <div className="flex gap-5 mt-5">
                <span className="lg:text-5xl text-2xl text-[#12F7D6] font-semibold">4</span> <p>Programming <br />Language</p>
                
            </div>
            <div className="flex gap-5 lg:my-10 my-5">
                <span className="lg:text-5xl text-2xl text-[#12F7D6] font-semibold">6</span> <p>Development<br /> Tools</p>
                </div>
            <div className="flex gap-5">
                <span className="lg:text-5xl text-2xl text-[#12F7D6] font-semibold">8</span>
                <p>Years of<br /> Exprience</p>
                </div>
         </div>
          </div>

   
        </div>
      </div>
    </div>
  );
};

export default Banner;
