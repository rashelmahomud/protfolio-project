"use client";
import {
  faDiscord,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#292F36] text-gray-300 font-semibold ">
      <div className="container mx-auto flex lg:justify-between py-12 px-2 border-b-2 border-gray-700">
        <div>
          <Link href={'/'}><span>md.Rashel</span></Link>
        </div>
        <div className="flex flex-row-reverse ml-16">
          <div onClick={() => setOpen(!open)} className="w-5 text-[#12F7D6] lg:hidden">
            {open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
          </div>

          <ul className={`lg:flex gap-5 transition-all duration-500 ease-in  ${open ? "top-18 opacity-100" : "top-[-490px] lg:opacity-100 opacity-0 lg:mt-0 -mt-40"}`}>
            <li className="text-[#12F7D6]">
              <Link href={"/"}>Home</Link>
            </li>

            <li>
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            <li className="relative lg:my-0 my-2">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="lg:w-5 absolute ml-40 mt-1 text-gray-500"
                />
                <input
                  type="text"
                  className="rounded-full outline-none lg:w-50"
                  placeholder=""
                />
            </li>
            <li className="flex items-center gap-1">
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-5 text-[#12F7D6]"
              />
              <Link href={"/instagram"}>Instagram</Link>
            </li>
            <li className="flex items-center gap-1">
              <FontAwesomeIcon
                icon={faDiscord}
                className="w-5 text-[#12F7D6]"
              />
              <Link href={"/discord"}>Discord</Link>
            </li>
            <li className="flex items-center gap-1">
              <FontAwesomeIcon icon={faGithub} className="w-5 text-[#12F7D6]" />
              <Link href={"/github"}>Github</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
