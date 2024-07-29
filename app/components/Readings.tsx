import ReadingCard from "./ReadingCard";
import { Link } from "@remix-run/react";
import Line from "../assets/llline.svg";

export default function Readings() {
    return (
        <section className="w-full m-4 p-8 mx-auto relative">

            <img src={Line} alt="" className="w-64 absolute -top-10 right-0 left-0 mx-auto svg" />

            <div className="text-ridercream mb-4">
                <h2 className="text-3xl mt-4 font-averiaSerifLibre mb-4 text-ridercream">Readings</h2>
                <p>Grappling with a difficult decision, or stuck in a rut? Reframe your situation and reveal a fresh perspective.</p>
            </div>

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