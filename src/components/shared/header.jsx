"use client";
import {
  faDiscord,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#292F36] text-gray-300 font-semibold ">
      <div className="container mx-auto flex lg:justify-between items-center py-12 px-2 border-b-2 border-gray-700">
        <div className="lg:text-[32px] text-base">
          <Link href={"/"}>
            <span>md.Rashel</span>
          </Link>
        </div>
        <div className="flex flex-row-reverse lg:ml-16">
          <div
            onClick={() => setOpen(!open)}
            className="w-5 text-[#12F7D6] lg:hidden ml-10"
          >
            {open ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>

          <ul
            className={`lg:flex gap-5 transition-all duration-500 ease-in items-center lg:p-0 p-3 ${
              open
                ? "top-18 opacity-100"
                : "top-[-490px] lg:opacity-100 opacity-0 lg:mt-0 -mt-40"
            }`}
          >
            <li className="text-[#12F7D6] lg:text-2xl text-base">
              <Link href={"/"}>Home</Link>
            </li>

            <li className="lg:text-2xl text-base">
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            <li className="relative lg:my-0 my-2">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="lg:w-5 absolute lg:ml-44 ml-28 lg:mt-2 mt-1 text-gray-500"
              />
              <input
                type="text"
                className="rounded-full outline-none lg:w-[204px] w-[150px] lg:h-[32px] h-[22px] px-2 text-gray-900"
                placeholder=""
              />
            </li>
            <li className="flex items-center gap-1 text-base">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[20px] mr-1 text-[#12F7D6]"
              />
              <Link
                href={"https://www.linkedin.com/in/rashelmahomud/"}
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <FontAwesomeIcon
                icon={faDiscord}
                className="text-[20px] mr-1 text-[#12F7D6]"
              />
              <Link
                href={"https://discord.com/channels/@mdrashel"}
                target="_blank"
              >
                Discord
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <FontAwesomeIcon icon={faGithub} className="text-[20px] mr-1 text-[#12F7D6]" />
              <Link href={"https://github.com/rashelmahomud"} target="_blank">
                Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
