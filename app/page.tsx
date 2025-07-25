import { Brygada_1918 } from "next/font/google";
import { Metadata } from "next";

import { Picture } from "@/app/components/picture";

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
                <Picture src="/photos/wedding-photo-10.webp" />

                <Picture src="/photos/wedding-photo-11.webp" />

                <Picture src="/photos/wedding-photo-12.webp" />

                <Picture src="/photos/wedding-photo-13.webp" />

                <Picture src="/photos/wedding-photo-14.webp" />

                <Picture src="/photos/wedding-photo-15.webp" />

                <Picture src="/photos/wedding-photo-16.webp" />

                <Picture src="/photos/wedding-photo-01.webp" />

                <Picture src="/photos/wedding-photo-02.webp" />

                <Picture src="/photos/wedding-photo-03.webp" />

                <Picture src="/photos/wedding-photo-04.webp" />

                <Picture src="/photos/wedding-photo-05.webp" />

                <Picture src="/photos/wedding-photo-06.webp" />

                <Picture src="/photos/wedding-photo-07.webp" />

                <Picture src="/photos/wedding-photo-08.webp" />

                <Picture src="/photos/wedding-photo-09.webp" />
            </div>
        </main>
    );
}
