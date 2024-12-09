"use client";

import Giscus from "@giscus/react";

export default function Comments({ repositoryId, repositoryName }: { repositoryId?: string; repositoryName?: string }) {
    if (!repositoryName || !repositoryId) return;
    return (
        <div className="mx-auto max-w-5xl w-full px-6 pb-12">
            <Giscus
                id="comments"
                repo={repositoryName as `${string}/${string}`}
                repoId={repositoryId}
                category="Announcements"
                categoryId="DIC_kwDONZE1w84ClEkQ"
                mapping="pathname"
                term="Welcome to @giscus/react component!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="light"
                lang="en"
                loading="lazy"
            />
        </div>
    );
}
