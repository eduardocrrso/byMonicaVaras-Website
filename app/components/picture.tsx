"use client"

import Image from "next/image";
import * as motion from "motion/react-client";
import { useState } from "react";
import { rgba } from "motion";

const height = 1350;
const width = 1080;

export function Picture({ src }: { src: string }) {
    const [loading, setLoading] = useState(true);

    function handleLoading() {
        setLoading(false);
    }

    return (
        <motion.div
            initial={{ translateY: -8 }}
            whileInView={{ translateY: loading ? -4 : 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full flex flex-col aspect-[0.65]">
            <motion.div
                animate={{ backgroundColor: ["#000000", "#ffffff"] }}
                transition={{
                    duration: 1.2,
                    repeat: loading ? Infinity : 0,
                    repeatType: "mirror",
                    ease: "easeInOut"
                }}
                className="h-full flex flex-col">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: loading ? 0 : 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
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