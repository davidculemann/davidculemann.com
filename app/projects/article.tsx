"use client";

import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye } from "lucide-react";
import Image from "next/image";
import ProfessionalPill from "../components/professional-pill";

type Props = {
    project: Project;
    views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
    return (
        <Link href={`/projects/${project.slug}`}>
            <article className="p-4 md:p-8">
                <div className="flex justify-between gap-2 items-center">
                    <span className="flex items-center gap-2">
                        <ProfessionalPill professional={project.professional} />
                        <span className="text-xs duration-1000 text-foreground/80 group-hover:text-foreground group-hover:border-foreground drop-shadow-orange">
                            {project.date ? (
                                <time dateTime={new Date(project.date).toISOString()}>
                                    {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                                        new Date(project.date)
                                    )}
                                </time>
                            ) : (
                                <span>SOON</span>
                            )}
                        </span>
                    </span>

                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                        <Eye className="w-4 h-4" /> {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
                    </span>
                </div>
                <span className="flex items-center gap-2">
                    <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-foreground/80 group-hover:text-foreground font-display">
                        {project.title}
                    </h2>
                    {project.logo && (
                        <Image src={`/images/${project.logo}`} alt={project.title} width={24} height={24} />
                    )}
                </span>
                <p className="z-20 mt-4 text-sm duration-1000 text-muted-foreground group-hover:text-foreground/80">
                    {project.description}
                </p>
            </article>
        </Link>
    );
};
