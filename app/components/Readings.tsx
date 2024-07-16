import ReadingCard from "./ReadingCard"
import { Link } from "@remix-run/react"

export default function Readings() {
    return (
        <section className="mt-4 p-8">
            <h2 className="text-3xl text-center font-averiaSerifLibre mb-4">Readings</h2>

            <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/yesno">
                    <ReadingCard title="Yes/No Question" content="A single card to gain insight on a specific question or situation." />
                </Link>
                <ReadingCard title="Past Present Future" content="A three-card spread to represent three stages of your life." />
            </div>


        </section>
    )
}