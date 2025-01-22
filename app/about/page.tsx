import { Brygada_1918 } from "next/font/google";

const brygada = Brygada_1918({
    weight: "400",
    subsets: ["latin"],
});

export default function Page() {
    const text1 = `I'm an avid photographer with a deep passion for capturing the world through my lens, and my specialty lies in wedding photography.`
    
    const text2 = `Whether it's the play of light during golden hour, the raw emotion in candid moments, or the intricate details that make each celebration unique, I love preserving the beauty and significance of these special days.`
    
    const text3 = `For me, photography isn't just a hobby—it's a way to connect with the world and express my creativity through visual storytelling, especially when it comes to documenting the love and joy of a couple's wedding day.`

    return (
        <>
            <ul className={`${brygada.className} text-md flex justify-between`}>
                <li className="flex">
                    <p>
                        Mexico
                    </p>
                </li>
                <li>{new Date().getFullYear()}</li>
            </ul>
            <br />
            <h2 className={`${brygada.className} text-5xl text-right`}>Mónica Varas</h2>
            <br />
            <p>
                {text1}
            </p>
            <br />
            <p>
                {text2}
            </p>
            <br />
            <p>
                {text3}
            </p>
            <br />
        </>
    );
}