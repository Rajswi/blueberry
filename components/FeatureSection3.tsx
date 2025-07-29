import { Card, CardContent } from "@/components/ui/card";
import { Globe, Shield, Users, Wallet } from "lucide-react";
const featureCards = [
  {
    title: "Scam detection flags malicious transactions instantly. ",
    description:
      "No more switching. Manage all your assets across different networks seamlessly.",
    bgColor: "bg-red-200",
    imgSrc:
      "https://cms-videos.decentraland.org/ea2ybdmmn1kv/380JXFfC5zgsRTN0MFGB7N/29a5560079b203045e783236a1b357db/CompressDanceVideo.webm",
  },
  
  {
    title: " Self-custodial means you control your funds. We never have access. ",
    description:
      "Seamlessly browse, buy, and showcase your favorite digital collectibles.",
    bgColor: "bg-yellow-100",
    imgSrc:
      "https://cms-videos.decentraland.org/ea2ybdmmn1kv/2K9i1A8oUKTtpfqHsfvnTE/55a1b45a8e4a9ccbd08dafbaa6b4a66e/hero_mobile_8.mp4",
  },
  {
    title: "Connect your Ledger to keep your crypto even safer. ",
    description:
      "A beautiful interface to display your unique digital art and assets.",
    bgColor: "bg-blue-200",
    imgSrc:
      "https://cms-videos.decentraland.org/ea2ybdmmn1kv/2K9i1A8oUKTtpfqHsfvnTE/55a1b45a8e4a9ccbd08dafbaa6b4a66e/hero_mobile_8.mp4",
  },
];

export default function FeaturesSection() {
  return (
    <section className=" py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative">
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-6xl md:text-8xl font-medium tracking-tight text-purple-900  leading-[125%]">
              Controlled by you, <br />
              <div className=" flex gap-1.5 justify-center">
                {" "}
               secured
                <img
                  src="/blueberry-logo.png"
                  height={36}
                  width={120}
                  className=" aspect-square rotate-28"
                />
                by us
              </div>
            </h2>
          </div>
          <div className="bg-white text-black rounded-full text-2xl font-medium mb-14 mt-46 ml-6 flex gap-3 items-center w-fit py-4 px-5">
            <Shield /> <p>Your security</p>
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
