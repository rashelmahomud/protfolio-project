import HomeAbout from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Skill from "@/components/home/Skill";
import Works from "@/components/home/Works";
import Blogs from "./blogs/page";

export default function Home() {
  return (
    <main>
      <Banner />
      <HomeAbout />
      <Skill />
      <Works />
      <Blogs />
    </main>
  );
}
