import React from "react";
import { cn } from "../lib/utils";

export default function ProfessionalPill({ professional }: { professional?: boolean }) {
    return (
        <span
            className={cn(
                "flex h-5 items-center rounded-full px-2 text-xs font-medium",
                professional ? "bg-blue-200 dark:bg-blue-800" : "bg-green-200 dark:bg-green-800"
            )}
        >
            {professional ? "Professional" : "Personal"}
        </span>
    );
}
