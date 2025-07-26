import Image from "next/image";
import * as motion from "motion/react-client";

const height = 1350;
const width = 1080;

export function Picture({ src }: { src: string }) {
    return (
        <motion.div initial={{ translateY: -8, opacity: 0}}
                    whileInView={{ translateY: 0, opacity: 1}}
                    viewport={{ once: true }}
                    className="h-full flex flex-col">
            <Image
                src={ src }
                alt="Wedding photo"
                height={height}
                width={width}
                className="h-full object-cover"
            />
        </motion.div>
    );
}