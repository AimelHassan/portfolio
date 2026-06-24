import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FounderProof } from "./components/FounderProof";
import { ShortVersion } from "./components/ShortVersion";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { TechStack } from "./components/TechStack";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { GridBackground } from "./components/GridBackground";

export default function App() {
  return (
    <div className="relative z-10 selection:bg-zinc-200 selection:text-black">
      <GridBackground />
      <Navbar />
      <main className="w-full max-w-3xl mx-auto px-5 sm:px-6 lg:px-0 pt-4">
        <Hero />
        <FounderProof />
        <ShortVersion />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
