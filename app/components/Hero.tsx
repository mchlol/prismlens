import LogoFull from "../assets/logo-full.svg";

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero--img__left h-[350px] w-[302px] bg-gray-400 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-[150px]"></div>
            <div className="hero--img__right h-[350px] w=[566px] bg-gray-200 rounded-tl-[175px] rounded-br-[175px]" />
            <div className="hero--text">
                <img src={LogoFull} alt="logo" className="max-h-[100px]" />
            </div>
        </div>
    )
}