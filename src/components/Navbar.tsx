import logoAsset from "@/assets/logo-text.png";
import { Menu, X } from "lucide-react";

export const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

function Brand({ className = "h-7" }: { className?: string }) {
return <img src={logoAsset} alt="Dev Stack" className={className} />;
}

function AuthButtons() {
  return (
    <div className="flex items-center gap-3">
      <button className="text-sm font-medium text-foreground/80 hover:text-foreground">
        Sign In
      </button>
      <button className="btn-gradient rounded-full px-5 py-2 text-sm font-semibold">Sign Up</button>
    </div>
  );
}

type NavbarProps = {
  activeLink: string;
  onLinkClick: (link: string) => void;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
};

export function Navbar({
  activeLink,
  onLinkClick,
  isMobileMenuOpen,
  onToggleMobileMenu,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      {/* Desktop */}
      <nav className="mx-auto hidden w-full max-w-7xl items-center justify-between px-8 py-4 md:flex">
        <Brand />
        <ul className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => onLinkClick(link)}
                className={
                  link === activeLink
                    ? "text-sm font-medium text-brand"
                    : "text-sm font-medium text-muted-foreground hover:text-foreground"
                }
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
        <AuthButtons />
      </nav>

      {/* Mobile */}
      <nav className="flex items-center justify-between gap-3 px-4 py-3 md:hidden">
        <button
          onClick={onToggleMobileMenu}
          aria-label="Toggle menu"
          className="rounded-md p-2 text-foreground hover:bg-muted"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <Brand className="h-6" />
        <div className="flex items-center gap-2">
          <button className="text-xs font-medium text-foreground/80">Sign In</button>
          <button className="btn-gradient rounded-full px-3.5 py-1.5 text-xs font-semibold">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}

type MobileNavbarProps = {
  isOpen: boolean;
  activeLink: string;
  onLinkClick: (link: string) => void;
  onClose: () => void;
};

export function MobileNavbar({ isOpen, activeLink, onLinkClick, onClose }: MobileNavbarProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="absolute inset-0 bg-foreground/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className="absolute left-0 top-0 h-full w-72 bg-background p-5 shadow-xl">
        <div className="flex items-center justify-between">
          <Brand className="h-6" />
          <button onClick={onClose} aria-label="Close menu" className="rounded-md p-2 hover:bg-muted">
            <X size={18} />
          </button>
        </div>
        <ul className="mt-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => {
                  onLinkClick(link);
                  onClose();
                }}
                className={
                  link === activeLink
                    ? "w-full rounded-lg bg-muted px-3 py-2.5 text-left text-sm font-semibold text-brand"
                    : "w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-muted-foreground hover:bg-muted"
                }
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
