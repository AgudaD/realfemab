import AboutSection from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import MainSection from "@/components/sectionOne";
import ServicesStrip from "@/components/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <MainSection />
      <AboutSection />
      <ServicesStrip />
      <Projects />
    </div>
  );
}
