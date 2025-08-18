import { Metadata } from "next";

import { Picture } from "@/app/components/picture";

export const metadata: Metadata = {
    description: "Expert wedding photographer specializing in capturing timeless, beautiful moments. Offering high-quality photography services tailored to your unique wedding day.",
}

export default async function Home() {
    const height = 1350;
    const width = 900;
    const aspectRatio = 0.6666;

    return (
        <main>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                <Picture src="/photos/wedding-photo-01.webp" width={width} height={height} aspectRatio={aspectRatio}/>
                <Picture src="/photos/wedding-photo-02.webp" width={width} height={height} aspectRatio={aspectRatio}/>
                <Picture src="/photos/wedding-photo-03.webp" width={width} height={height} aspectRatio={aspectRatio}/>
                <Picture src="/photos/wedding-photo-04.webp" width={width} height={height} aspectRatio={aspectRatio}/>
                <Picture src="/photos/wedding-photo-05.webp" width={width} height={height} aspectRatio={aspectRatio}/>
                <Picture src="/photos/wedding-photo-06.webp" width={width} height={height} aspectRatio={aspectRatio}/>
                <Picture src="/photos/wedding-photo-07.webp" width={width} height={height} aspectRatio={aspectRatio}/>
                <Picture src="/photos/wedding-photo-08.webp" width={width} height={height} aspectRatio={aspectRatio}/>
                <Picture src="/photos/wedding-photo-09.webp" width={width} height={height} aspectRatio={aspectRatio}/>
                <Picture src="/photos/wedding-photo-10.webp" width={width} height={height} aspectRatio={aspectRatio}/>
                <Picture src="/photos/wedding-photo-11.webp" width={width} height={height} aspectRatio={aspectRatio}/>
                <Picture src="/photos/wedding-photo-12.webp" width={width} height={height} aspectRatio={aspectRatio}/>
                <Picture src="/photos/wedding-photo-13.webp" width={width} height={height} aspectRatio={aspectRatio}/>
                <Picture src="/photos/wedding-photo-14.webp" width={width} height={height} aspectRatio={aspectRatio}/>
                <Picture src="/photos/wedding-photo-15.webp" width={width} height={height} aspectRatio={aspectRatio}/>
                <Picture src="/photos/wedding-photo-16.webp" width={width} height={height} aspectRatio={aspectRatio}/>
                <Picture src="/photos/wedding-photo-17.webp" width={width} height={height} aspectRatio={aspectRatio}/>
                <Picture src="/photos/wedding-photo-18.webp" width={width} height={height} aspectRatio={aspectRatio}/>
            </div>
        </main>
    );
}
