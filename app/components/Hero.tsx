import { Shield, Lock, AlertTriangle } from "lucide-react";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0F1B4C 0%, #0d2060 40%, #0a3080 70%, #0d1a4a 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "100px 24px 60px",
      }}
    >
      {/* Background decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(33,150,243,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(33,150,243,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating icons */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "12%",
          opacity: 0.15,
          transform: "rotate(15deg)",
        }}
      >
        <Lock size={80} color="#2196F3" />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "8%",
          opacity: 0.12,
          transform: "rotate(-10deg)",
        }}
      >
        <AlertTriangle size={64} color="#FF5722" />
      </div>

      {/* Main content */}
      <div
        style={{
          maxWidth: 900,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Shield icon */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, #2196F3, #1565C0)",
            marginBottom: 32,
            boxShadow:
              "0 0 60px rgba(33,150,243,0.4), 0 0 120px rgba(33,150,243,0.15)",
          }}
        >
          <Shield size={52} color="#fff" />
        </div>

        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            background: "rgba(33,150,243,0.15)",
            border: "1px solid rgba(33,150,243,0.4)",
            borderRadius: 100,
            padding: "6px 20px",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "#64B5F6",
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            Индивидуальный проект · 10 класс · 2026
          </span>
        </div>

        {/* Main title */}
        <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(32px, 6vw, 68px)",
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: 12,
            letterSpacing: -1,
          }}
        >
          Кибербезопасность
        </h1>
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(18px, 3vw, 32px)",
            color: "#2196F3",
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          в жизни современного подростка
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(15px, 2vw, 19px)",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
            maxWidth: 660,
            margin: "0 auto 40px",
          }}
        >
          Угрозы 2026 года и правила защиты. Интерактивный
          образовательный проект по информатике с тестом на
          киберграмотность.
        </p>

        {/* Author */}
        <div
          style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 12,
            padding: "12px 28px",
            marginBottom: 48,
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: "rgba(255,255,255,0.6)",
              marginBottom: 2,
            }}
          >
            Автор проекта
          </p>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 18,
              color: "#fff",
            }}
          >
            Тихон Рогожников
          </p>
        </div>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => handleScroll("#tips")}
            style={{
              background:
                "linear-gradient(135deg, #2196F3, #1565C0)",
              color: "#fff",
              border: "none",
              borderRadius: 12,
              padding: "16px 36px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(33,150,243,0.4)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 30px rgba(33,150,243,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 4px 20px rgba(33,150,243,0.4)";
            }}
          >
            📋 Перейти к памятке
          </button>
          <button
            onClick={() => handleScroll("#quiz")}
            style={{
              background: "transparent",
              color: "#fff",
              border: "2px solid rgba(255,255,255,0.3)",
              borderRadius: 12,
              padding: "16px 36px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
              transition:
                "border-color 0.2s, background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (
                e.currentTarget as HTMLElement
              ).style.borderColor = "#2196F3";
              (
                e.currentTarget as HTMLElement
              ).style.background = "rgba(33,150,243,0.1)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (
                e.currentTarget as HTMLElement
              ).style.borderColor = "rgba(255,255,255,0.3)";
              (
                e.currentTarget as HTMLElement
              ).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            🧠 Начать тест
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: 60,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            opacity: 0.5,
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              color: "#fff",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Прокрутите вниз
          </span>
          <div
            style={{
              width: 2,
              height: 40,
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
              borderRadius: 2,
            }}
          />
        </div>
      </div>
    </section>
  );
}
