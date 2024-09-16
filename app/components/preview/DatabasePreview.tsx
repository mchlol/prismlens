import { Link } from "@remix-run/react";
import DatabasePreviewCard from "./DatabasePreviewCard";
import Button from "../Button";

export default function DatabasePreview() {


    return (
        <section className="w-full p-8 mx-auto relative mb-4">

            <div className="text-ridercream mb-4">
                <h2 className="text-3xl md:text-5xl mt-4 font-averiaSerifLibre mb-4 text-ridercream">Database</h2>
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
               <Button destination="/tarotdatabase">Go to database</Button>
            </div>


        </section>
    )
}