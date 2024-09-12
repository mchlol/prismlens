import ReadingPreviewCard from "~/components/ReadingPreviewCard"
import { Link } from "@remix-run/react"
import BackButton from "~/components/BackButton"

export default function ReadingsPage() {
    return (
        <section className="text-center pt-8 pb-8">

            <div className="section-heading p-8">
                <h2 className="uppercase text-3xl md:text-5xl mt-4 font-averiaSerifLibre mb-4 text-purplegrey">Readings</h2>
                <p className="max-w-[80ch] mx-auto text-ridercream">
                    The Tarot can offer us new ways of looking at a situation, to reveal new paths forward. Choose a reading to help you get unstuck, reframe your perspective, or open your mind to new possibilities.
                </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-start m-8">
                <Link to="./yesno">
                    <ReadingPreviewCard imgPosition="tl" rotate="90deg">
                        Answer a <em>yes or no</em> question
                    </ReadingPreviewCard>
                </Link>
                <Link to="./threecards">
                    <ReadingPreviewCard imgPosition="tr" rotate="45deg">
                        Look into your <em>past present and future</em>
                    </ReadingPreviewCard>
                </Link>
            </div>
            <BackButton />
        </section>
    )

}