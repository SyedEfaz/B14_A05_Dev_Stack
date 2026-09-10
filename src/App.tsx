import { useEffect, useRef, useState } from "react";

import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { MobileNavbar, Navbar } from "@/components/Navbar";
import { TechGrid } from "@/components/TechGrid";
import { Toast, type ToastMessage } from "@/components/Toast";
import { YourStackSidebar } from "@/components/YourStackSidebar";
import { getTechnologies } from "@/data/technologies";
import type { Technology } from "@/types/tech";

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [toastMessage, setToastMessage] = useState<ToastMessage | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    getTechnologies()
      .then((data) => {
        if (!cancelled) setTechnologies(data);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => setToastMessage(null), 2800);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const showToast = (message: string, type: ToastMessage["type"]) =>
    setToastMessage({ id: Date.now(), message, type });
  const handleAdd = (tech: Technology) => {
    if (selectedStack.some((item) => item.id === tech.id)) {
      showToast(`${tech.name} is already in your stack!`, "warning");
      return;
    }
    setSelectedStack((previous) => [...previous, tech]);
    showToast(`Added ${tech.name} to your stack!`, "success");
  };
  const handleRemove = (tech: Technology) => {
    setSelectedStack((previous) => previous.filter((item) => item.id !== tech.id));
    showToast(`Removed ${tech.name} from your stack.`, "info");
  };
  const handleRemoveAll = () => {
    setSelectedStack([]);
    showToast("Cleared all technologies from your stack.", "warning");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeLink={activeLink} onLinkClick={setActiveLink} isMobileMenuOpen={isMobileMenuOpen} onToggleMobileMenu={() => setIsMobileMenuOpen((open) => !open)} />
      <MobileNavbar isOpen={isMobileMenuOpen} activeLink={activeLink} onLinkClick={setActiveLink} onClose={() => setIsMobileMenuOpen(false)} />
      <main>
        <HeroBanner onExplore={() => gridRef.current?.scrollIntoView({ behavior: "smooth" })} />
        <section ref={gridRef} className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Explore the <span className="brand-gradient-text">Technologies</span></h2>
          <p className="mt-2 text-sm text-muted-foreground">Pick one technology per category to build your ideal stack.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            <div className="lg:col-span-3">{isLoading ? <LoadingSpinner /> : <TechGrid technologies={technologies} selectedStack={selectedStack} onAdd={handleAdd} />}</div>
            <div className="lg:col-span-1"><YourStackSidebar selectedStack={selectedStack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} /></div>
          </div>
        </section>
      </main>
      <Footer />
      {toastMessage && <Toast toast={toastMessage} onClose={() => setToastMessage(null)} />}
    </div>
  );
}
