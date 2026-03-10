import { useState } from "react";
import {
  Brain,
  Video,
  MessageCircleWarning,
  Bug,
  UserX,
  AlertTriangle,
  Gamepad2,
  ChevronDown,
} from "lucide-react";

const threats = [
  {
    icon: Brain,
    title: "Фишинг с использованием ИИ",
    level: "Очень высокая",
    levelColor: "#FF5722",
    badge: "🆕 Новая угроза",
    description:
      "В 2026 году мошенники используют искусственный интеллект для создания гиперперсонализированных фишинговых писем. ИИ анализирует ваши соцсети и пишет письма, которые выглядят как от друзей или родственников.",
    example:
      "Пример: Ты получаешь письмо «от» своего одноклассника Саши с просьбой проголосовать за него в конкурсе — и переходишь по поддельной ссылке, которая крадёт твой аккаунт ВКонтакте.",
    tips: ["Всегда проверяй отправителя письма", "Не переходи по ссылкам в письмах — лучше открой сайт вручную"],
  },
  {
    icon: Video,
    title: "Дипфейк-звонки",
    level: "Высокая",
    levelColor: "#FF5722",
    badge: "🤖 ИИ-угроза",
    description:
      "Мошенники клонируют голос и внешность реальных людей с помощью ИИ и совершают видеозвонки. Жертва думает, что разговаривает с близким человеком в беде.",
    example:
      "Пример: В 2025 году школьнице позвонила «мама» (дипфейк), сказала, что попала в аварию и срочно нужны деньги. Девочка перевела накопленные 15 000 руб. мошенникам.",
    tips: ["Установи кодовое слово с семьёй для проверки", "При подозрении — перезвони сам по известному номеру"],
  },
  {
    icon: MessageCircleWarning,
    title: "Сексторшн (Sextortion)",
    level: "Высокая",
    levelColor: "#FF5722",
    badge: "⚠️ Опасно",
    description:
      "Вымогательство с угрозой публикации интимных фото или видео. Мошенники могут создавать поддельные материалы с помощью дипфейков без реальных фото жертвы.",
    example:
      "Пример: Незнакомец в соцсети присылает «твоё» компрометирующее фото (созданное ИИ) и требует деньги, угрожая разослать его контактам.",
    tips: ["Никогда не отправляй интимные фото незнакомцам", "Если получил угрозу — сразу обратись в полицию (102)"],
  },
  {
    icon: Bug,
    title: "Вредоносное ПО",
    level: "Высокая",
    levelColor: "#FF9800",
    badge: "🦠 Классика",
    description:
      "Вирусы, трояны, шифровальщики (ransomware) и шпионские программы. В 2026 году особую угрозу представляют стилеры — программы, которые тайно крадут пароли и данные карт.",
    example:
      "Пример: Скачал «бесплатную» игру со стороннего сайта — а вместе с ней установился стилер, который украл все пароли из браузера и данные Steam-аккаунта.",
    tips: ["Скачивай программы только с официальных сайтов", "Используй антивирус и не отключай его"],
  },
  {
    icon: UserX,
    title: "Социальная инженерия",
    level: "Средняя",
    levelColor: "#FF9800",
    badge: "🎭 Манипуляция",
    description:
      "Психологические манипуляции для получения конфиденциальной информации. Мошенники представляются сотрудниками банка, техподдержки, полиции или даже учителями.",
    example:
      "Пример: Звонит «сотрудник Сбербанка», говорит, что твою карту взломали, и просит назвать CVV-код и код из SMS для «защиты».",
    tips: ["Банки никогда не просят CVV и коды из SMS", "Положи трубку и позвони в банк сам"],
  },
  {
    icon: AlertTriangle,
    title: "Вовлечение в преступления",
    level: "Высокая",
    levelColor: "#FF5722",
    badge: "🚨 Уголовная ответственность",
    description:
      "Мошенники вербуют подростков как «дропов» — посредников для вывода краденых денег или курьеров для незаконных товаров. Подростки несут уголовную ответственность с 16 лет.",
    example:
      "Пример: «Лёгкий заработок» — получи перевод на карту и сними наличные за 10%. Это отмывание денег, за которое грозит до 7 лет лишения свободы.",
    tips: ["Не соглашайся на «лёгкий заработок» через свою карту", "Сообщи родителям о подобных предложениях"],
  },
  {
    icon: MessageCircleWarning,
    title: "Кибербуллинг",
    level: "Средняя",
    levelColor: "#FF9800",
    badge: "💔 Психологический вред",
    description:
      "Травля, угрозы и унижения в интернете. В 2026 году к традиционному буллингу добавились дипфейк-мемы и анонимные атаки через стикеры в Telegram.",
    example:
      "Пример: Одноклассники создали фейковый аккаунт с твоим именем и публикуют унизительные посты, приписывая их тебе.",
    tips: ["Сохраняй скриншоты — это доказательства", "Обратись к учителю, родителям или на линию помощи 8-800-2000-122"],
  },
  {
    icon: Gamepad2,
    title: "Мошенничество в играх",
    level: "Средняя",
    levelColor: "#FF9800",
    badge: "🎮 Геймеры в зоне риска",
    description:
      "Кража игровых аккаунтов и предметов, поддельные сайты обмена скинов, фейковые «бесплатные» V-баксы и монеты. Особый риск — фишинговые Steam/Minecraft сайты.",
    example:
      "Пример: Сайт предлагает «бесплатные скины» в Fortnite — нужно только войти через Steam. Ты вводишь логин и пароль, и теряешь аккаунт с дорогими предметами.",
    tips: ["Входи в игровые сервисы только через официальные сайты", "Включи двухфакторную аутентификацию на Steam/Epic"],
  },
];

function ThreatCard({ threat, index }: { threat: typeof threats[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = threat.icon;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 2px 16px rgba(15,27,76,0.07)",
        border: `1px solid ${open ? threat.levelColor + "44" : "rgba(15,27,76,0.06)"}`,
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          gap: 16,
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {/* Number + icon */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, flex: 1, minWidth: 0 }}>
          <div
            style={{
              background: `${threat.levelColor}15`,
              borderRadius: 12,
              padding: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Icon size={24} color={threat.levelColor} />
          </div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#0F1B4C",
                }}
              >
                {index + 1}. {threat.title}
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#fff",
                  background: threat.levelColor,
                  borderRadius: 100,
                  padding: "2px 10px",
                  whiteSpace: "nowrap",
                }}
              >
                {threat.badge}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: threat.levelColor,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: threat.levelColor,
                  fontWeight: 600,
                }}
              >
                Угроза: {threat.level}
              </span>
            </div>
          </div>
        </div>

        <ChevronDown
          size={20}
          color="#9ca3af"
          style={{
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}
        />
      </button>

      {/* Expanded content */}
      {open && (
        <div
          style={{
            padding: "0 24px 24px",
            borderTop: "1px solid rgba(15,27,76,0.06)",
          }}
        >
          <div style={{ paddingTop: 20 }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "#374151",
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              {threat.description}
            </p>

            {/* Example */}
            <div
              style={{
                background: "rgba(255,87,34,0.06)",
                border: "1px solid rgba(255,87,34,0.2)",
                borderRadius: 12,
                padding: 16,
                marginBottom: 16,
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: "#b45309",
                  lineHeight: 1.6,
                }}
              >
                {threat.example}
              </p>
            </div>

            {/* Tips */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {threat.tips.map((tip, j) => (
                <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "#4CAF50",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>✓</span>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      color: "#374151",
                      lineHeight: 1.5,
                    }}
                  >
                    {tip}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function InfoSection() {
  return (
    <section
      id="threats"
      style={{
        background: "#fff",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,87,34,0.1)",
              border: "1px solid rgba(255,87,34,0.3)",
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
                color: "#FF5722",
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Раздел 3
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
            Актуальные угрозы 2026 года
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 17,
              color: "#6b7280",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Нажмите на любую угрозу, чтобы узнать подробности, реальный пример и советы по защите
          </p>
        </div>

        {/* Threats accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {threats.map((threat, i) => (
            <ThreatCard key={i} threat={threat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
