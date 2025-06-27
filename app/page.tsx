import Image from "next/image";
import { Brygada_1918 } from "next/font/google";
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
                        src={"/photos/wedding-photo-10.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-11.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-12.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-13.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-14.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-15.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-16.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-01.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-02.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-03.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-04.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-05.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-06.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-07.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-08.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                </div>

                <div className="h-full flex flex-col">
                    <Image
                        src={"/photos/wedding-photo-09.webp"}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                    />
                </div>
            </div>
        </main>
    );
}
