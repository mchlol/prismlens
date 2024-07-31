import type { LoaderFunctionArgs } from "@remix-run/node";
import { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";


type LoaderData = {
    card: {
        desc: string
    meaning_rev: string
    meaning_up: string
    name: string
    name_short: string
    suit: string
    type: string
    value: string
    value_int: number
    }
}

export let loader: LoaderFunction = async ({params}: LoaderFunctionArgs) => {
    const response = await fetch(`https://tarotapi.dev/api/v1/cards/search?q=${params.card}`);
    const data = await response.json();
    const card = data.card; 
    return json<LoaderData>({ card })
}

// export const loader = async ({
//     params,
// }: LoaderFunctionArgs) => {
//     return json(
//         await fetch(`https://tarotapi.dev/api/v1/cards/search?q=${params.card}`)
//     )
// };

export default function Card() {

    const tarotCard = useLoaderData<typeof loader>();

    console.log(tarotCard);

    return (
        <h1>Test</h1>
    )
}