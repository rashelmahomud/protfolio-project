"use client";
import Line from "@/components/shared/Line";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const SingleBlog = () => {
  const [open, setOpen] = useState(false);

  const openTogel = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      {/* blog 1 */}
      <div className="lg:px-20 p-3 lg:mx-20 mx-5 ">
        <div className="flex flex-col lg:flex-row gap-10 border-y-2 border-gray-600 py-8">
          <Image
            src={"/assates/abc3.jpg"}
            width={400}
            height={400}
            alt="blogs image"
          />
          <div className="lg:p-10 p-3">
            <h1 className="text-[#12F7D6] lg:text-2xl">
              What does it take to become a web developer?
            </h1>
            <p className="text-gray-400 my-5">
              {open
                ? `Web development, also known as website development, encompasses
              a variety of tasks and processes involved in creating websites
              for the internet. It includes tasks like coding, designing, testing,
              and maintenance to deliver functional and user-friendly sites.`
                : `Web development, also known as website development, encompasses
              a variety of tasks and processes involved in creating websites
              for the internet…`}
            </p>
            <button
              className="text-xl text-[#12F7D6] border-b-2 border-gray-600"
              onClick={openTogel}
            >
              {open ? "Show Less" : "Read More"}
            </button>
            <ul className="flex lg:flex-row flex-col gap-5 text-white my-5">
              <li className="bg-gray-500 px-2 rounded-full">Web development</li>
              <li>Text Sinan</li>
              <li>Date : 10.Oct 2025</li>
              <li>Read 1 Min</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
