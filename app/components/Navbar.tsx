import { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#passport", label: "Паспорт" },
  { href: "#cybersecurity", label: "Что это?" },
  { href: "#threats", label: "Угрозы" },
  { href: "#tips", label: "Памятка" },
  { href: "#quiz", label: "Тест" },
  { href: "#research", label: "Исследование" },
  { href: "#resources", label: "Ресурсы" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(15,27,76,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 0.3s, box-shadow 0.3s",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <div
            style={{
              background: "#2196F3",
              borderRadius: 10,
              padding: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Shield size={22} color="#fff" />
          </div>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              color: "#fff",
              letterSpacing: 0.5,
            }}
          >
            КиберБез
          </span>
        </button>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            gap: 6,
            alignItems: "center",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgba(255,255,255,0.85)",
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                padding: "6px 12px",
                borderRadius: 8,
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#fff";
                (e.target as HTMLElement).style.background = "rgba(33,150,243,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "rgba(255,255,255,0.85)";
                (e.target as HTMLElement).style.background = "none";
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            padding: 6,
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(15,27,76,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
          className="md:hidden"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgba(255,255,255,0.85)",
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                padding: "10px 12px",
                borderRadius: 8,
                textAlign: "left",
                transition: "color 0.2s, background 0.2s",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
