function InsuranceUaPage(): React.JSX.Element {
  const euaTravelUrl = "https://YOUR-EUA-TRAVEL-LANDING-URL"; // ← підстав свій лінк EUA

  return (
    <div className="sj-layout">
      {/* optional mini top bar */}
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
        <a href="/" style={{ color: "#e2e8f0", textDecoration: "none", fontWeight: 600 }}>
          Safe Journey Club
        </a>
        <span style={{ color: "#64748b", fontSize: "0.9rem" }}>
          Страхування для українців
        </span>
      </div>

      <main className="sj-main">
        {/* HERO */}
        <section className="sj-section" id="hero">
          <div className="sj-section-header" style={{ maxWidth: 720 }}>
            <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.4rem)" }}>
              Туристичне страхування для українців
            </h1>
            <p>
              Електронний поліс перед поїздкою: Європа, Шенген, Туреччина, Єгипет
              та інші напрямки. Оформлення онлайн за кілька хвилин.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 20 }}>
              <a
                href={euaTravelUrl}
                target="_blank"
                rel="noreferrer"
                className="sj-btn primary"
                style={{ textDecoration: "none" }}
              >
                Оформити поліс
              </a>
              <a href="#how" className="sj-btn ghost" style={{ textDecoration: "none" }}>
                Як це працює
              </a>
            </div>
            <p style={{ marginTop: 14, fontSize: "0.85rem", color: "#64748b" }}>
              Сервіс Safe Journey / Щасливої дороги · оформлення на платформі страхового партнера
            </p>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="sj-section sj-section-alt" id="benefits">
          <div className="sj-section-header">
            <h2>Що ви отримуєте</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {[
              "Медичні витрати за кордоном (за програмою)",
              "Варіанти для Шенгену та популярних напрямків",
              "Поліс на email після оплати",
              "Онлайн-оформлення без відвідування офісу",
            ].map((t) => (
              <div
                key={t}
                style={{
                  background: "#0f172a",
                  border: "1px solid #1e293b",
                  borderRadius: 12,
                  padding: "18px 16px",
                  color: "#cbd5e1",
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* HOW */}
        <section className="sj-section" id="how">
          <div className="sj-section-header">
            <h2>Як оформити</h2>
          </div>
          <ol
            style={{
              maxWidth: 560,
              margin: "0 auto",
              paddingLeft: 20,
              color: "#94a3b8",
              lineHeight: 1.9,
              fontSize: "1.05rem",
            }}
          >
            <li>Натисніть «Оформити поліс»</li>
            <li>Вкажіть напрямок, дати та вік</li>
            <li>Оберіть програму та оплатіть</li>
            <li>Отримайте поліс на електронну пошту</li>
          </ol>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <a
              href={euaTravelUrl}
              target="_blank"
              rel="noreferrer"
              className="sj-btn primary"
              style={{ textDecoration: "none" }}
            >
              Перейти до оформлення
            </a>
          </div>
        </section>

        {/* RELATIONSHIP IE / UA */}
        <section className="sj-section sj-section-alt" id="about">
          <div className="sj-section-header" style={{ maxWidth: 720 }}>
            <h2>Як це пов’язано з Safe Journey Club</h2>
            <p style={{ textAlign: "left" }}>
              <strong style={{ color: "#e2e8f0" }}>Safe Journey Club Limited (Ireland)</strong> —
              міжнародний members club для комфортніших і більш контрольованих подорожей:
              сервіси, партнери та інструменти для мандрівників.
            </p>
            <p style={{ textAlign: "left" }}>
              Туристичне страхування для клієнтів з України — <strong style={{ color: "#e2e8f0" }}>окремий локальний сервіс</strong>.
              Його мета — практична користь перед виїздом: медичне покриття за кордоном
              і просте онлайн-оформлення.
            </p>
            <p style={{ textAlign: "left" }}>
              Договір страхування укладається за правилами українського ринку з відповідним
              страховиком через агентський канал. Міжнародний клуб і українське страхування
              працюють як екосистема сервісів, але в різних юридичних контурах.
            </p>
          </div>
        </section>

        {/* IMPORTANT */}
        <section className="sj-section" id="legal">
          <div className="sj-section-header" style={{ maxWidth: 720 }}>
            <h2>Важливо знати</h2>
            <ul
              style={{
                textAlign: "left",
                color: "#94a3b8",
                lineHeight: 1.7,
                paddingLeft: 18,
              }}
            >
              <li>Поліс не гарантує видачу візи чи в’їзд до країни</li>
              <li>Умови, ліміти та винятки залежать від обраної програми</li>
              <li>Перед оплатою ознайомтесь з інформацією про продукт на сторінці оформлення</li>
              <li>При страховому випадку дійте за інструкцією в полісі / службі асистансу</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="sj-section sj-section-alt" id="faq">
          <div className="sj-section-header">
            <h2>Часті питання</h2>
          </div>
          <div style={{ maxWidth: 720, margin: "0 auto", display: "grid", gap: 14 }}>
            {[
              {
                q: "Хто виставляє поліс?",
                a: "Страхова компанія за обраною програмою. Оформлення проходить через агентський канал і платформу страхового партнера.",
              },
              {
                q: "Це продукт ірландської компанії?",
                a: "Ні. Safe Journey Club Limited (Ireland) — це клуб і платформа. Страхування для клієнтів в Україні оформлюється в українському контурі.",
              },
              {
                q: "Чи підходить для Шенгену?",
                a: "У калькуляторі доступні напрямки для Європи та Шенгену — оберіть відповідну опцію під час розрахунку.",
              },
              {
                q: "Як я отримую поліс?",
                a: "Електронний поліс надходить на email після успішної оплати.",
              },
              {
                q: "Потрібна допомога з вибором?",
                a: "Напишіть на safej2013@gmail.com — підкажемо, як краще оформити перед поїздкою.",
              },
            ].map((item) => (
              <div
                key={item.q}
                style={{
                  background: "#0f172a",
                  border: "1px solid #1e293b",
                  borderRadius: 12,
                  padding: "16px 18px",
                }}
              >
                <div style={{ color: "#fff", fontWeight: 600, marginBottom: 6 }}>{item.q}</div>
                <div style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.55 }}>{item.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="sj-section" id="cta">
          <div className="sj-section-header">
            <h2>Готові до поїздки?</h2>
            <p>Оформіть туристичний поліс онлайн перед виїздом.</p>
            <a
              href={euaTravelUrl}
              target="_blank"
              rel="noreferrer"
              className="sj-btn primary"
              style={{ textDecoration: "none", marginTop: 8 }}
            >
              Оформити поліс
            </a>
          </div>
        </section>
      </main>

      <footer className="sj-footer" style={{ padding: "28px 20px", borderTop: "1px solid #1e293b" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", color: "#64748b", fontSize: "0.85rem", lineHeight: 1.6 }}>
          <div style={{ marginBottom: 8 }}>
            © {new Date().getFullYear()} Safe Journey / Щасливої дороги
          </div>
          <div>
            Агентський канал туристичного страхування для клієнтів в Україні.
            Міжнародний клуб:{" "}
            <a href="https://safejourney.club" style={{ color: "#94a3b8" }}>
              Safe Journey Club Limited (Ireland)
            </a>
            .
          </div>
          <div style={{ marginTop: 8 }}>
            Оформлення полісів — на платформі страхового партнера. Умови конкретної програми
            надаються під час розрахунку та перед оплатою.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default InsuranceUaPage;