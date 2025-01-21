import Image from "next/image";
import Navigation from "./navigation";
import Link from "next/link";

export function Header() {
    return (
        <header className="m-2">
            <div className="p-2 border-b-[1px] border-foreground flex justify-between items-start">
                <Link
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
                </Link>
                <Navigation />
            </div>
        </header>
    );
}