import SingleBlog from "@/components/blog/SingleBlog";
import Line from "@/components/shared/Line";

const Blogs = () => {
  return (
    <div className="bg-[#292F36] py-10 lg:px-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="lg:text-6xl text-2xl text-[#12F7D6] font-semibold">Blogs</h1>
          <Line small />
          <p className="text-white font-semibol">
            My thoughts on technology and business, welcome to subscribe
          </p>
        </div>
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
      </div>
    </div>
  );
};

export default Blogs;
