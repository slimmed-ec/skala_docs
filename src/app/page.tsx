import Link from "next/link";
import { Metadata } from "next";
import { Database, Dock, ImageDown, Newspaper } from "lucide-react";
import Hr from "@/components/ui/hr";

export const metadata: Metadata = {
  title: "Nextra 4",
  description: "Nextra 4 is here.",
};

const items = [
  {
    title: "Nextra 4",
    description: "Nextra 4 is here.",
  },
  {
    title: "Nextra 4",
    description: "Nextra 4 is here.",
  },
  {
    title: "Nextra 4",
    description: "Nextra 4 is here.",
  },
  {
    title: "Nextra 4",
    description: "Nextra 4 is here.",
  },
];

export default async function Home() {
  return (
    <>
      {/* === */}
      <div className="bg-black overflow-hidden">
        <div className="container max-w-(--nextra-content-width) px-5 xl:-px-0 grid items-start lg:grid-cols-2 mx-auto pt-[152px] pb-[96px] gap-10 lg:gap-[145px] text-center lg:text-left">
          <div className="t-5 xl:mt-[80px]">
            <h1 className="pb-4 text-5xl font-semibold leading-tight lg:text-8xl text-w-800 sm:break-normal">
              Knowledge
              <span className="xl:block gd-title">Base AI Bots</span>
            </h1>
            <p className="pt-4 pb-8 text-base font-normal text-w-100 lg:text-xl max-w-xl mx-auto lg:mx-0">
              Effortlessly integrate diverse enterprise data sources to enhance
              AI responses with the structured knowledge recall mechanism
              provided by RAG.
            </p>
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <a
                href="sign-up"
                className="px-6 py-3 font-semibold border rounded bg-w-800 border-inherit text-b-800 hover:bg-transparent hover:text-w-800"
              >
                Get Started
              </a>
              <a
                href="docs"
                className="px-6 py-3 font-semibold border rounded border-w-100 text-w-800 hover:bg-w-800 hover:text-b-800"
              >
                Explore Docs
              </a>
            </div>
          </div>
          <div>
            {/* <video autoPlay={true} playsInline={true} loop={true}>
              <source src="/static/video/chart.webm" type="video/webm" />
            </video> */}
            <video autoPlay={true} playsInline={true} loop={true} muted={true}>
              <source src="/video/chart.webm" type="video/webm" />
              {/* <source src="/static/video/chart.mp4" type="video/mp4" /> */}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      {/* === */}
      <Hr />
      <div className="container px-5 py-24 mx-auto xl:px-0">
        <h2 className="gd-title text-5xl font-semibold leading-[64px] text-center mx-auto mb-16">
          Encountered AI Challenges
        </h2>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
          {items.map((item, i) => (
            <Link
              key={i}
              href={"/"}
              className="event-card group rounded-2xl relative text-left !opacity-100 !visible focus-visible:outline outline-[rgba(255,255,255,0.64)] outline-offset-[3px] bg-white/[0.01]"
            >
              <div className="flex items-center xl:items-start py-6 xl:py-8 justify-start h-full transition-colors bg-[#D1AAD7]/[0.01]">
                <Database
                  size={48}
                  color="#D1AAD7"
                  className="max-w-[120px] w-full sm:max-w-[120px] xl:max-w-max px-2 lg:px-5"
                />
                <div className="flex flex-col pr-2.5 sm:pr-4 lg:pr-10">
                  <p className="mb-1 text-xs font-medium sm:text-sm text-scale-lightmauve">
                    {item.title}
                  </p>
                  <p className="font-aeonik text-lg leading-6 sm:text-xl lg:text-2xl lg:leading-[27px] line-clamp-2 xl:line-clamp-3">
                    {item.description}
                  </p>
                  <p className="mt-3">
                    LLMs struggle with extensive data analysis.
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
