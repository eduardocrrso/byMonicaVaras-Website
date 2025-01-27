import Link from "next/link";

export default function Success() {
    return (
        <>
            <div className="mt-16 text-center">{"I got your message! I'll get back to you as soon as possible."}</div>
            <div className="mt-4 text-center">{"Feel free to look at some "}<Link href={"/"} className="underline">{"other photoshoots"}</Link>{" in the meanwhile."}</div>
        </>
    );
}