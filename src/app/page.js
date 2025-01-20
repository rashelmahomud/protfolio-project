import HomeAbout from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Skill from "@/components/home/Skill";
import Works from "@/components/home/Works";
import Contact from "@/components/home/Contact";
import BlogPage from "@/components/blog/BlogPage";

export default function Home() {
  return (
    <main>
      <Banner />
      <HomeAbout />
      <Skill />
      <Works />
      <BlogPage />
      <Contact />
    </main>
  );
}
