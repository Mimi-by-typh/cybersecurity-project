import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { PassportSection } from "./components/PassportSection";
import { CIASection } from "./components/CIASection";
import { InfoSection } from "./components/InfoSection";
import { TipsSection } from "./components/TipsSection";
import { Quiz } from "./components/Quiz";
import { ResearchSection } from "./components/ResearchSection";
import { Resources } from "./components/Resources";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        scrollBehavior: "smooth",
      }}
    >
      <Navbar />
      <Hero />
      <PassportSection />
      <CIASection />
      <InfoSection />
      <TipsSection />
      <Quiz />
      <ResearchSection />
      <Resources />
      <Footer />
    </div>
  );
}
