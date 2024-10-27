import Header from "@/components/Header";
import React from "react";

export default function HeroLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
