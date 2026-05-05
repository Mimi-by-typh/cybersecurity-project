import {
  User,
  BookOpen,
  Target,
  CheckSquare,
  Layers,
  Lightbulb,
} from "lucide-react";

const passportData = [
  {
    icon: BookOpen,
    label: "Тема проекта",
    value:
      "Кибербезопасность в жизни современного подростка: угрозы 2026 года и правила защиты",
    color: "#2196F3",
    bg: "rgba(33,150,243,0.08)",
  },
  {
    icon: User,
    label: "Автор",
    value:
      "Тихон Рогожников",
    color: "#2196F3",
    bg: "rgba(33,150,243,0.08)",
  },
  {
    icon: Layers,
    label: "Класс / Год",
    value: "10 класс, 2026 учебный год",
    color: "#2196F3",
    bg: "rgba(33,150,243,0.08)",
  },
  {
    icon: Target,
    label: "Цель проекта",
    value:
      "Изучить актуальные киберугрозы 2026 года и разработать доступную памятку правил цифровой безопасности для подростков",
    color: "#FF5722",
    bg: "rgba(255,87,34,0.08)",
  },
  {
    icon: CheckSquare,
    label: "Задачи",
    value:
      "1) Изучить виды угроз; 2) Провести опрос среди одноклассников; 3) Создать памятку и интерактивный тест; 4) Оформить образовательный сайт",
    color: "#4CAF50",
    bg: "rgba(76,175,80,0.08)",
  },
  {
    icon: Lightbulb,
    label: "Актуальность",
    value:
      "Каждый второй подросток сталкивался с интернет-мошенничеством. В 2026 гг. угрозы с использованием ИИ резко возросли",
    color: "#FF5722",
    bg: "rgba(255,87,34,0.08)",
  },
];

export function PassportSection() {
  return (
    <section
      id="passport"
      style={{
        background: "#f8faff",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(33,150,243,0.1)",
              border: "1px solid rgba(33,150,243,0.3)",
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
                color: "#2196F3",
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Раздел 1
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(26px, 4vw, 42px)",
              color: "#0F1B4C",
              marginBottom: 12,
            }}
          >
            Паспорт проекта
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 17,
              color: "#6b7280",
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            Основные сведения об индивидуальном проекте
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {passportData.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: 28,
                  boxShadow: "0 2px 16px rgba(15,27,76,0.07)",
                  border: "1px solid rgba(15,27,76,0.06)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (
                    e.currentTarget as HTMLElement
                  ).style.boxShadow =
                    "0 8px 32px rgba(15,27,76,0.13)";
                  (
                    e.currentTarget as HTMLElement
                  ).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (
                    e.currentTarget as HTMLElement
                  ).style.boxShadow =
                    "0 2px 16px rgba(15,27,76,0.07)";
                  (
                    e.currentTarget as HTMLElement
                  ).style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{
                      background: item.bg,
                      borderRadius: 10,
                      padding: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={22} color={item.color} />
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      color: item.color,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    color: "#374151",
                    lineHeight: 1.65,
                  }}
                >
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
