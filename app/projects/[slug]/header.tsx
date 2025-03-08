"use client";
import { ArrowLeft, Eye, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
    project: {
        url?: string;
        title: string;
        description: string;
        logo?: string;
        repository?: string;
        professional?: boolean;
    };

    views: number;
};
export const Header: React.FC<Props> = ({ project, views }) => {
    const ref = useRef<HTMLElement>(null);
    const [isIntersecting, setIntersecting] = useState(true);

    const links: { label: string; href: string }[] = [];
    if (project.repository) {
        links.push({
            label: "GitHub",
            href: project.repository,
        });
    }
    if (project.url) {
        links.push({
            label: "Website",
            href: project.url,
        });
    }

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <header ref={ref} className="relative isolate overflow-hidden bg-zinc-900">
            <div
                className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
                    isIntersecting ? "bg-zinc-900/0 border-transparent" : "bg-zinc-900/500 border-zinc-800"
                }`}
            >
                <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
                    <div className="flex justify-between gap-8">
                        <span
                            title="View counter for this page"
                            className="duration-200 hover:font-medium flex items-center gap-1 text-zinc-400 hover:text-zinc-100"
                        >
                            <Eye className="w-5 h-5" />{" "}
                            {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
                        </span>
                        <Link target="_blank" href="https://github.com/davidculemann">
                            <Github className="w-6 h-6 duration-200 hover:font-medium text-zinc-400 hover:text-zinc-100" />
                        </Link>
                    </div>

                    <Link href="/projects" className="duration-200 hover:font-medium text-zinc-400 hover:text-zinc-100">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                </div>
            </div>
            <div className="container mx-auto relative isolate overflow-hidden py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <span className="flex items-center gap-6 justify-center">
                            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl font-display">
                                {project.title}
                            </h1>
                            {project.logo && (
                                <Image src={`/images/${project.logo}`} alt={project.title} width={68} height={68} />
                            )}
                        </span>
                        <p className="mt-6 text-lg leading-8 text-zinc-400">{project.description}</p>
                    </div>

                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-zinc-100 sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                                <Link target="_blank" key={link.label} href={link.href}>
                                    {link.label} <span aria-hidden="true">&rarr;</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
