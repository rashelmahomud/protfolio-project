"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#292F36] shadow-lg border-b border-gray-700">
      <nav className="container mx-auto flex items-center justify-between px-5 py-5 relative">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl lg:text-3xl font-bold text-yellow-500"
          onClick={closeMenu}
        >
          <span className="text-[#12F7D6]">md.</span>Rashel
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-gray-300">

          <li>
            <Link
              href="/"
              className="hover:text-[#12F7D6] duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/blogs"
              className="hover:text-[#12F7D6] duration-300"
            >
              Blogs
            </Link>
          </li>

          {/* Search */}
          <li>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-56 rounded-full py-2 pl-4 pr-10 outline-none text-black"
              />

              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>
          </li>

          <li>
            <Link
              href="https://www.linkedin.com/in/rashelmahomud"
              target="_blank"
              className="flex items-center gap-2 hover:text-[#12F7D6]"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-[#12F7D6]"
              />
              LinkedIn
            </Link>
          </li>

          <li>
            <Link
              href="https://discord.com/users/"
              target="_blank"
              className="flex items-center gap-2 hover:text-[#12F7D6]"
            >
              <FontAwesomeIcon
                icon={faDiscord}
                className="text-[#12F7D6]"
              />
              Discord
            </Link>
          </li>

          <li>
            <Link
              href="https://github.com/rashelmahomud"
              target="_blank"
              className="flex items-center gap-2 hover:text-[#12F7D6]"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-[#12F7D6]"
              />
              Github
            </Link>
          </li>

        </ul>

        {/* Mobile Button */}

        <button
          className="lg:hidden text-[#12F7D6] text-2xl"
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>

        {/* Mobile Menu */}

        <div
          className={`lg:hidden absolute left-0 top-full w-full bg-[#292F36] border-t border-gray-700 overflow-hidden transition-all duration-300 ${
            open ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-5 p-6 text-gray-300">

            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="hover:text-[#12F7D6]"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/blogs"
                onClick={closeMenu}
                className="hover:text-[#12F7D6]"
              >
                Blogs
              </Link>
            </li>

            <li>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-full py-2 pl-4 pr-10 outline-none text-black"
                />

                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                />
              </div>
            </li>

            <li>
              <Link
                href="https://www.linkedin.com/in/rashelmahomud"
                target="_blank"
                onClick={closeMenu}
                className="flex items-center gap-3 hover:text-[#12F7D6]"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-[#12F7D6]"
                />
                LinkedIn
              </Link>
            </li>

            <li>
              <Link
                href="https://discord.com/users/"
                target="_blank"
                onClick={closeMenu}
                className="flex items-center gap-3 hover:text-[#12F7D6]"
              >
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="text-[#12F7D6]"
                />
                Discord
              </Link>
            </li>

            <li>
              <Link
                href="https://github.com/rashelmahomud"
                target="_blank"
                onClick={closeMenu}
                className="flex items-center gap-3 hover:text-[#12F7D6]"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-[#12F7D6]"
                />
                Github
              </Link>
            </li>

          </ul>
        </div>

      </nav>
    </header>
  );
};

export default Header;