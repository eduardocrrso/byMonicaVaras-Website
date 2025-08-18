"use client"

import Image from "next/image";
import * as motion from "motion/react-client";
import {useState} from "react";

export function Picture({
                            src,
                            width,
                            height,
                            aspectRatio
                        }:
                        {
                            src: string,
                            width: number,
                            height: number,
                            aspectRatio: number
                        }) {
    const [loading, setLoading] = useState(true);

    function handleLoading() {
        setLoading(false);
    }

    let containerClassName = "h-full flex flex-col aspect-[" + String(aspectRatio) + "]"

    return (
        // Every Picture is contained in a parent "size div" to keep AR
        // next child div sets background color
        // next child div sets and animates image opacity on image loading
        // last child is the image which calls the code for image loading animations
        <motion.div
            initial={{translateY: -6}}
            whileInView={{translateY: loading ? -6 : 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className={containerClassName}
        >
            <motion.div
                className="h-full flex flex-col bg-[#CDC8BA]"
                animate={{opacity: loading ? [1, 0.5, 1] : 1}}
                transition={{
                    duration: 1.2,
                    repeat: loading ? Infinity : 0
                }}>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: loading ? 0 : 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="h-full flex flex-col">
                    <Image
                        src={src}
                        alt="Wedding photo"
                        height={height}
                        width={width}
                        className="h-full object-cover"
                        onLoad={handleLoading}
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}