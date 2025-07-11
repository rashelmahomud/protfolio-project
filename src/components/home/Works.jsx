"use client";
import React, { useState } from "react";
import Util from "../shared/Util";
import Image from "next/image";
import Line from "../shared/Line";
import Link from "next/link";

const Works = () => {
  const slides = [
    {
      id: 1,
      image: "/assates/carosal fram.png",
      img1: "/assates/abc5.png",
      img2: "/assates/protfolio.png",
      github: "https://github.com/rashelmahomud/protfolio-project",
      live: "https://protfolio-project-blue.vercel.app",
      alt: "Slide 1",
    },
    {
      id: 2,
      image: "/assates/carosal fram.png",
      img1: "/assates/abc5.png",
      img2: "/assates/abc4.png",
      github: "https://github.com/rashelmahomud/protfolio-project",
      live: "https://github.com/rashelmahomud/protfolio-project",
      alt: "Slide 2",
    },
    {
      id: 3,
      image: "/assates/carosal fram.png",
      img1: "/assates/abc5.png",
      img2: "/assates/protfolio10.png",
      github: "https://github.com/rashelmahomud/asperia-helth-care",
      live: "https://asperia-helth-care.vercel.app/",
      alt: "Slide 3",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  return (
    <div className='bg-[url("/assates/hiddenlog.png")] bg-no-repeat bg-center bg-cover'>
      <div className="bg-[#1A1E23] bg-opacity-95">
        <div className="flex justify-center gap-20">
          <Util />
        </div>
        <div className="text-center">
          <h1 className="lg:text-6xl text-4xl text-[#12F7D6] font-semibold">Works</h1>
          <Line small />
          <p className="font-semibol text-white">
            I had the pleasure of working with these awesome projects
          </p>
        </div>
        <div className="relative w-full max-w-3xl mx-auto py-10">
          <div className="overflow-hidden relative rounded-lg">
            {/* Slides */}
            <div
              className="flex transition-transform duration-500  py-3"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="static">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      className=" h-auto object-cover z-0 relative "
                      width={800}
                      height={800}
                    />

                    <div>
                      <img
                        src={slide.img1}
                        alt={slide.alt}
                        className="object-cover lg:mb-28 lg:ml-[68px] lg:w-[245px] lg:h-[325px] w-[120px] h-[160px] ml-9 absolute lg:-mt-[442px] -mt-[220px] z-10"
                      />
                      <div className="flex">
                        <Link
                          className="text-sm font-semibold ml-10"
                          href={slide.github}
                          target="_blank"
                        >
                          <button className="px-6 py-2 rounded-full font-semibold bg-[#12F7D6] backdrop-blur-md border border-white/20 hover:bg-white/20 hover:text-white transition-all">
                            View code
                          </button>
                        </Link>
                        <Link
                          className="text-sm font-semibold ml-10"
                          href={slide.live}
                          target="_blank"
                        >
                          <button className="px-6 py-2 rounded-full font-semibold bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all">
                            View Live
                          </button>
                        </Link>
                      </div>

                      <img
                        src={slide.img2}
                        alt={slide.alt}
                        className="object-cover lg:w-[352px] lg:h-[225px] w-[170px] h-[100px] absolute lg:-mt-[385px] -mt-[215px] lg:ml-[360px] ml-[185px] z-10"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
              onClick={prevSlide}
            >
              &#8249;
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
              onClick={nextSlide}
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
