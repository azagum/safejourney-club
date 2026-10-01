function UaClubPage(): React.JSX.Element {
  return (
    <div className="sj-layout">
      {/* TOP BAR */}
      <div
        style={{
          padding: "12px 20px",
          borderBottom: "1px solid #1e293b",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <a href="/ua" style={{ color: "#e2e8f0", textDecoration: "none", fontWeight: 600 }}>
          Safe Journey Club
        </a>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <a href="/insurance-ua" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.95rem" }}>
            Страхування
          </a>
          <a href="/" style={{ color: "#64748b", textDecoration: "none", fontSize: "0.9rem" }}>
            EN
          </a>
        </div>
      </div>

      <main className="sj-main">
        {/* HERO */}
        <section className="sj-section" id="hero">
          <div className="sj-section-header" style={{ maxWidth: 720 }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#2dd4bf",
                marginBottom: 12,
              }}
            >
              Українська версія
            </span>
            <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.4rem)" }}>
              Safe Journey Club
            </h1>
            <p>
              Сучасний travel-клуб для тих, хто хоче спокійніших і більш
              контрольованих поїздок: сервіси, партнери та практичні інструменти
              для мандрівників.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 20 }}>
              <a
                href="/insurance-ua"
                className="sj-btn primary"
                style={{ textDecoration: "none" }}
              >
                Оформити страхування
              </a>
              <a href="/" className="sj-btn ghost" style={{ textDecoration: "none" }}>
                Міжнародна версія (EN)
              </a>
            </div>
          </div>
        </section>

        {/* 3 POINTS */}
        <section className="sj-section sj-section-alt">
          <div className="sj-section-header">
            <h2>Що вже є</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {[
              {
                t: "Travel-клуб",
                d: "Платформа та сервіси для спокійніших маршрутів і партнерських пропозицій.",
              },
              {
                t: "eSIM у дорозі",
                d: "Підключення інтернету за кордоном без сюрпризів з роумінгом (у розвитку).",
              },
              {
                t: "Страхування UA",
                d: "Туристичний поліс для клієнтів з України — онлайн, перед поїздкою.",
              },
            ].map((item) => (
              <div
                key={item.t}
                style={{
                  background: "#0f172a",
                  border: "1px solid #1e293b",
                  borderRadius: 12,
                  padding: "20px 18px",
                }}
              >
                <div style={{ color: "#fff", fontWeight: 600, marginBottom: 8 }}>{item.t}</div>
                <div style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.55 }}>{item.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* INSURANCE CTA */}
        <section className="sj-section" id="insurance">
          <div className="sj-section-header" style={{ maxWidth: 640 }}>
            <h2>Туристичне страхування</h2>
            <p>
              Окремий сервіс для клієнтів в Україні: електронний поліс для Європи,
              Шенгену та інших напрямків. Оформлення на платформі страхового партнера.
            </p>
            <a
              href="/insurance-ua"
              className="sj-btn primary"
              style={{ textDecoration: "none", marginTop: 8 }}
            >
              Перейти до страхування
            </a>
          </div>
        </section>

        {/* IE RELATIONSHIP */}
        <section className="sj-section sj-section-alt">
          <div className="sj-section-header" style={{ maxWidth: 720 }}>
            <h2>Про клуб</h2>
            <p style={{ textAlign: "left" }}>
              <strong style={{ color: "#e2e8f0" }}>Safe Journey Club Limited (Ireland)</strong> —
              міжнародна компанія клубу. Українська сторінка — локальний вхід для
              аудиторії з України: коротко про клуб і доступ до страхування.
            </p>
            <p style={{ textAlign: "left" }}>
              Страхування оформлюється в українському контурі (агентський канал).
              Міжнародні сервіси клубу — на основному англомовному сайті.
            </p>
          </div>
        </section>

        {/* FINAL */}
        <section className="sj-section">
          <div className="sj-section-header">
            <h2>З чого почати</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              <a
                href="/insurance-ua"
                className="sj-btn primary"
                style={{ textDecoration: "none" }}
              >
                Страхування
              </a>
              <a href="/" className="sj-btn ghost" style={{ textDecoration: "none" }}>
                EN-сайт клубу
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="sj-footer"
        style={{ padding: "28px 20px", borderTop: "1px solid #1e293b" }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            color: "#64748b",
            fontSize: "0.85rem",
            lineHeight: 1.6,
          }}
        >
          <div style={{ marginBottom: 8 }}>
            © {new Date().getFullYear()} Safe Journey Club
          </div>
          <div>
            Safe Journey Club Limited (Ireland) ·{" "}
            <a href="/" style={{ color: "#94a3b8" }}>
              safejourney.club
            </a>
            {" · "}
            <a href="/insurance-ua" style={{ color: "#94a3b8" }}>
              Страхування UA
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default UaClubPage;