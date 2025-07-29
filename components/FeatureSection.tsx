import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Wallet } from "lucide-react";
const featureCards = [
  {
    title: "Multiple chains, one wallet.",
    description:
      "No more switching. Manage all your assets across different networks seamlessly.",
    bgColor: "bg-orange-100/50",
    imgSrc:
      "https://cdn.dribbble.com/userupload/35615208/file/original-556c94849f9bcd12bc330b677fbd6da8.mp4",
  },
  {
    title: "Access the largest NFT market.",
    description:
      "Seamlessly browse, buy, and showcase your favorite digital collectibles.",
    bgColor: "bg-pink-100/50",
    imgSrc:
      "https://cdn.dribbble.com/userupload/4295178/file/original-a5cf74db2f3e820af49fe359cf9c8226.mp4",
  },
  {
    title: "Showcase your NFT collection.",
    description:
      "A beautiful interface to display your unique digital art and assets.",
    bgColor: "bg-green-100/50",
    imgSrc:
      "https://cdn.dribbble.com/userupload/14525558/file/original-d3be426e2416ca6cc48876f2dbb5795b.mp4",
  },
];

export default function FeaturesSection() {
  return (
    <section className=" py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative">
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-6xl md:text-8xl font-medium tracking-tight text-purple-900 mb-14 leading-[125%] ">
              Keep everything <br />
              <div className=" flex gap-2 justify-center">
                {" "}
                in{" "}
                <img
                  src="/blueberry-logo.png"
                  height={36}
                  width={110}
                  className=" aspect-square rotate-27"
                />
                one place
              </div>
            </h2>
          </div>
          <div className="bg-white text-purple-950 rounded-full text-2xl font-medium mb-14 mt-46 ml-6 flex gap-3 items-center w-fit py-4 px-5">
            <Wallet /> <p>Your Wallet</p>
          </div>
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll hover:[animation-play-state:paused]">
              {featureCards.map((card, index) => (
                <li key={index}>
                  <FeatureCard {...card} />
                </li>
              ))}
            </ul>
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll hover:[animation-play-state:paused]"
              aria-hidden="true"
            >
              {featureCards.map((card, index) => (
                <li key={index}>
                  <FeatureCard {...card} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({
  title,
  description,
  bgColor,
  imgSrc,
}: {
  title: string;
  description: string;
  bgColor: string;
  imgSrc: string;
}) => (
  <Card
    className={`w-96 h-96 flex flex-col justify-between p-6 rounded-3xl overflow-hidden ${bgColor}`}
  >
    <video
      src={imgSrc}
      autoPlay
      muted
      width={400}
      height={300}
      className="rounded-xl shadow-lg"
    />
    <div >
      <h3 className="text-xl font-bold text-black/80">{title}</h3>
      <p className="text-purple-900/80 font-medium text-xs mt-2">{description}</p>
    </div>
    <div></div>
  </Card>
);
