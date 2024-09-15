import { Link } from "@remix-run/react";
import { getImgCode } from "~/lib/functions";
import DatabasePreviewCard from "./DatabasePreviewCard";

export default function DatabasePreview() {


    return (
        <section className="w-full p-8 mx-auto relative">

            <div className="text-ridercream mb-4">
                <h2 className="text-3xl mt-4 font-averiaSerifLibre mb-4 text-ridercream">Database</h2>
                <p>Explore the meanings behind the cards and symbolism of the imagery, using the Rider-Waite-Smith Tarot. It gets pretty wordy.</p>
            </div>

            <div className="w-full text-center flex fade-in-text mt-12 justify-center flex-wrap gap-2">

                <DatabasePreviewCard code="ar02" rotate="-12deg" />
                <DatabasePreviewCard code="sw09" rotate="-7deg" />
                <DatabasePreviewCard code="pe04" rotate="1deg" />
                <DatabasePreviewCard code="cu05" rotate="7deg" />
                <DatabasePreviewCard code="ar12" rotate="12deg" />

            </div>

            <div className="w-full text-center mt-8">
                <Link to="/tarotdatabase" className="mx-auto">
                    <button
                    className="bg-pink p-2 rounded-lg mb-4 mt-4 text-purplegrey hover:bg-ridercream transition-all duration-200 ease-in-out"
                    >
                        Go to database
                    </button>
                </Link>
            </div>


        </section>
    )
}