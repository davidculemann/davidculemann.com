"use client";

import { Navigation } from "../components/nav";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import Link from "next/link";

export default function About() {
    return (
        <div className="bg-gradient-to-tl from-background/0 via-background to-background/0">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <Card className="max-w-4xl mx-auto border-none shadow-none">
                    <CardHeader className="text-center">
                        <div className="flex justify-center mb-4">
                            <Avatar className="w-32 h-32">
                                <AvatarImage src="/images/me.jpg" alt="Profile picture" />
                                <AvatarFallback>DC</AvatarFallback>
                            </Avatar>
                        </div>
                        <CardTitle className="text-3xl font-bold">David Culemann</CardTitle>
                        <CardDescription className="text-xl">Frontend/Full Stack Developer</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <section className="mb-8 flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
                            <p className="text-muted-foreground">
                                Hello 👋, I'm David, a full stack developer with a bias towards frontend. I am currently
                                senior software engineer at{" "}
                                <Link
                                    href="https://www.darktrace.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline decoration-primary underline-offset-4 hover:text-primary transition-colors"
                                >
                                    Darktrace
                                </Link>
                                , where I lead UI development on{" "}
                                <Link
                                    href="/projects/darktrace-cloud"
                                    className="underline decoration-primary underline-offset-4 hover:text-primary transition-colors"
                                >
                                    Darktrace /CLOUD
                                </Link>
                                . Before that, I was founding engineer at{" "}
                                <Link
                                    href="https://www.darktrace.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline decoration-primary underline-offset-4 hover:text-primary transition-colors"
                                >
                                    Carno
                                </Link>
                                , where I was working towards building heat-pump installation software to drive domestic
                                heating decarbonisation.
                            </p>
                            <p className="text-muted-foreground">
                                I love building apps in my free time, you can find some featured projects I've worked on
                                in the{" "}
                                <Link
                                    href="/projects"
                                    className="underline decoration-primary underline-offset-4 hover:text-primary transition-colors"
                                >
                                    projects
                                </Link>{" "}
                                page. You can also leave a comment on each project with the embedded GitHub discussions
                                powered by Giscus if you have any questions or feedback.
                            </p>
                            <p className="text-muted-foreground">
                                Outside of coding, I'm a big fan of watching{" "}
                                <Link
                                    href="https://letterboxd.com/davidculemann/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline decoration-primary underline-offset-4 hover:text-primary transition-colors"
                                >
                                    movies
                                </Link>
                                , cycling, bouldering, and cooking.
                            </p>
                        </section>
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Stack</h2>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "React",
                                    "TypeScript",
                                    "JavaScript",
                                    "Remix",
                                    "Next.js",
                                    "React Query",
                                    "Redux + Zustand",
                                    "Cytoscape",
                                    "CSS",
                                    "Tailwind",
                                    "Shadcn",
                                    "Supabase",
                                    "Firebase",
                                    "Gitlab CI",
                                    "Stripe",
                                ].map((skill) => (
                                    <Badge key={skill} variant="secondary">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
