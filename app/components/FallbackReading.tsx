
interface Props {
    type: string | undefined
}

export default function FallbackReading({type}: Props) {
    return (
        <div className="flex flex-col justify-center items-center text-ridercream gap-4 p-8 max-w-[65ch] mx-auto">
            <h2 className="text-purplegrey text-2xl md:text-5xl font-averiaSerifLibre">uggghhhhhh....</h2>
                    <img
                    src="/dalle-portrait-2 copy.png"
                    alt="A gen-z witch with e-girl style, holding the tarot card 'the star'."
                    className="w-2/3 mx-auto rounded-3xl -hue-rotate-30 max-w-full h-auto aspect-video scale-x-[-1]"
                    width="400"
                    height="225"
                    />
                <p>I'm not in the mood for a  <span className="text-rideryellow">"{type}"</span> reading right now.<br />
                It's not that I don't know how, I just don't want to.</p>

            </div>
    )
}