import Link from "next/link";
import { Brygada_1918 } from "next/font/google";

const brygada = Brygada_1918({
    weight: "400",
    subsets: ["latin"],
});

export function Footer() {
    return (
        <footer className="m-2">
            <div className="mb-2 p-2">
                <h3 className={`${brygada.className} text-lg`}>Follow</h3>
                <ul>
                    <Link
                        key={"Instagram"}
                        href={"https://www.instagram.com/by__monicavaras/"}
                        target="_blank"
                    >
                        <li className="underline">Instagram</li>
                    </Link>
                </ul>
                <br />
                <h3 className={`${brygada.className} text-lg`}>Email</h3>
                <ul>
                    <Link
                        key={"Instagram"}
                        href={"mailto:photo@bymonicavaras.com"}
                        target="_blank"
                    >
                        <li className="underline">photo@bymonicavaras.com</li>
                    </Link>
                </ul>
            </div>

            <div className="p-2 flex justify-between border-t-[1px] border-gray">
                <div>
                    <h3 className="text-gray text-sm">Legal</h3>
                    <ul className="text-gray text-xs underline">
                        <Link
                            key={"Terms & Conditions"}
                            href={"/terms-and-conditions"}
                        >
                            <li>Terms & Conditions</li>
                        </Link>
                        <Link
                            key={"Privacy Policy"}
                            href={"/privacy-policy"}
                        >
                            <li>Privacy Policy</li>
                        </Link>
                    </ul>
                </div>

                <div className="flex flex-col justify-end">
                    <p className="text-gray text-xs">Mónica Varas {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
}