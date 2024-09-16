import ReadingPreviewCard from "~/components/preview/ReadingPreviewCard";
import { Link } from "@remix-run/react";
import Button from "~/components/Button";

export default function ReadingsPage() {
    return (
        <section className="text-center pb-8">

            <div className="section-heading p-8">
                <h2 className="uppercase text-3xl md:text-5xl mt-4 font-averiaSerifLibre mb-4 text-purplegrey">Readings</h2>
                <p className="max-w-[80ch] mx-auto text-ridercream">
                    The Tarot can show you a different way to look at things, maybe reveal a new path or something. Just pick a reading if you're feeling stuck, want to reframe your perspective, or, I don't know, open your mind to whatever.
                </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center m-8">
                <Link to="./yesno">
                    <ReadingPreviewCard imgPosition="br" rotate="90">
                        Answer a <em>yes or no</em> question
                    </ReadingPreviewCard>
                </Link>
                <Link to="./pastpresentfuture">
                    <ReadingPreviewCard imgPosition="tr" rotate="90">
                        Look into your <em>past present and future</em>
                    </ReadingPreviewCard>
                </Link>
                <Link to="./dream">
                    <ReadingPreviewCard imgPosition="tl" rotate="45">
                        Analyse and interpret a <em>recent dream</em>
                    </ReadingPreviewCard>
                </Link>
                <Link to="./relationship">
                    <ReadingPreviewCard imgPosition="bl" rotate="45">
                        Gain insight into a <em>relationship</em>
                    </ReadingPreviewCard>
                </Link>
            </div>
            
            <Button destination="back">Back</Button>
        </section>
    )

}