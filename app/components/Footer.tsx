import { Shield, Heart } from "lucide-react";

const navLinks = [
  { href: "#passport", label: "Паспорт проекта" },
  {
    href: "#cybersecurity",
    label: "Что такое кибербезопасность?",
  },
  { href: "#threats", label: "Угрозы 2026" },
  { href: "#tips", label: "Памятка" },
  { href: "#quiz", label: "Тест" },
  { href: "#research", label: "Исследование" },
  { href: "#resources", label: "Ресурсы" },
];

export function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#060e27",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "60px 24px 32px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 40,
            flexWrap: "wrap",
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 320 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  background: "#2196F3",
                  borderRadius: 10,
                  padding: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Shield size={24} color="#fff" />
              </div>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: 20,
                  color: "#fff",
                }}
              >
                КиберБезопасность
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              Образовательный проект по информатике для 9
              класса. Тема: угрозы 2026 года и правила защиты в
              цифровом мире.
            </p>
            <div
              style={{
                display: "inline-block",
                background: "rgba(33,150,243,0.1)",
                border: "1px solid rgba(33,150,243,0.25)",
                borderRadius: 10,
                padding: "8px 16px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: 2,
                }}
              >
                Авторы проекта
              </p>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                Щёголев Артём Денисович и Рогожников Пётр
                Леонидович
              </p>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                letterSpacing: 1.5,
                marginBottom: 16,
              }}
            >
              Разделы
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleScroll(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "rgba(255,255,255,0.55)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    textAlign: "left",
                    padding: 0,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((
                      e.currentTarget as HTMLElement
                    ).style.color = "#2196F3")
                  }
                  onMouseLeave={(e) =>
                    ((
                      e.currentTarget as HTMLElement
                    ).style.color = "rgba(255,255,255,0.55)")
                  }
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project info */}
          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                letterSpacing: 1.5,
                marginBottom: 16,
              }}
            >
              О проекте
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {[
                {
                  label: "Тип",
                  value: "Индивидуальный проект",
                },
                {
                  label: "Предмет",
                  value: "Информатика и ИКТ",
                },
                { label: "Класс", value: "9 класс" },
                { label: "Год", value: "2026" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.35)",
                      minWidth: 70,
                    }}
                  >
                    {item.label}:
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.65)",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.07)",
            marginBottom: 24,
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.3)",
            }}
          >
            © 2026 · Проект выполнен учеником 10 класса ·
            Тихон Рогожников
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.3)",
              }}
            >
              Сделано с
            </span>
            <Heart size={13} color="#FF5722" fill="#FF5722" />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.3)",
              }}
            >
              для безопасного интернета
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
