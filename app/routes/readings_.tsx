import ReadingPreviewCard from "~/components/ReadingPreviewCard"
import { Link } from "@remix-run/react"
import BackButton from "~/components/BackButton"

export default function ReadingsPage() {
    return (
        <main className="w-full m-4 p-8 mx-auto relative">
            <h2 className="text-3xl md:text-5xl mt-4 font-averiaSerifLibre mb-4 text-ridercream">Readings</h2>
            
            <div className="flex flex-wrap gap-4 justify-start">
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
        </main>
    )

}