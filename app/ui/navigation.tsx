'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

export default function Navigation() {
    const links = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'About',
            href: '/about',
        },
        {
            name: 'Contact',
            href: '/contact',
        },
    ];

    return (
        <ul className="mt-2 text-right flex flex-col space-y-3">
            {links.map((link) => {
                const pathname = usePathname();

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "text-3xl text-gray",
                            {
                                "text-foreground": pathname === link.href,
                            },
                        )}
                    >
                        <li>{link.name}</li>
                    </Link>
                );
            })}
        </ul>
    );
}