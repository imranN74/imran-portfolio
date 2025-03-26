"use client";

import { Hero } from "@/components/hero-section";
import { NavigationBar } from "@/components/navigation-bar";
import { Skills } from "@/components/skill-section";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="">
      <NavigationBar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
