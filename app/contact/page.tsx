"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
  {
    icon: <Github size={20} />,
    href: "https://github.com/davidculemann",
    label: "GitHub",
    handle: "davidculemann",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/david-culemann/",
    label: "LinkedIn",
    handle: "davidculemann",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:davidculemann@gmail.com",
    label: "Email",
    handle: "davidculemann@gmail.com",
  },
];

export default function Example() {
  return (
    <div className="bg-gradient-to-tl from-background/0 via-background to-background/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Card>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-border via-border/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-foreground group-hover:text-foreground group-hover:bg-background border-border bg-background group-hover:border-foreground drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-2xl text-foreground group-hover:text-foreground font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-muted-foreground group-hover:text-foreground/80">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
