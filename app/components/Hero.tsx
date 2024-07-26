import LogoFull from "../assets/logo-full.svg";
import StarCircleOutline from "../assets/starcircle-outline.svg"

export default function Hero() {
    return (
        <div className="hero p-8 flex justify-center items-center flex-wrap gap-8 relative mt-8">

            <div>
                <img src={LogoFull} alt="logo" className="max-w-[500px] mb-8" />

                <div className="hero--text text-ridercream font-averiaSerifLibre text-xl w-96 text-center mx-auto">
                    <p>Explore intuitive readings that help you navigate life's challenges and uncover new perspectives.</p>
                </div>
            </div>

            <img src={StarCircleOutline} alt="" className="-z-10 absolute -top-50 h-[220%] mx-auto rotate-45 svg" />

        </div>
    )
}