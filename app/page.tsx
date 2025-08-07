import Image from "next/image";
// import VideosPage from "@/app/videos/page";
import FirstSection from "./ui/FirstSection";
import SecondSection from "./ui/SecondSection";
import ThirdSection from "./ui/ThirdSection";
import FourthSection from "./ui/FourthSection";
import FifthSection from "./ui/FifthSection";

export default function Home() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </div>
  );
}
