import { Redis } from "@upstash/redis";
import { allProjects } from "contentlayer/generated";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import ProfessionalPill from "../components/professional-pill";
import { Article } from "./article";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
    const views = (
        await redis.mget<number[]>(...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")))
    ).reduce((acc, v, i) => {
        acc[allProjects[i].slug] = v ?? 0;
        return acc;
    }, {} as Record<string, number>);

    const featured = allProjects.find((project) => project.slug === "lawhive")!;
    const top2 = allProjects.find((project) => project.slug === "easycv")!;
    const top3 = allProjects.find((project) => project.slug === "corpify")!;
    const sorted = allProjects
        .filter((p) => p.published)
        .filter((project) => project.slug !== featured.slug && project.slug !== top2.slug && project.slug !== top3.slug)
        .sort(
            (a, b) =>
                new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
                new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
        );

    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Projects</h2>
                    <p className="mt-4 text-muted-foreground">
                        Some of the projects are from my professional work, and some are personal projects.
                    </p>
                </div>
                <div className="w-full h-px bg-border" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
                    <Card>
                        <Link href={`/projects/${featured.slug}`}>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <div className="flex items-center justify-between gap-2">
                                    <span className="flex items-center gap-2">
                                        <ProfessionalPill professional={featured.professional} />
                                        <div className="text-xs text-foreground">
                                            {featured.date ? (
                                                <time dateTime={new Date(featured.date).toISOString()}>
                                                    {Intl.DateTimeFormat(undefined, {
                                                        dateStyle: "medium",
                                                    }).format(new Date(featured.date))}
                                                </time>
                                            ) : (
                                                <span>SOON</span>
                                            )}
                                        </div>
                                    </span>
                                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <Eye className="w-4 h-4" />{" "}
                                        {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                                            views[featured.slug] ?? 0
                                        )}
                                    </span>
                                </div>

                                <h2
                                    id="featured-post"
                                    className="mt-4 text-3xl font-bold text-foreground group-hover:text-foreground sm:text-4xl font-display flex gap-4"
                                >
                                    {featured.title}
                                    {featured.logo && (
                                        <Image
                                            src={`/images/${featured.logo}`}
                                            alt="Lawhive"
                                            width={44}
                                            height={44}
                                        />
                                    )}
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-muted-foreground group-hover:text-foreground/80">
                                    {featured.description}
                                </p>
                                <div className="absolute bottom-4 md:bottom-8">
                                    <p className="hidden text-foreground/80 hover:text-foreground lg:block">
                                        Read more <span aria-hidden="true">&rarr;</span>
                                    </p>
                                </div>
                            </article>
                        </Link>
                    </Card>

                    <div className="flex flex-col w-full gap-8 mx-auto pt-8 border-t border-border lg:mx-0 lg:border-t-0 lg:pt-0">
                        {[top2, top3].map((project) => (
                            <Card key={project.slug}>
                                <Article project={project} views={views[project.slug] ?? 0} />
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-border" />

                <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
                    <div className="grid grid-cols-1 gap-4">
                        {sorted
                            .filter((_, i) => i % 3 === 0)
                            .map((project) => (
                                <Card key={project.slug}>
                                    <Article project={project} views={views[project.slug] ?? 0} />
                                </Card>
                            ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {sorted
                            .filter((_, i) => i % 3 === 1)
                            .map((project) => (
                                <Card key={project.slug}>
                                    <Article project={project} views={views[project.slug] ?? 0} />
                                </Card>
                            ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {sorted
                            .filter((_, i) => i % 3 === 2)
                            .map((project) => (
                                <Card key={project.slug}>
                                    <Article project={project} views={views[project.slug] ?? 0} />
                                </Card>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
