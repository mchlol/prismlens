import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";


export const meta: MetaFunction = () => {
  return [
    { title: "PrismLens" },
    { name: "description", content: "AI Tarot Card Reader" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <Hero />
    </div>
  );
}
