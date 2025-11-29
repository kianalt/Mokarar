import { useTheme } from "./components/hooks/useTheme";

import bgLight from "./assets/bc-light.jpeg";
import bgDark from "./assets/bc-dark.jpeg";

import Header from "./components/Header";
import About from "./components/About";
import ContactSection from "./components/ContactSection";
import HoldingsTable from "./components/HoldingsTable";
import Footer from "./components/Footer";

export default function App() {
  const { dark } = useTheme();

  return (
    <div className="relative min-h-dvh text-ink dark:text-lighttext">
      {/* Background image changes by theme */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url(${dark ? bgDark : bgLight})`,
        }}
        aria-hidden
      />

      {/* Overlay changes by theme */}
      <div
        className={`
          fixed inset-0 -z-10 transition-all duration-700
          ${dark ? "bg-black/60" : "bg-white/20"}
          [mask-image:radial-gradient(1200px_800px_at_50%_30%,black,transparent)]
        `}
        aria-hidden
      />

      <div className="relative z-0 flex min-h-dvh flex-col">
        <Header />
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
