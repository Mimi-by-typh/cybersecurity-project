import { Eye, Lock, Wifi } from "lucide-react";

const cia = [
  {
    icon: Eye,
    letter: "C",
    title: "Конфиденциальность",
    subtitle: "Confidentiality",
    description:
      "Информация доступна только тем, кто имеет на это право. Ваши личные данные, переписка и пароли должны оставаться приватными.",
    example: "📱 Никто не может читать ваши личные сообщения без вашего разрешения",
    color: "#2196F3",
    bg: "linear-gradient(135deg, #1565C0 0%, #2196F3 100%)",
  },
  {
    icon: Lock,
    letter: "I",
    title: "Целостность",
    subtitle: "Integrity",
    description:
      "Данные не были изменены или подделаны без авторизации. Информация должна быть точной и достоверной.",
    example: "📄 Банковский перевод пришёл именно в той сумме, которую вы отправили",
    color: "#4CAF50",
    bg: "linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)",
  },
  {
    icon: Wifi,
    letter: "A",
    title: "Доступность",
    subtitle: "Availability",
    description:
      "Авторизованные пользователи получают доступ к информации в нужный момент. Сервисы работают без перебоев.",
    example: "🌐 Сайт школы доступен круглосуточно, а не заблокирован хакерами",
    color: "#FF9800",
    bg: "linear-gradient(135deg, #E65100 0%, #FF9800 100%)",
  },
];

export function CIASection() {
  return (
    <section
      id="cybersecurity"
      style={{
        background: "#0F1B4C",
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(33,150,243,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(33,150,243,0.15)",
              border: "1px solid rgba(33,150,243,0.4)",
              borderRadius: 100,
              padding: "5px 18px",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: "#64B5F6",
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Раздел 2
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(26px, 4vw, 42px)",
              color: "#fff",
              marginBottom: 12,
            }}
          >
            Что такое кибербезопасность?
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 17,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 600,
              margin: "0 auto 20px",
            }}
          >
            Это защита компьютерных систем, сетей и данных от кражи, повреждения и несанкционированного доступа.
          </p>
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: "10px 24px",
            }}
          >
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: "#2196F3",
              }}
            >
              Три ключевых принципа — модель CIA
            </span>
          </div>
        </div>

        {/* CIA Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
          }}
        >
          {cia.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 20,
                  padding: 32,
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.borderColor = item.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                {/* Big letter background */}
                <div
                  style={{
                    position: "absolute",
                    top: -10,
                    right: 20,
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                    fontSize: 100,
                    color: "rgba(255,255,255,0.04)",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {item.letter}
                </div>

                {/* Icon */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 60,
                    height: 60,
                    borderRadius: 16,
                    background: item.bg,
                    marginBottom: 20,
                    boxShadow: `0 4px 20px ${item.color}33`,
                  }}
                >
                  <Icon size={28} color="#fff" />
                </div>

                {/* Letter badge */}
                <div style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 900,
                      fontSize: 28,
                      color: item.color,
                    }}
                  >
                    {item.letter}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: 18,
                        color: "#fff",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12,
                        color: item.color,
                        fontWeight: 500,
                        letterSpacing: 0.5,
                      }}
                    >
                      {item.subtitle}
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.65,
                    marginBottom: 16,
                  }}
                >
                  {item.description}
                </p>

                <div
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderLeft: `3px solid ${item.color}`,
                    borderRadius: "0 8px 8px 0",
                    padding: "10px 14px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.example}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
