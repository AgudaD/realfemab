import AboutSection from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
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
