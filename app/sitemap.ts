import { allProjects } from "contentlayer/generated";

export default async function sitemap() {
    const baseUrl = "https://davidculemann.com";

    const projects = allProjects
        .filter((project) => project.published)
        .map((project) => ({
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: project.date ? new Date(project.date) : new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        }));

    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.5,
        },
    ];

    return [...staticPages, ...projects];
}
