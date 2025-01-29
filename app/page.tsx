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

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-01.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                    <ul className={`${brygada.className} text-sm flex justify-between`}>
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[1.15rem] -ml-[0.125rem]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <p>
                                Rome, Italy
                            </p>
                        </li>
                        <li>2024</li>
                    </ul>
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-02.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                    <ul className={`${brygada.className} text-sm flex justify-between`}>
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[1.15rem] -ml-[0.125rem]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <p>
                                Rome, Italy
                            </p>
                        </li>
                        <li>2024</li>
                    </ul>
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-03.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                    <ul className={`${brygada.className} text-sm flex justify-between`}>
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[1.15rem] -ml-[0.125rem]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <p>
                                Rome, Italy
                            </p>
                        </li>
                        <li>2024</li>
                    </ul>
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-04.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                    <ul className={`${brygada.className} text-sm flex justify-between`}>
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[1.15rem] -ml-[0.125rem]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <p>
                                Rome, Italy
                            </p>
                        </li>
                        <li>2024</li>
                    </ul>
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-05.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                    <ul className={`${brygada.className} text-sm flex justify-between`}>
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[1.15rem] -ml-[0.125rem]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <p>
                                Rome, Italy
                            </p>
                        </li>
                        <li>2024</li>
                    </ul>
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-06.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                    <ul className={`${brygada.className} text-sm flex justify-between`}>
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[1.15rem] -ml-[0.125rem]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <p>
                                Rome, Italy
                            </p>
                        </li>
                        <li>2024</li>
                    </ul>
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-07.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                    <ul className={`${brygada.className} text-sm flex justify-between`}>
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[1.15rem] -ml-[0.125rem]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <p>
                                Rome, Italy
                            </p>
                        </li>
                        <li>2024</li>
                    </ul>
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-08.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                    <ul className={`${brygada.className} text-sm flex justify-between`}>
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[1.15rem] -ml-[0.125rem]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <p>
                                Rome, Italy
                            </p>
                        </li>
                        <li>2024</li>
                    </ul>
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-09.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                    <ul className={`${brygada.className} text-sm flex justify-between`}>
                        <li className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[1.15rem] -ml-[0.125rem]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <p>
                                Rome, Italy
                            </p>
                        </li>
                        <li>2024</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
