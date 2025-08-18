import {TransitionLink} from "@/app/utils/TransitionLink";
import Image from "next/image";
import Navigation from "./navigation";

export function Header() {
    return (
        <header className="px-2 pt-2 bg-background sticky top-0 z-10">
            <div className="p-2 border-b-[1px] border-foreground flex justify-between items-start">
                <TransitionLink
                    key={"Home"}
                    href={"/"}
                >
                    <Image
                        src="/logo-monicavaras.svg"
                        width={500}
                        height={454}
                        alt="Monica Varas Logo"
                        className="w-16"
                    />
                </TransitionLink>
                <Navigation />
            </div>
        </header>
    );
}