import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import ReadingsPreview from "~/components/ReadingsPreview";
import DatabasePreview from "~/components/DatabasePreview";
import Line from "../assets/llline.svg";

export const meta: MetaFunction = () => {
  return [
    { title: "PrismLens" },
    { name: "description", content: "AI Tarot Card Reader" },
  ];
};

export default function Index() {
  return (
    <div className="w-full">
      <Hero />
      <img src={Line} alt="" className="w-64 mx-auto svg" />
      <ReadingsPreview />
      <img src={Line} alt="" className="w-64 mx-auto svg-pink" />
      <DatabasePreview />
    </div>
  );
}
