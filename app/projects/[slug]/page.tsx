import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
import Comments from "@/app/components/comments";
import type { Metadata } from "next";

export const revalidate = 60;

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const project = allProjects.find((p) => p.slug === params?.slug);

    if (!project) {
        return {};
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            type: "article",
            url: `https://davidculemann.com/projects/${project.slug}`,
            ...(project.date && { publishedTime: new Date(project.date).toISOString() }),
        },
        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: project.description,
        },
    };
}

const redis = Redis.fromEnv();
export async function generateStaticParams(): Promise<Props["params"][]> {
    return allProjects
        .filter((p) => p.published)
        .map((p) =>
            Promise.resolve({
                slug: p.slug,
            })
        );
}

export default async function PostPage(props: Props) {
    const params = await props.params;
    const slug = params?.slug;
    const project = allProjects.find((project) => project.slug === slug);

    if (!project) {
        notFound();
    }

    const views = (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

    return (
        <div className="bg-zinc-50 min-h-screen">
            <Header project={project} views={views} />
            <ReportView slug={project.slug} />

            <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
                <Mdx code={project.body.code} />
            </article>
            <Comments repositoryName={project.repositoryName} repositoryId={project.repositoryId} />
        </div>
    );
}
