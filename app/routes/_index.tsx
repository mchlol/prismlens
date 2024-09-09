import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import ReadingsPreview from "~/components/ReadingsPreview";
import DatabasePreview from "~/components/DatabasePreview";


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
      <ReadingsPreview />
      <DatabasePreview />
    </div>
  );
}
