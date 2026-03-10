import { ExternalLink, Globe, BookOpen, Video, Shield, Phone, CheckCircle2 } from "lucide-react";

const resources = [
  {
    icon: Globe,
    title: "Лига безопасного интернета",
    description: "Ведущая российская организация по защите детей в интернете. Линия помощи, советы, горячая линия.",
    url: "https://ligainternet.ru",
    tag: "Организация",
    color: "#2196F3",
  },
  {
    icon: BookOpen,
    title: "Роскомнадзор — Детям",
    description: "Официальная информация о безопасности в сети для детей и подростков от регулятора.",
    url: "https://rkn.gov.ru/kids",
    tag: "Государство",
    color: "#4CAF50",
  },
  {
    icon: Shield,
    title: "Kaspersky — Для детей",
    description: "Образовательные статьи, советы по защите и бесплатные инструменты от Лаборатории Касперского.",
    url: "https://www.kaspersky.ru/safe-kids",
    tag: "Антивирус",
    color: "#FF5722",
  },
  {
    icon: Video,
    title: "Урок цифры",
    description: "Всероссийский образовательный проект. Интерактивные уроки по кибербезопасности и ИИ для школьников.",
    url: "https://урокцифры.рф",
    tag: "Образование",
    color: "#9C27B0",
  },
  {
    icon: Phone,
    title: "Телефон доверия для детей",
    description: "Единый бесплатный номер психологической помощи детям и подросткам: 8-800-2000-122",
    url: "tel:88002000122",
    tag: "Помощь 24/7",
    color: "#FF9800",
  },
  {
    icon: Globe,
    title: "Safe.internet.ru",
    description: "Российский портал безопасного интернета: инструменты проверки сайтов, родительский контроль.",
    url: "https://safe.internet.ru",
    tag: "Инструменты",
    color: "#2196F3",
  },
];

const conclusions = [
  "Кибербезопасность — это не сложная наука, а набор простых правил, которые защищают тебя каждый день",
  "В 2026 году главные угрозы связаны с ИИ: дипфейки и персонализированный фишинг стали реальностью",
  "Два действия уже сегодня сделают тебя намного безопаснее: включи 2FA и создай сложные пароли",
  "Кибербезопасность — ответственность каждого. Расскажи друзьям и родителям об этих правилах",
];

export function Resources() {
  return (
    <section
      id="resources"
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
              Раздел 7 · Заключение
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
            Выводы и полезные ресурсы
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 17,
              color: "#6b7280",
              maxWidth: 540,
              margin: "0 auto",
            }}
          >
            Главные итоги проекта и проверенные источники для дальнейшего изучения
          </p>
        </div>

        {/* Conclusions */}
        <div
          style={{
            background: "linear-gradient(135deg, #0F1B4C 0%, #1565C0 100%)",
            borderRadius: 20,
            padding: "40px 40px",
            marginBottom: 48,
          }}
        >
          <h3
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: "#fff",
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span>🎯</span> Главные выводы проекта
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {conclusions.map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "rgba(76,175,80,0.2)",
                    border: "2px solid #4CAF50",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <CheckCircle2 size={15} color="#4CAF50" />
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.65,
                  }}
                >
                  {c}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources grid */}
        <h3
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: 22,
            color: "#0F1B4C",
            marginBottom: 24,
          }}
        >
          📚 Полезные источники
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
            gap: 20,
          }}
        >
          {resources.map((resource, i) => {
            const Icon = resource.icon;
            return (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: 24,
                  boxShadow: "0 2px 16px rgba(15,27,76,0.07)",
                  border: "1px solid rgba(15,27,76,0.06)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(15,27,76,0.12)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(15,27,76,0.07)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div
                    style={{
                      background: `${resource.color}15`,
                      borderRadius: 12,
                      padding: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color={resource.color} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                      <span
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 700,
                          fontSize: 15,
                          color: "#0F1B4C",
                        }}
                      >
                        {resource.title}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 11,
                          fontWeight: 600,
                          color: resource.color,
                          background: `${resource.color}15`,
                          borderRadius: 100,
                          padding: "2px 8px",
                        }}
                      >
                        {resource.tag}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 14,
                        color: "#6b7280",
                        lineHeight: 1.55,
                        marginBottom: 12,
                      }}
                    >
                      {resource.description}
                    </p>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        color: resource.color,
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 13,
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                    >
                      Открыть ресурс
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
