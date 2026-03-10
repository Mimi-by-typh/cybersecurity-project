import { useState } from "react";
import { CheckCircle2, XCircle, Trophy, RotateCcw, ChevronRight } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  category: string;
}

const questions: Question[] = [
  {
    category: "Фишинг",
    question: "Что такое фишинг с использованием ИИ?",
    options: [
      "Рыбалка с помощью компьютера",
      "Автоматически созданные персонализированные письма-ловушки, использующие данные из ваших соцсетей",
      "Антивирусная программа",
      "Способ защиты данных",
    ],
    correct: 1,
    explanation:
      "В 2026 году ИИ анализирует профили жертв в соцсетях и создаёт убедительные письма, якобы от знакомых. Всегда проверяй отправителя и не переходи по ссылкам из писем.",
  },
  {
    category: "Пароли",
    question: "Какой из этих паролей наиболее надёжный?",
    options: [
      "12345678",
      "artemshegolev2009",
      "7xK#mP!vQ2&nR",
      "qwerty123",
    ],
    correct: 2,
    explanation:
      "Надёжный пароль содержит буквы разного регистра, цифры и специальные символы, не содержит личных данных и имеет длину от 12 символов. Используй менеджер паролей!",
  },
  {
    category: "Аутентификация",
    question: "Что такое двухфакторная аутентификация (2FA)?",
    options: [
      "Использование двух паролей подряд",
      "Дополнительный уровень защиты: кроме пароля нужен одноразовый код",
      "Вход с двух устройств одновременно",
      "Регистрация двух аккаунтов",
    ],
    correct: 1,
    explanation:
      "2FA означает, что даже зная твой пароль, злоумышленник не войдёт без второго фактора — кода из SMS или приложения. Включи 2FA везде: ВКонтакте, Telegram, Steam.",
  },
  {
    category: "Дипфейки",
    question: "Тебе звонит «мама» по видео, говорит, что попала в аварию и срочно нужны деньги. Что делать?",
    options: [
      "Немедленно перевести деньги — мама в опасности",
      "Положить трубку и позвонить маме на её реальный номер телефона",
      "Отправить деньги через чужой кошелёк",
      "Рассказать об этом друзьям в соцсетях",
    ],
    correct: 1,
    explanation:
      "Это классический дипфейк-звонок. Мошенники клонируют голос и лицо. Всегда проверяй через отдельный звонок. Придумай с семьёй кодовое слово для подтверждения личности.",
  },
  {
    category: "Wi-Fi",
    question: "Почему опасно использовать публичный Wi-Fi в кафе для банковских операций?",
    options: [
      "Wi-Fi в кафе работает медленно",
      "Злоумышленник может перехватить твой трафик и похитить данные",
      "Банки блокируют соединение из кафе",
      "Это безопасно, если использовать HTTPS",
    ],
    correct: 1,
    explanation:
      "В публичной сети злоумышленник может провести атаку «человек посередине» и перехватить данные. Для безопасности используй VPN или мобильный интернет при финансовых операциях.",
  },
  {
    category: "Социальная инженерия",
    question: "Тебе звонит «сотрудник Сбербанка» и говорит, что твою карту взломали. Он просит назвать код из SMS. Как поступить?",
    options: [
      "Назвать код — ведь он сотрудник банка",
      "Положить трубку, позвонить в банк самостоятельно по номеру на карте",
      "Назвать только последние 4 цифры карты",
      "Попросить его прислать официальное письмо",
    ],
    correct: 1,
    explanation:
      "Настоящий банк никогда не спрашивает коды из SMS и CVV. Это социальная инженерия. Всегда клади трубку и сам звони на официальный номер банка, указанный на карте или сайте.",
  },
  {
    category: "Вредоносное ПО",
    question: "Ты хочешь сыграть в игру. Где безопаснее всего её скачать?",
    options: [
      "С первого попавшегося сайта — там всегда быстрее",
      "Со страницы «скачать бесплатно» в поиске",
      "Только с официального сайта разработчика или магазина (Steam, App Store, Google Play)",
      "С торрента — там всегда без вирусов",
    ],
    correct: 2,
    explanation:
      "Сторонние сайты часто распространяют игры со встроенными стилерами и троянами. Официальные магазины проверяют приложения. Всегда скачивай только из доверенных источников.",
  },
  {
    category: "Личные данные",
    question: "Что из перечисленного НЕ следует публиковать в открытых соцсетях?",
    options: [
      "Фотографии с друзьями",
      "Своё мнение о книгах",
      "Точный домашний адрес и расписание твоих поездок",
      "Смешные мемы",
    ],
    correct: 2,
    explanation:
      "Публикация адреса и расписания позволяет злоумышленникам знать, когда ты дома, а когда нет. Персональные данные (адрес, номер телефона, документы) не должны быть в публичном доступе.",
  },
  {
    category: "Игры",
    question: "Сайт предлагает бесплатные скины в Fortnite — нужно войти через Steam. Что делать?",
    options: [
      "Войти — бесплатные скины заманчивы",
      "Войти, если сайт выглядит красиво",
      "Закрыть сайт — это фишинг для кражи аккаунта Steam",
      "Ввести данные, но сразу потом сменить пароль",
    ],
    correct: 2,
    explanation:
      "Это классический фишинг геймеров. Сайт имитирует страницу Steam, но краёт логин и пароль. Никогда не вводи данные Steam на сторонних сайтах. Включи 2FA в Steam Guard.",
  },
  {
    category: "Кибербуллинг",
    question: "Что делать, если тебя травят в интернете (кибербуллинг)?",
    options: [
      "Отвечать агрессивно в ответ",
      "Молчать — само пройдёт",
      "Заблокировать обидчика, сохранить скриншоты как доказательства и рассказать взрослым",
      "Удалить все свои аккаунты",
    ],
    correct: 2,
    explanation:
      "Главное — не оставаться один на один с проблемой. Сохрани доказательства (скриншоты), заблокируй обидчика, расскажи родителям или классному руководителю. Можно позвонить на линию помощи 8-800-2000-122 (бесплатно).",
  },
];

const getScoreData = (score: number, total: number) => {
  const pct = (score / total) * 100;
  if (pct >= 90) return { emoji: "🏆", title: "Эксперт по кибербезопасности!", color: "#4CAF50", bg: "rgba(76,175,80,0.1)", text: "Отличный результат! Ты отлично знаешь правила цифровой безопасности." };
  if (pct >= 70) return { emoji: "🛡️", title: "Хороший уровень!", color: "#2196F3", bg: "rgba(33,150,243,0.1)", text: "Ты хорошо разбираешься в кибербезопасности. Повтори несколько тем для уверенности." };
  if (pct >= 50) return { emoji: "📚", title: "Нужно учиться!", color: "#FF9800", bg: "rgba(255,152,0,0.1)", text: "Базовые знания есть, но есть пробелы. Прочитай раздел «Угрозы» и «Памятка»." };
  return { emoji: "⚠️", title: "Высокий риск!", color: "#FF5722", bg: "rgba(255,87,34,0.1)", text: "Твои знания о кибербезопасности пока недостаточны. Внимательно изучи все разделы!" };
};

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const handleAnswer = (index: number) => {
    if (answered) return;
    setSelectedAnswer(index);
    setAnswered(true);
    const correct = index === questions[currentQuestion].correct;
    if (correct) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, correct]);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((c) => c + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + (answered ? 1 : 0)) / questions.length) * 100;

  if (showResult) {
    const data = getScoreData(score, questions.length);
    return (
      <section
        id="quiz"
        style={{
          background: "#0F1B4C",
          padding: "96px 24px",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div
            style={{
              background: "#fff",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            {/* Result header */}
            <div
              style={{
                background: data.bg,
                padding: "40px 40px 32px",
                textAlign: "center",
                borderBottom: "1px solid rgba(15,27,76,0.08)",
              }}
            >
              <div style={{ fontSize: 64, marginBottom: 12 }}>{data.emoji}</div>
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: 26,
                  color: "#0F1B4C",
                  marginBottom: 8,
                }}
              >
                {data.title}
              </h3>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "baseline",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                    fontSize: 56,
                    color: data.color,
                  }}
                >
                  {score}
                </span>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: 28,
                    color: "#9ca3af",
                  }}
                >
                  / {questions.length}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  color: "#4b5563",
                  lineHeight: 1.6,
                  maxWidth: 460,
                  margin: "0 auto",
                }}
              >
                {data.text}
              </p>
            </div>

            {/* Answer review */}
            <div style={{ padding: "28px 40px" }}>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#9ca3af",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 16,
                }}
              >
                Ваши ответы:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                {answers.map((correct, i) => (
                  <div
                    key={i}
                    title={questions[i].category}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: correct ? "rgba(76,175,80,0.1)" : "rgba(255,87,34,0.1)",
                      border: `2px solid ${correct ? "#4CAF50" : "#FF5722"}`,
                    }}
                  >
                    {correct ? (
                      <CheckCircle2 size={18} color="#4CAF50" />
                    ) : (
                      <XCircle size={18} color="#FF5722" />
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={resetQuiz}
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #0F1B4C, #1a2d6e)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 12,
                  padding: "16px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.9")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                <RotateCcw size={18} />
                Пройти тест заново
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="quiz"
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
          top: "30%",
          right: "-5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(33,150,243,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
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
              Раздел 5 · Тест
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
            🧠 Тест на киберграмотность
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 17,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            10 вопросов · Проверь свои знания
          </p>
        </div>

        {/* Quiz card */}
        <div
          style={{
            background: "#fff",
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          {/* Progress bar */}
          <div style={{ height: 5, background: "#f3f4f6" }}>
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #2196F3, #4CAF50)",
                transition: "width 0.4s ease",
              }}
            />
          </div>

          {/* Question header */}
          <div
            style={{
              padding: "28px 32px 24px",
              borderBottom: "1px solid rgba(15,27,76,0.07)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  background: "rgba(33,150,243,0.1)",
                  borderRadius: 8,
                  padding: "4px 14px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    color: "#2196F3",
                  }}
                >
                  {question.category}
                </span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: "#9ca3af",
                }}
              >
                Вопрос {currentQuestion + 1} из {questions.length}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Trophy size={16} color="#4CAF50" />
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    color: "#4CAF50",
                  }}
                >
                  {score}
                </span>
              </div>
            </div>
          </div>

          {/* Question body */}
          <div style={{ padding: "28px 32px 32px" }}>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(16px, 2.5vw, 20px)",
                color: "#0F1B4C",
                lineHeight: 1.5,
                marginBottom: 24,
              }}
            >
              {question.question}
            </p>

            {/* Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
              {question.options.map((option, index) => {
                let bg = "#fff";
                let border = "2px solid #e5e7eb";
                let textColor = "#374151";
                let showCheck = false;
                let showX = false;

                if (answered) {
                  if (index === question.correct) {
                    bg = "rgba(76,175,80,0.08)";
                    border = "2px solid #4CAF50";
                    textColor = "#166534";
                    showCheck = true;
                  } else if (index === selectedAnswer) {
                    bg = "rgba(255,87,34,0.08)";
                    border = "2px solid #FF5722";
                    textColor = "#991b1b";
                    showX = true;
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={answered}
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      background: bg,
                      border,
                      borderRadius: 12,
                      cursor: answered ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      textAlign: "left",
                      transition: "border-color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (!answered) {
                        (e.currentTarget as HTMLElement).style.borderColor = "#2196F3";
                        (e.currentTarget as HTMLElement).style.background = "rgba(33,150,243,0.04)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!answered) {
                        (e.currentTarget as HTMLElement).style.borderColor = "#e5e7eb";
                        (e.currentTarget as HTMLElement).style.background = "#fff";
                      }
                    }}
                  >
                    {/* Letter badge */}
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: answered && index === question.correct
                          ? "#4CAF50"
                          : answered && index === selectedAnswer
                          ? "#FF5722"
                          : "rgba(15,27,76,0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "background 0.2s",
                      }}
                    >
                      {showCheck ? (
                        <CheckCircle2 size={16} color="#fff" />
                      ) : showX ? (
                        <XCircle size={16} color="#fff" />
                      ) : (
                        <span
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 700,
                            fontSize: 13,
                            color: "#6b7280",
                          }}
                        >
                          {String.fromCharCode(65 + index)}
                        </span>
                      )}
                    </div>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 15,
                        color: textColor,
                        lineHeight: 1.4,
                      }}
                    >
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {answered && (
              <div
                style={{
                  background: "rgba(33,150,243,0.06)",
                  border: "1px solid rgba(33,150,243,0.2)",
                  borderRadius: 12,
                  padding: "14px 18px",
                  marginBottom: 20,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    color: "#1d4ed8",
                    lineHeight: 1.65,
                  }}
                >
                  <strong>📚 Объяснение:</strong> {question.explanation}
                </p>
              </div>
            )}

            {/* Next button */}
            {answered && (
              <button
                onClick={handleNext}
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #0F1B4C, #1a2d6e)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 12,
                  padding: "16px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.9")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                {currentQuestion < questions.length - 1 ? (
                  <>Следующий вопрос <ChevronRight size={18} /></>
                ) : (
                  <>Показать результат <Trophy size={18} /></>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
