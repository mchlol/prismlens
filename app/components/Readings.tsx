import ReadingCard from "./ReadingCard"
import { Link } from "@remix-run/react"

export default function Readings() {
    return (
        <section className="w-full m-4 p-8 mx-auto">
            <h2 className="text-3xl font-averiaSerifLibre mb-4 text-ridercream">Readings</h2>

            <div className="flex flex-wrap gap-4 justify-start">
                <Link to="/yesno">
                    <ReadingCard imgPosition="tl" rotate="90deg">
                        Answer a <em>yes or no</em> question
                        </ReadingCard>
                </Link>
                <Link to="/threecards">
                    <ReadingCard imgPosition="tr" rotate="45deg">Look into your <em>past present and future</em></ReadingCard>
                </Link>
            </div>


        </section>
    )
}