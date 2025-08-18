'use client'

// Refactor rhis "header". Ideally both mobile and desktop should get some of this props from its parent element *Fix
// Also links do not have a unique prop key. Flag was disabled to build on netlify *Fix

import {TransitionLink} from "@/app/utils/TransitionLink";
import {usePathname} from "next/navigation";
import clsx from 'clsx';

export default function MenuDesktop() {
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

    const pathname = usePathname();

    return (
        <div className="flex gap-12 mt-2">
            {links.map((link) => {
                return (
                    <div className={clsx(
                        "menu-item sm:h-auto overflow-clip flex justify-end items-center gap-2",
                        {
                            "h-auto current": pathname === link.href,
                        },
                    )}>
                        <span className={clsx(
                            "w-2 h-2 block bg-background transition-colors duration-500",
                            {
                                "bg-foreground": pathname === link.href
                            },
                        )}>
                        </span>
                        <TransitionLink
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                "text-3xl transition-colors duration-500",
                                {
                                    "text-foreground": pathname === link.href,
                                    "text-gray": pathname !== link.href,
                                },
                            )}
                            id={clsx(
                                {
                                    "home": link.href === "/",
                                    "about": link.href === "/about",
                                    "contact": link.href === "/contact",
                                },
                            )}>
                            <p key={link.name}>{link.name}</p>
                        </TransitionLink>
                        <span>
                        </span>
                    </div>
                );
            })}
        </div>
    );
}