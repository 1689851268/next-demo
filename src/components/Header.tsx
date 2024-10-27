"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const linkData = [
    { href: "/performance", text: "Performance" },
    { href: "/reliability", text: "Reliability" },
    { href: "/security", text: "Security" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <div className="absolute w-full z-10">
            <div className="flex justify-between container mx-auto text-white p-8 items-center">
                <Link href="/" className="text-3xl font-bold">
                    Home
                </Link>
                <div className="text-xl space-x-4">
                    {linkData.map(({ href, text }) => (
                        <Link key={href} href={href} className={pathname === href ? "underline" : ""}>
                            {text}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
