import { Hero } from "@/components/hero-section";
import { NavigationBar } from "@/components/navigation-bar";
import { Skills } from "@/components/skill-section";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="mt-10">
      <NavigationBar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
