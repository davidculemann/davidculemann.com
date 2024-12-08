"use client";

import { useTheme } from "next-themes";
import { Navigation } from "../components/nav";
import { Download, FileIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";

export default function CVPage() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-tl from-background/0 via-background to-background/0">
            <Navigation />
            <div className="container flex flex-col gap-4 justify-center mx-auto h-screen w-full pt-24 pb-12 px-4 lg:px-48 items-center">
                <Button asChild>
                    <a href="/cv-david-culemann.pdf" download className="flex items-center gap-2 px-4 py-2">
                        <Download size={16} />
                        Download CV
                    </a>
                </Button>
                <iframe
                    src="/cv-david-culemann.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0"
                    className={cn(
                        "w-full h-full rounded-md max-w-screen-md",
                        mounted && theme === "dark" ? "[filter:invert(1)_hue-rotate(180deg)]" : ""
                    )}
                />
            </div>
        </div>
    );
}
