import LogoFull from "../assets/logo-full.svg";

export default function Hero() {
    return (
        <div className="hero p-8 flex justify-center items-center">

            <img src={LogoFull} alt="logo" className="max-w-[500px]" />

        </div>
    )
}