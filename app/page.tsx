import FeaturesSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import { div } from "motion/react-client";
import Image from "next/image";
import FeaturesSection2 from "@/components/FeatureSection2";
import FeaturesSection3 from "@/components/FeatureSection3";

export default function Home() {
  return (
   <> 
    <HeroSection/>
    <FeaturesSection />
    <FeaturesSection2 />
    <FeaturesSection3 />
    </>

      )
}
