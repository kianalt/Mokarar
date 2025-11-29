import { useEffect } from "react";
import { useTheme } from "./components/hooks/useTheme";

import bgLight from "./assets/bc-light.jpeg";
import bgDark from "./assets/bc-dark.jpeg";

import Header from "./components/Header";
import About from "./components/About";
import ContactSection from "./components/ContactSection";
import HoldingsTable from "./components/HoldingsTable";
import Footer from "./components/Footer";

export default function App() {
  const { dark, setDark } = useTheme(); // ✅ get setDark too

  // Preload images once so toggling is instant
  useEffect(() => {
    const img1 = new Image();
    img1.src = bgLight;
    const img2 = new Image();
    img2.src = bgDark;
  }, []);

  return (
    <div className="relative min-h-dvh text-ink dark:text-lighttext">
      {/* Background crossfade */}
      <div className="fixed inset-0 -z-20">
        <div
          className={`
            absolute inset-0 bg-cover bg-center bg-no-repeat
            transition-opacity duration-500
            ${dark ? "opacity-0" : "opacity-100"}
          `}
          style={{ backgroundImage: `url(${bgLight})` }}
          aria-hidden
        />
        <div
          className={`
            absolute inset-0 bg-cover bg-center bg-no-repeat
            transition-opacity duration-500
            ${dark ? "opacity-100" : "opacity-0"}
          `}
          style={{ backgroundImage: `url(${bgDark})` }}
          aria-hidden
        />
      </div>

      {/* Overlay also crossfades nicely */}
      <div
        className={`
          fixed inset-0 -z-10 transition-colors duration-500
          ${dark ? "bg-black/60" : "bg-white/20"}
          [mask-image:radial-gradient(1200px_800px_at_50%_30%,black,transparent)]
        `}
        aria-hidden
      />

      <div className="relative z-0 flex min-h-dvh flex-col">
        {/* ✅ pass shared theme state to Header */}
        <Header dark={dark} setDark={setDark} />

        <main className="flex-1 pt-20">
          <HoldingsTable />
        </main>
        <About />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
