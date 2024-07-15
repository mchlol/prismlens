type Props = {
    title: string
    content: string
}

export default function ReadingCard(props: Props) {
    return (
        <div className="w-64 border-2 p-8 rounded-3xl text-center">
            <h3 className="font-averiaSerifLibre text-lg mb-2">{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}