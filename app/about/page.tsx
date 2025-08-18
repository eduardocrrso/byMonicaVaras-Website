import { Brygada_1918 } from "next/font/google";
import { Metadata } from "next";

const brygada = Brygada_1918({
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'About',
    description: `I'm an avid photographer with a deep passion for capturing the world through my lens, and my specialty lies in wedding photography`,
}

export default function Page() {
    return (
        <div className="max-w-3xl mx-auto">
            <br />
            <h2 className={`${brygada.className} text-5xl text-right`}>Mónica Varas</h2>
            <br />
            <p>
                I’m a Mexican photographer endlessly fascinated by the power of photography to preserve moments that will never happen again. Among them, wedding days hold a special place — a celebration where beauty, emotion, and meaning converge in their most powerful form. I’m drawn to the in-between moments, the softness of light, and the way a gesture can speak without words. My approach is about being fully present and creating photographs that feel honest, cinematic, and full of soul.
            </p>
            <br />
            <p>
                I find inspiration everywhere I go — from the quiet poetry of everyday life to the timeless masterpieces inside the Musée d’Orsay in Paris. Based mainly in Cabo and Vancouver, my work has been published in Vogue México, Vogue US, The Lane, and Architectural Digest — features that reflect my refined, documentary style and love for timeless elegance.
            </p>
            <br />
            <p>
                From grand celebrations at St. Patrick’s Cathedral in New York, to horseback rides at sunset alongside zebras in Careyes, to filming a documentary at Monaco’s legendary Le Louis XV — my journey has taken me to settings as diverse as they are unforgettable. I’ve also been invited to showcase my vision internationally, including participation in prestigious photography competitions in Japan — experiences that continue to shape my global perspective and artistic voice.
            </p>
            <br />
            <p>
                Constantly moving between the world’s most beautiful destinations, I tell wedding stories that blend elegance, emotion, and timeless beauty — creating images you can feel, not just see.
            </p>
            <br />
        </div>
    );
}