import Image from "next/image";
import { Brygada_1918 } from "next/font/google";
import Link from "next/link";
import { Metadata } from "next";

const brygada = Brygada_1918({
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    description: "Expert wedding photographer specializing in capturing timeless, beautiful moments. Offering high-quality photography services tailored to your unique wedding day.",
}

export default async function Home() {
    const height = 1350;
    const width = 1080;

    return (
        <main>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">

                <Link
                    href={"/photoshoot/01"}
                >
                    <div className="h-full flex flex-col">
                        <Image
                            src={"/photoshoots/photoshoot-01/wedding-photo-01.jpeg"}
                            alt="Guys in a wedding"
                            height={height}
                            width={width}
                            className="h-full object-cover"
                        />
                        <ul className={`${brygada.className} text-sm flex justify-between`}>
                            <li className="flex">
                                <p>
                                    Rome, Italy
                                </p>
                            </li>
                            <li>2024</li>
                        </ul>
                    </div>
                </Link>

                <Link
                    href={"/photoshoot/02"}
                >
                    <div className="h-full flex flex-col">
                        <Image
                            src={"/photoshoots/photoshoot-02/wedding-photo-01.jpeg"}
                            alt="Guys in a wedding"
                            height={height}
                            width={width}
                            className="h-full object-cover"
                        />
                        <ul className={`${brygada.className} text-sm flex justify-between`}>
                            <li>Rome, Italy</li>
                            <li>2024</li>
                        </ul>
                    </div>
                </Link>

                <Link
                    href={"/photoshoot/03"}
                >
                    <div className="h-full flex flex-col">
                        <Image
                            src={"/photoshoots/photoshoot-03/wedding-photo-01.jpeg"}
                            alt="Guys in a wedding"
                            height={height}
                            width={width}
                            className="h-full object-cover"
                        />
                        <ul className={`${brygada.className} text-sm flex justify-between`}>
                            <li>Rome, Italy</li>
                            <li>2024</li>
                        </ul>
                    </div>
                </Link>

                <Link
                    href={"/photoshoot/04"}
                >
                    <div className="h-full flex flex-col">
                        <Image
                            src={"/photoshoots/photoshoot-04/wedding-photo-01.jpeg"}
                            alt="Guys in a wedding"
                            height={height}
                            width={width}
                            className="h-full object-cover"
                        />
                        <ul className={`${brygada.className} text-sm flex justify-between`}>
                            <li>Rome, Italy</li>
                            <li>2024</li>
                        </ul>
                    </div>
                </Link>

                <Link
                    href={"/photoshoot/05"}
                >
                    <div className="h-full flex flex-col">
                        <Image
                            src={"/photoshoots/photoshoot-05/wedding-photo-01.jpeg"}
                            alt="Guys in a wedding"
                            height={height}
                            width={width}
                            className="h-full object-cover"
                        />
                        <ul className={`${brygada.className} text-sm flex justify-between`}>
                            <li>Rome, Italy</li>
                            <li>2024</li>
                        </ul>
                    </div>
                </Link>

                <Link
                    href={"/photoshoot/06"}
                >
                    <div className="h-full flex flex-col">
                        <Image
                            src={"/photoshoots/photoshoot-06/wedding-photo-01.jpeg"}
                            alt="Guys in a wedding"
                            height={height}
                            width={width}
                            className="h-full object-cover"
                        />
                        <ul className={`${brygada.className} text-sm flex justify-between`}>
                            <li>Rome, Italy</li>
                            <li>2024</li>
                        </ul>
                    </div>
                </Link>

                <Link
                    href={"/photoshoot/07"}
                >
                    <div className="h-full flex flex-col">
                        <Image
                            src={"/photoshoots/photoshoot-07/wedding-photo-01.jpeg"}
                            alt="Guys in a wedding"
                            height={height}
                            width={width}
                            className="h-full object-cover"
                        />
                        <ul className={`${brygada.className} text-sm flex justify-between`}>
                            <li>Rome, Italy</li>
                            <li>2024</li>
                        </ul>
                    </div>
                </Link>

                <Link
                    href={"/photoshoot/08"}
                >
                    <div className="h-full flex flex-col">
                        <Image
                            src={"/photoshoots/photoshoot-08/wedding-photo-01.jpeg"}
                            alt="Guys in a wedding"
                            height={height}
                            width={width}
                            className="h-full object-cover"
                        />
                        <ul className={`${brygada.className} text-sm flex justify-between`}>
                            <li>Rome, Italy</li>
                            <li>2024</li>
                        </ul>
                    </div>
                </Link>

            </div>
        </main>
    );
}
