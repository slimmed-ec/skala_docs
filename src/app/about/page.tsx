import Link from "next/link";

export const metadata = {
  title: "About Us",
  description: "Learn more about our project.",
};

export default function About() {
  return (
    <div className="container px-5 py-24 mx-auto xl:px-0">
      <div className="container flex flex-col items-center justify-center">
        <h1 className="text-[10rem]">About Us</h1>
        <div className="flex flex-col items-center justify-center max-w-5xl mx-auto gap-10">
          <h2 className="h2 text-7xl text-center">
            Our mission is to accelerate the development of AI applications
          </h2>
          <p className="p text-lg text-center">
            Better data leads to more performant models. Performant models lead
            to faster deployment. We help deliver value from AI investments
            faster with better data by providing an end-to-end solution to
            manage the entire ML lifecycle.
          </p>
        </div>
      </div>
    </div>
  );
}
