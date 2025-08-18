"use client";
import Link, {LinkProps} from "next/link";
import React from "react";
import {useRouter} from "next/navigation";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode,
    href: string,
    className?: string,
    id?: string
}

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const TransitionLink = ({
                                   children,
                                   href,
                                   id,
                                   ...props
                               }: TransitionLinkProps) => {
    const router = useRouter();

    const handleTransition = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();

        const body = document.getElementById("page-animation-element");
        const footer = document.getElementById("footer");

        body?.classList.add("page-transition");
        footer?.classList.add("page-transition");

        await sleep(300);

        router.push(href);

        await sleep(300);

        body?.classList.remove("page-transition");
        footer?.classList.remove("page-transition");
    };

    return (
        <Link
            onClick={handleTransition}
            href={href}
            {...props}
        >
            {children}
        </Link>
    )
};