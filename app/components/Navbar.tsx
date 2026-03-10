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
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
        scrolled ? "bg-[#0F1B4C]/97 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
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
        className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16"
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
          className="flex items-center gap-2.5 bg-none border-none cursor-pointer p-0"
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
            className="bg-[#2196F3] rounded-xl p-1.5 flex items-center justify-center"
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
            className="font-montserrat font-bold text-base text-white tracking-wide"
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
          className="hidden md:flex gap-1.5 items-center"
          style={{
            display: "flex",
            gap: 6,
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="bg-none border-none cursor-pointer text-white/85 font-inter text-sm font-medium py-1.5 px-3 rounded-lg transition-all hover:text-white hover:bg-[#2196F3]/2"
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
          className="md:hidden bg-none border-none cursor-pointer text-white p-1.5"
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
          className="md:hidden bg-[#0F1B4C]/98 border-t border-white/1 pt-4 pb-6 px-6 flex flex-col gap-1"
          style={{
            background: "rgba(15,27,76,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="bg-none border-none cursor-pointer text-white/85 font-inter text-sm font-medium py-2.5 px-3 rounded-lg text-left transition-all hover:text-white hover:bg-[#2196F3]/1"
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
