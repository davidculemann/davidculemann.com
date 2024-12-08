import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-background via-background/20 to-background">
            <nav className="my-16 animate-fade-in">
                <ul className="flex items-center justify-center gap-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm duration-500 text-muted-foreground hover:text-foreground"
                        >
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </nav>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-foreground/0 via-foreground/50 to-foreground/0" />
            <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
            <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-foreground cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
                david culemann
            </h1>

            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-foreground/0 via-foreground/50 to-foreground/0" />
            <div className="my-16 text-center animate-fade-in">
                <h2 className="text-sm text-muted-foreground px-4">
                    Senior Software Engineer at{" "}
                    <Link
                        target="_blank"
                        href="https://darktrace.com"
                        className="underline duration-500 hover:text-foreground"
                    >
                        Darktrace
                    </Link>{" "}
                    Working Primarily on Cloud Security.
                </h2>
            </div>
        </div>
    );
}
