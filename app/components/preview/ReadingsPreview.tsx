import ReadingPreviewCard from "./ReadingPreviewCard";
import { Link } from "@remix-run/react";

export default function ReadingsPreview() {
    return (
        <section className="w-full p-8 mx-auto relative">

            <div className="text-ridercream mb-4">
                <h2 className="text-3xl md:text-5xl mt-4 font-averiaSerifLibre mb-4 text-ridercream">Readings</h2>
                <p>Grappling with a difficult decision, or stuck in a rut? Reframe your situation and reveal a fresh perspective.</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-start">
                <Link to="readings/yesno">
                    <ReadingPreviewCard imgPosition="tl" rotate="90deg">
                        Answer a <em>yes or no</em> question
                    </ReadingPreviewCard>
                </Link>
                <Link to="readings/pastpresentfuture">
                    <ReadingPreviewCard imgPosition="tr" rotate="45deg">
                        Look into your <em>past present and future</em>
                    </ReadingPreviewCard>
                </Link>
            </div>

            <Link to="/readings">
                <button className="bg-pink p-2 rounded-lg mb-4 mt-4 text-purplegrey hover:bg-ridercream transition-all duration-200 ease-in-out">View all</button>
            </Link>


        </section>
    )
}