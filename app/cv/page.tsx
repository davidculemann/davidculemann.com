"use client";

import { Navigation } from "../components/nav";

export default function CVPage() {
    return (
        <div className="relative min-h-screen bg-gradient-to-tl from-background/0 via-background to-background/0">
            <Navigation />
            <div className="container flex justify-center mx-auto pt-24 pb-16">
                <div className="w-full h-[calc(100vh-12rem)] max-w-4xl bg-background/50 backdrop-blur-sm rounded-lg shadow-lg p-4"></div>
            </div>
        </div>
    );
}
