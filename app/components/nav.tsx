"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ModeToggle } from "./mode-toggle";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
          isIntersecting
            ? "bg-background/0 border-transparent"
            : "bg-background/500 border-border"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8 items-center">
            <Link
              href="/projects"
              className="duration-200 text-muted-foreground hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="duration-200 text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
            <ModeToggle />
          </div>

          <Link
            href="/"
            className="duration-200 text-foreground/80 hover:text-foreground"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};
