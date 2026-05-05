import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const surveyBefore = [
  { name: "Использую\n2FA", before: 15, after: 85 },
  { name: "Сложные\nпароли", before: 22, after: 80 },
  { name: "Знаю о\nфишинге", before: 38, after: 92 },
  { name: "Обновляю\nПО", before: 30, after: 75 },
  { name: "VPN в\nWi-Fi", before: 8, after: 65 },
];

const threatAwareness = [
  { name: "Фишинг с ИИ", value: 34, color: "#FF5722" },
  { name: "Дипфейки", value: 21, color: "#FF9800" },
  { name: "Кибербуллинг", value: 27, color: "#2196F3" },
  { name: "Вирусы", value: 12, color: "#9C27B0" },
  { name: "Другое", value: 6, color: "#4CAF50" },
];

const statCards = [
  { value: "78%", label: "подростков получали подозрительные сообщения в 2025 г.", icon: "📱", color: "#FF5722" },
  { value: "43%", label: "одноклассников не знали, что такое 2FA до проекта", icon: "🔒", color: "#FF9800" },
  { value: "92%", label: "улучшили знания о кибербезопасности после урока", icon: "📈", color: "#4CAF50" },
  { value: "2,3×", label: "увеличилась доля использующих сложные пароли", icon: "🏆", color: "#2196F3" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid rgba(15,27,76,0.12)",
          borderRadius: 12,
          padding: "12px 16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: 13,
            color: "#0F1B4C",
            marginBottom: 6,
          }}
        >
          {label}
        </p>
        {payload.map((entry: any, i: number) => (
          <p
            key={i}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: entry.color,
              marginBottom: 2,
            }}
          >
            {entry.name}: <strong>{entry.value}%</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function ResearchSection() {
  return (
    <section
      id="research"
      style={{
        background: "#fff",
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
              Раздел 6 · Исследование
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
            Результаты моего исследования
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 17,
              color: "#6b7280",
              maxWidth: 580,
              margin: "0 auto",
            }}
          >
            Опрос 25 одноклассников до и после проведения урока по кибербезопасности
          </p>
        </div>

        {/* Stat cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
            marginBottom: 48,
          }}
        >
          {statCards.map((card, i) => (
            <div
              key={i}
              style={{
                background: "#f8faff",
                border: "1px solid rgba(15,27,76,0.08)",
                borderRadius: 18,
                padding: 28,
                textAlign: "center",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(15,27,76,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 8 }}>{card.icon}</div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: 40,
                  color: card.color,
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {card.value}
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: "#6b7280",
                  lineHeight: 1.5,
                }}
              >
                {card.label}
              </p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: 28,
          }}
        >
          {/* Bar chart */}
          <div
            style={{
              background: "#f8faff",
              borderRadius: 20,
              padding: 32,
              border: "1px solid rgba(15,27,76,0.07)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 17,
                color: "#0F1B4C",
                marginBottom: 6,
              }}
            >
              До и после проекта
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: "#9ca3af",
                marginBottom: 24,
              }}
            >
              % одноклассников, применяющих правило
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart
                data={surveyBefore}
                margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
                barSize={14}
                barGap={4}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fontFamily: "Inter", fontSize: 11, fill: "#9ca3af" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontFamily: "Inter", fontSize: 11, fill: "#9ca3af" }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  formatter={(value) => (
                    <span style={{ fontFamily: "Inter", fontSize: 12, color: "#6b7280" }}>
                      {value}
                    </span>
                  )}
                />
                <Bar name="До проекта" dataKey="before" fill="#FF9800" radius={[4, 4, 0, 0]} />
                <Bar name="После проекта" dataKey="after" fill="#4CAF50" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie chart */}
          <div
            style={{
              background: "#f8faff",
              borderRadius: 20,
              padding: 32,
              border: "1px solid rgba(15,27,76,0.07)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 17,
                color: "#0F1B4C",
                marginBottom: 6,
              }}
            >
              С чем сталкивались?
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: "#9ca3af",
                marginBottom: 16,
              }}
            >
              Угрозы, с которыми встречались одноклассники
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={threatAwareness}
                  cx="50%"
                  cy="45%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {threatAwareness.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => [`${value}%`, "Доля"]}
                  contentStyle={{
                    fontFamily: "Inter",
                    fontSize: 13,
                    borderRadius: 10,
                    border: "1px solid #e5e7eb",
                  }}
                />
                <Legend
                  formatter={(value) => (
                    <span style={{ fontFamily: "Inter", fontSize: 12, color: "#6b7280" }}>
                      {value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Conclusion block */}
        <div
          style={{
            background: "linear-gradient(135deg, #0F1B4C 0%, #1a2d6e 100%)",
            borderRadius: 20,
            padding: "40px 40px",
            marginTop: 32,
            display: "flex",
            alignItems: "flex-start",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontSize: 48, flexShrink: 0 }}>📝</div>
          <div style={{ flex: 1, minWidth: 240 }}>
            <h3
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 20,
                color: "#fff",
                marginBottom: 12,
              }}
            >
              Вывод исследования
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.7,
              }}
            >
              Опрос показал, что большинство десятиклассников имеют низкий уровень киберграмотности — особенно в вопросах защиты аккаунтов и распознавания ИИ-угроз. После проведения урока и ознакомления с данным проектом показатели значительно улучшились. Это подтверждает гипотезу: регулярное образование по кибербезопасности эффективно снижает риски для подростков.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
