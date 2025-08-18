'use client'

// Refactor this "header". Ideally both mobile and desktop should get some of this props from its parent element *Fix
// Also links do not have a unique prop key. Flag was disabled to build on netlify *Fix

import {CloseButton, Popover, PopoverButton, PopoverPanel} from '@headlessui/react'
import {TransitionLink} from "@/app/utils/TransitionLink";
import {usePathname} from "next/navigation";
import clsx from 'clsx';
import Image from 'next/image';

export default function MenuMobile() {
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
        <div className="flex gap-12">
            <Popover>
                <PopoverButton
                    className="flex text-3xl mt-2 text-foreground focus:outline-none data-[active]:text-foreground data-[hover]:text-foreground data-[focus]:outline-1 data-[focus]:outline-foreground">
                    <div className='mt-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                    </div>
                    Menu
                </PopoverButton>
                <PopoverPanel
                    transition
                    anchor={undefined}
                    /* Changed bg-background to bg-transparent to debug */
                    className="absolute inset-0 w-screen h-screen flex flex-col justify-center gap-6 p-4 divide-y divide-white/5 rounded-sm bg-background transition duration-500 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:opacity-0 z-40"
                >
                    <PopoverButton
                        className={"absolute top-4 left-4"}
                    >
                        <Image
                            src="/logo-monicavaras.svg"
                            width={500}
                            height={454}
                            alt="Monica Varas Logo"
                            className="w-16"
                        />
                    </PopoverButton>

                    <PopoverButton
                        className={"absolute top-6 right-6"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>

                    </PopoverButton>
                    {links.map((link) => {
                        return (
                            <div className={clsx(
                                "menu-item sm:h-auto overflow-clip flex justify-center items-center gap-2",
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
                                <TransitionLink href={link.href}>
                                    <CloseButton className={clsx(
                                        "text-5xl transition-colors duration-500",
                                        {
                                            "text-foreground": pathname === link.href,
                                            "text-gray": pathname !== link.href,
                                        },
                                    )}>
                                        {link.name}
                                    </CloseButton>
                                </TransitionLink>
                            </div>
                        );
                    })}
                </PopoverPanel>
            </Popover>
        </div>
    );
}