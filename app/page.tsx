import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
<section className="relative w-full h-screen overflow-hidden m-0 p-0">
  <Hero />

        <Hero />
  </section>
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
