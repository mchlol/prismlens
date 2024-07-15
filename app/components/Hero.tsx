import LogoFull from "../assets/logo-full.svg";

export default function Hero() {
    return (
        <>
        <div className="hero p-8 relative">

            <div className="hero--img-wrap flex gap-8 justify-center">

                <div className="hero--img__left h-[350px] w-[302px] bg-gray-400 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-[150px]"></div>

                <div className="hero--img__right h-[350px] w-[566px] bg-gray-200 rounded-tl-[175px] rounded-br-[175px]"></div>

            </div>

            <div className="hero--logo-wrap absolute top-1/4 left-1/4">

                <img src={LogoFull} alt="logo" className="w-[600px]" />

            </div>
            

        </div>

        <div className="hero--text max-w-[70ch] mx-auto text-center mt-4">

            <h2 className="text-xl font-averiaSerifLibre mb-4">Welcome to PrismLens, the ultimate tarot app for the modern queen! 🌟 </h2>

            <p>Dive into intuitive readings that promise to unlock your potential and guide you to your most fabulous self. Don't miss out on the insights that will keep you ahead of the game—let PrismLens light your path to empowerment and success.</p>

        </div>
        </>
    )
}