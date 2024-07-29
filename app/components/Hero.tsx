import LogoFull from "../assets/logo-full.svg";
import StarCircleOutline from "../assets/starcircle-outline.svg"

export default function Hero() {
    return (
        <div className="hero flex justify-center items-center flex-wrap gap-8 h-[calc(100vh-10rem)] relative text-purplegrey overflow-hidden">

            <div className="z-20 p-4">
               
                <img src={LogoFull} alt="logo" className=" mb-8 svg" />

                <div className="hero--text font-averiaSerifLibre text-xl max-w-[500px] text-center mx-auto">
                    <p>Explore intuitive readings that help you navigate life's challenges and uncover new perspectives.</p>
                </div>
            </div>

            <div className="bg-[url('./assets/hero-bg.jpg')] bg-cover h-[500px] max-w-[500px] absolute left-0 right-0 mx-auto rounded-tr-full rounded-tl-full opacity-80 bordered border-2 border-ridercream"></div>

            <img src={StarCircleOutline} alt="" className="-z-10 absolute -top-50 h-[180%] mx-auto rotate-45 svg-cream" />

        </div>
    )
}