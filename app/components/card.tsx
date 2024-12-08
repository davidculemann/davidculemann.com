"use client";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { PropsWithChildren } from "react";
import { useTheme } from "next-themes";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
    const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 100 });
    const { theme } = useTheme();

    function onMouseMove({ currentTarget, clientX, clientY }: any) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const maskImage = useMotionTemplate`radial-gradient(${
        theme === "dark" ? "180px" : "180px"
    } at ${mouseX}px ${mouseY}px, white 10%, rgba(255, 255, 255, 0.5) 30%, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div
            onMouseMove={onMouseMove}
            className="overflow-hidden relative duration-700 border rounded-xl 
                hover:bg-slate-500/[0.01] dark:hover:bg-zinc-800/10 
                group md:gap-8 
                hover:border-slate-300/30 dark:hover:border-zinc-400/50 
                border-zinc-300 dark:border-zinc-600"
        >
            <div className="pointer-events-none">
                <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br opacity-100 
                        via-slate-500/20 dark:via-zinc-100/10 
                        transition duration-1000 group-hover:opacity-50
                        z-0 dark:z-10"
                    style={style}
                />
                <motion.div
                    className="absolute inset-0 opacity-0 
                        bg-slate-400/30 dark:bg-zinc-900/10
                        mix-blend-overlay transition duration-1000 group-hover:opacity-100
                        z-0 dark:z-10"
                    style={style}
                />
            </div>

            <div className="h-full relative z-10 dark:z-0">{children}</div>
        </div>
    );
};
