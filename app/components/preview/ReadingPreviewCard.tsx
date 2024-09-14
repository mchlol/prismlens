import StarCircleOutline from "../../assets/starcircle-outline.svg";

type Props = {
    children: React.ReactNode
    imgPosition: string
    rotate: string
}

export default function ReadingPreviewCard({children, imgPosition, rotate}: Props) {

    let position = '';
    if (imgPosition === 'tl') {
        position = '-top-5 -left-[150px]'
    } else if (imgPosition === 'tr') {
        position = 'top-[-150px] -right-[150px]'
    } else if (imgPosition === 'bl') {
        position = 'bottom-[20px] -right-[180px]'
    } else {
        position = 'top-[-50px] -left-[150px]'
    }
    return (
        <div className="w-52 md:w-64 flex-1 p-8 h-80 rounded-tr-[125px] text-ridercream bg-[url('/meshgradbg-duo.png')] bottom- bg-cover hover:scale-[1.03] transition ease-in-out relative overflow-hidden shadow-sm">
            <div className={`reading-card__img absolute ${position} rotate-${rotate} blur-[2px]`}>
                <img src={StarCircleOutline} alt="" />
            </div>
            
            <p className="absolute bottom-0 left-0 p-8 text-2xl font-averiaSerifLibre">{children}</p>
        </div>
    )
}