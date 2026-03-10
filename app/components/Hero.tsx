import { Shield, Lock, AlertTriangle } from "lucide-react";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-[#0F1B4C] via-[#0d2060] to-[#0d1a4a] flex items-center justify-center relative overflow-hidden pt-24 pb-16 px-6 md:pt-28 md:pb-20 md:px-8 lg:px-12"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative circles */}
      <div
        className="hidden md:block absolute top-10 right-5 w-96 h-96 rounded-full pointer-events-none"
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
        className="hidden md:block absolute bottom-10 -left-5 w-80 h-80 rounded-full pointer-events-none"
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
        className="hidden md:block absolute top-20 right-12 opacity-15 rotate-15"
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
        className="hidden md:block absolute bottom-25 left-8 opacity-12 -rotate-10"
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
        className="max-w-4xl text-center relative z-10"
        style={{
          maxWidth: 900,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Shield icon */}
        <div
          className="inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#2196F3] to-[#1565C0] mx-auto mb-8 shadow-lg"
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
          className="inline-block bg-blue-500/15 border border-blue-400/4 rounded-full px-5 py-2 mb-6"
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
            className="font-semibold text-xs text-blue-300 tracking-wider uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "#64B5F6",
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            Индивидуальный проект · 9 класс · 2026
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
          className="inline-block bg-white/7 border border-white/15 rounded-lg p-4 md:p-6 mb-12"
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
            Щёголев Артём Денисович и Рогожников Пётр Леонидович
          </p>
        </div>

        {/* CTA buttons */}
        <div
          className="flex gap-4 justify-center flex-wrap"
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => handleScroll("#tips")}
            className="bg-gradient-to-br from-[#2196F3] to-[#1565C0] text-white border-none rounded-lg px-9 py-4 font-bold text-base cursor-pointer shadow-lg transition-transform hover:scale-105"
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
            className="bg-transparent text-white border-2 border-white/3 rounded-lg px-9 py-4 font-bold text-base cursor-pointer transition-all hover:border-[#2196F3] hover:bg-[#2196F3]/1 hover:scale-105"
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
          className="mt-15 flex flex-col items-center gap-2 opacity-50"
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
            className="font-inter text-xs text-white tracking-wider uppercase"
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
            className="w-0.5 h-10 bg-gradient-to-b from-white/5 to-transparent rounded-sm"
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