import ReadingCard from "~/components/ReadingCard"
import { Link } from "@remix-run/react"

export default function ReadingsPage() {
    return (
        <main>
            <h1>Readings</h1>
            
            <Link to="/yesno">
                <ReadingCard imgPosition="tl" rotate="90deg">
                    Answer a <em>yes or no</em> question
                    </ReadingCard>
            </Link>
            <Link to="/threecards">
                <ReadingCard imgPosition="tr" rotate="45deg">Look into your <em>past present and future</em></ReadingCard>
            </Link>
        </main>
    )

}