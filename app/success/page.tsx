import Link from "next/link";

export default function Success() {
    return (
        <>
            <div>{"I got your message! I'll get back to you as soon as possible."}</div>
            <div className="mt-4">{"Feel free to look at some "}<Link href={"/"} className="underline">{"other photoshoots"}</Link>{" in the meanwhle."}</div>
        </>
    );
}