import Image from "next/image";
import React from "react";
import Util from "../shared/Util";

const HomeAbout = () => {
  return (
    <div className="relative bg-[#1A1E23] lg:py-20 py-10 lg:p-0 p-3">
      <div className="absolute inset-0 bg-[url('/assates/abc.png')] bg-center bg-no-repeat bg-cover opacity-10 z-0"></div>
      <Util />
      <div className="relative z-10 flex lg:flex-row flex-col justify-center gap-20">
        <div className="lg:w-[700px]">
          <button className="bg-[#1A1E23] text-white lg:text-3xl text-[32px] my-5 lg:ml-0 ml-5 p-5 border-4 border-teal-300 px-5 py-3 rounded-tl-[40px] rounded-br-[40px]">
            About Me
          </button>

          <div className="bg-[#292F36] p-5 text-gray-300 rounded-[40px]">
            <pre>&lt;h1&gt;</pre>
            <h1 className="text-3xl">Hello! </h1>
            <p>
              My name is Sinan and I specialize in web developement that
              utilizes <span className="text-[#12F7D6]">HTML, CSS, JS</span>,
              and <span className="text-[#12F7D6]">REACT</span> etc.
              <br />I am a highly motivated individual and eternal optimist
              dedicated to writing clear, concise, robust code that works.
              Striving to never stop
              <span className="text-[#12F7D6]">
                learning and improving
              </span>. <br />
              I am a highly motivated individual and eternal optimist dedicated
              to writing clear, concise, robust code that works. Striving to
              never stop learning and improving. <br />I like to have my
              perspective and belief
              <span className="text-[#12F7D6]">systems</span> challenged so that
              I see the world through new eyes.
            </p>
            <pre>&lt;/p&gt;</pre>
          </div>
        </div>
        <div className="mt-10">
          <Image
            src={"/assates/abc2.jpg"}
            className="rounded-2xl mx-auto"
            width={300}
            height={300}
            alt="about image"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
