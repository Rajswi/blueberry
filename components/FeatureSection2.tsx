import { Card, CardContent } from "@/components/ui/card";
import { Globe, Shield, Users, Wallet } from "lucide-react";
const featureCards = [
  {
    title: "Do more with NFTs — pin, hide, burn, and list. .",
    description:
      "No more switching. Manage all your assets across different networks seamlessly.",
    bgColor: "bg-violet-300/80",
    imgSrc:
      "https://framerusercontent.com/assets/PiAV5ldxJoY8M9O1OA5Iv9daxE.mp4",
  },
  {
    title: " Swap tokens super fast and at low fees.",
    description:
      "Seamlessly browse, buy, and showcase your favorite digital collectibles.",
    bgColor: "bg-rose-200",
    imgSrc:
      "https://framerusercontent.com/assets/PiAV5ldxJoY8M9O1OA5Iv9daxE.mp4",
  },
  {
    title: "Store, stake, and earn rewards with your tokens.",
    description:
      "A beautiful interface to display your unique digital art and assets.",
    bgColor: "bg-amber-200/80",
    imgSrc:
      "https://framerusercontent.com/assets/PiAV5ldxJoY8M9O1OA5Iv9daxE.mp4",
  },
];

export default function FeaturesSection() {
  return (
    <section className=" py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative">
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-6xl md:text-8xl font-medium tracking-tight text-purple-900  leading-11">
              <div className=" flex gap-3 items-center justify-center">
                
                Powerful {" "}
                <img
                  src="/blueberry-logo.png"
                  height={36}
                  width={90}
                  className=" aspect-square rotate-25"
                />
                tools
                </div>
               <br/> made for everyone.
              
            </h2>
          </div>
          <div className="bg-white text-purple-950 rounded-full text-2xl font-medium mb-14 mt-46 ml-6 flex gap-3 items-center w-fit py-4 px-5">
            <Globe /> <p>Your web3 tools</p>
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
    className={`w-96 h-[500px] flex flex-col justify-between px-6 py-4 rounded-3xl overflow-hidden ${bgColor}`}
  ><div className="h-96 rounded-4xl overflow-hidden">
    <video
      src={imgSrc}
      autoPlay
      muted loop playsInline
      width={400}
      height={300}
      className="rounded-xl -mt-28 object-cover shadow-lg"
    />
    </div>
    <div >
      <h3 className="text-xl font-bold text-black text-center">{title}</h3>
      
    </div>
    <div></div>
  </Card>
);
