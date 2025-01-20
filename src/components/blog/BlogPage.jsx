import Image from "next/image";
import Line from "../shared/Line";
import Link from "next/link";
import Util from "../shared/Util";

const BlogPage = () => {
  return (
    <div className="bg-[#292F36] py-10 lg:px-20">
    <div className="container mx-auto">
      <div className="flex justify-center gap-20">
        <Util />
      </div>
      <div className="text-center">
        <h1 className="text-6xl text-[#12F7D6] font-semibold">Blogs</h1>
        <Line small />
        <p className="text-white font-semibol">
          My thoughts on technology and business, welcome to subscribe
        </p>
      </div>
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
              Web development, also known as website development, encompasses
              a variety of tasks and processes involved in creating websites
              for the internet…
            </p>
            <Link
              className="text-xl text-[#12F7D6] border-b-2 border-gray-600"
              href={"/"}
            >
              Read More...
            </Link>
            <ul className="flex lg:flex-row flex-col gap-5 text-white my-5">
              <li className="bg-gray-500 px-2 rounded-full">Web development</li>
              <li>Text Sinan</li>
              <li>Date : 10.Oct 2025</li>
              <li>Read 1 Min</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-10">
        <Link href={'/blogs'}>
        <button className="bg-[#12F7D6] px-4 py-2 rounded-full font-semibold">
          View More
        </button>
        </Link>
        <button className="border-4 border-teal-300 px-4 py-2 rounded-full text-white font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  </div>
  );
};

export default BlogPage;
