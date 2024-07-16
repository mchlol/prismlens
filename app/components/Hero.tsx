import LogoFull from "../assets/logo-full.svg";

export default function Hero() {
    return (
        <div className="hero p-8 relative">

            <div className="hero--img-wrap flex gap-8 justify-center">

                <div className="hero--img__left h-[350px] w-[302px] bg-[url('./assets/prism01.jpg')] bg-cover rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-[150px]"></div>

                <div className="hero--img__right h-[350px] w-[566px] bg-[url('./assets/tarot01.jpg')] bg-cover rounded-tl-[175px] rounded-br-[175px]"></div>

            </div>

            <div className="hero--logo-wrap z-10 absolute top-1/4 left-1/4">

                <img src={LogoFull} alt="logo" className="w-[500px] max-w-full svg-shadow" />

            </div>

        </div>
    )
}