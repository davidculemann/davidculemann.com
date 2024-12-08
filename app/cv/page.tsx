"use client";

import { useTheme } from "next-themes";
import { Navigation } from "../components/nav";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export default function CVPage() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-tl from-background/0 via-background to-background/0">
            <Navigation />
            <div className="container flex flex-col justify-center mx-auto h-screen w-full pt-24 px-4 lg:px-48 items-center">
                <iframe
                    src="/cv.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0"
                    className={cn(
                        "w-full h-full rounded-md max-w-screen-md",
                        mounted && theme === "dark" ? "[filter:invert(1)_hue-rotate(180deg)]" : ""
                    )}
                />
                <a
                    href="/cv.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-2 text-sm text-foreground/80 hover:text-foreground duration-500"
                >
                    <Download size={16} />
                    Download CV
                </a>
            </div>
        </div>
    );
}
