import {
  Key,
  Smartphone,
  Link,
  RefreshCw,
  EyeOff,
  Search,
  ShieldCheck,
  HardDrive,
  Users,
  Copy,
} from "lucide-react";

const tips = [
  {
    icon: Key,
    title: "Сложные и уникальные пароли",
    color: "#2196F3",
    bg: "rgba(33,150,243,0.1)",
    rule: "Правило 1",
    description: "Используйте пароли длиной от 12 символов с буквами разного регистра, цифрами и спецсимволами.",
    action: "💡 Используй менеджер паролей: Bitwarden, 1Password или встроенный в браузер",
  },
  {
    icon: Smartphone,
    title: "Двухфакторная аутентификация",
    color: "#4CAF50",
    bg: "rgba(76,175,80,0.1)",
    rule: "Правило 2",
    description: "Включите 2FA везде, где это возможно: ВКонтакте, Telegram, Steam, почта. Даже если пароль украдут — без второго фактора войти не смогут.",
    action: "💡 Используй приложение-аутентификатор (Google Authenticator), а не SMS",
  },
  {
    icon: Link,
    title: "Не открывай подозрительные ссылки",
    color: "#FF5722",
    bg: "rgba(255,87,34,0.1)",
    rule: "Правило 3",
    description: "Прежде чем кликнуть — наведи курсор и посмотри реальный URL. Если адрес незнакомый или странный — не переходи.",
    action: "💡 Проверяй домен: vkontakte.ru ≠ vkontakте.ru (замена букв кириллицей)",
  },
  {
    icon: RefreshCw,
    title: "Обновляй ПО и антивирус",
    color: "#9C27B0",
    bg: "rgba(156,39,176,0.1)",
    rule: "Правило 4",
    description: "Обновления закрывают уязвимости, через которые проникают вирусы. Устаревшая Windows или Android — открытая дверь для хакеров.",
    action: "💡 Включи автоматические обновления в настройках системы",
  },
  {
    icon: EyeOff,
    title: "Защити личную информацию",
    color: "#FF9800",
    bg: "rgba(255,152,0,0.1)",
    rule: "Правило 5",
    description: "Не публикуй в открытом доступе: адрес, номер школы, расписание, номер телефона, данные документов и место, где бываешь.",
    action: "💡 Закрой профиль ВКонтакте — пусть личное видят только друзья",
  },
  {
    icon: Search,
    title: "Проверяй адрес сайта",
    color: "#00BCD4",
    bg: "rgba(0,188,212,0.1)",
    rule: "Правило 6",
    description: "Перед вводом паролей и данных карты проверяй: есть ли HTTPS (замочек в браузере), правильно ли написан домен.",
    action: "💡 Настоящий сбербанк: sberbank.ru · Фейк: sberbank-online.net",
  },
  {
    icon: ShieldCheck,
    title: "VPN в публичном Wi-Fi",
    color: "#2196F3",
    bg: "rgba(33,150,243,0.1)",
    rule: "Правило 7",
    description: "Публичный Wi-Fi в кафе, торговых центрах и транспорте небезопасен. Данные могут перехватить. Используй VPN или мобильный интернет.",
    action: "💡 Не совершай банковские операции в публичных сетях без VPN",
  },
  {
    icon: HardDrive,
    title: "Резервные копии данных",
    color: "#4CAF50",
    bg: "rgba(76,175,80,0.1)",
    rule: "Правило 8",
    description: "Делай резервные копии важных файлов (фото, документы, проекты) в облако и на внешний носитель. Если вирус-шифровальщик атакует — ты не потеряешь данные.",
    action: "💡 Правило 3-2-1: 3 копии, 2 разных носителя, 1 вне дома (облако)",
  },
  {
    icon: Users,
    title: "Осторожность в соцсетях",
    color: "#FF5722",
    bg: "rgba(255,87,34,0.1)",
    rule: "Правило 9",
    description: "Не принимай заявки от незнакомцев и не верь в дружбу с теми, кто сразу предлагает деньги или просит помощи. Мошенники часто создают фейковые аккаунты.",
    action: "💡 Проверь страницу: давно ли создана, реальные ли фото (обратный поиск Google)",
  },
  {
    icon: Copy,
    title: "Уникальный пароль для каждого сайта",
    color: "#9C27B0",
    bg: "rgba(156,39,176,0.1)",
    rule: "Правило 10",
    description: "Если пароль утёк с одного сайта и он совпадает с паролем от почты или банка — хакеры автоматически проверят все популярные сервисы.",
    action: "💡 Используй менеджер паролей — он создаёт и хранит уникальные пароли автоматически",
  },
];

export function TipsSection() {
  return (
    <section
      id="tips"
      style={{
        background: "linear-gradient(180deg, #f0f7ff 0%, #e8f4fd 100%)",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(76,175,80,0.12)",
              border: "1px solid rgba(76,175,80,0.35)",
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
                color: "#2E7D32",
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Раздел 4 · Памятка
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
            10 золотых правил кибербезопасности
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
            Соблюдай эти правила каждый день — и твои данные будут в безопасности
          </p>
        </div>

        {/* Tips grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {tips.map((tip, i) => {
            const Icon = tip.icon;
            return (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  padding: 28,
                  boxShadow: "0 2px 16px rgba(15,27,76,0.07)",
                  border: "1px solid rgba(15,27,76,0.06)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(15,27,76,0.13)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(15,27,76,0.07)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Number watermark */}
                <div
                  style={{
                    position: "absolute",
                    top: -8,
                    right: 16,
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                    fontSize: 80,
                    color: `${tip.color}0D`,
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {i + 1}
                </div>

                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <div
                    style={{
                      background: tip.bg,
                      borderRadius: 12,
                      padding: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color={tip.color} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 11,
                        fontWeight: 600,
                        color: tip.color,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        marginBottom: 3,
                      }}
                    >
                      {tip.rule}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: 15,
                        color: "#0F1B4C",
                        lineHeight: 1.3,
                      }}
                    >
                      {tip.title}
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    color: "#4b5563",
                    lineHeight: 1.65,
                    marginBottom: 14,
                  }}
                >
                  {tip.description}
                </p>

                <div
                  style={{
                    background: `${tip.color}0D`,
                    borderLeft: `3px solid ${tip.color}`,
                    borderRadius: "0 8px 8px 0",
                    padding: "10px 14px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      color: "#374151",
                      lineHeight: 1.5,
                    }}
                  >
                    {tip.action}
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
