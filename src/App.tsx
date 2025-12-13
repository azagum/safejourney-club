import { useEffect, useMemo, useState } from "react";
import "./index.css";

const WALLESER_AFFILIATE_URL = "https://wallester.com/atrk?c=00fe5bd3-1975-4bfe-89bc-0c2631357a6b&promo=direct_link";

const features = [
  {
    title: "Premium travel & lifestyle hub",
    text: "A private club for people who want smarter journeys: flights, stays, insurance, and curated experiences — all in one modern platform.",
  },
  {
    title: "RWA & tokenized rewards ready",
    text: "Built with the future in mind: real-world assets, tokenized perks, on-chain transparency — without forcing anyone into crypto.",
  },
  {
    title: "Flexible for your journey",
    text: "Use it just for better booking deals — or go deeper: rewards, club tiers, curated trips, and, in future, co-ownership models.",
  },
];

const tiers = [
  {
    name: "Explorer",
    price: "Free",
    badge: "",
    perks: [
      "Access to Safe Journey newsletter",
      "Hand-picked travel tips & tricks",
      "Occasional promo deals and discounts",
    ],
  },
  {
    name: "Member",
    price: "Coming soon",
    badge: "Most popular",
    perks: [
      "Preferred pricing on selected hotels & stays",
      "Priority access to new travel products",
      "Invitations to early pilot programs",
    ],
  },
  {
    name: "Black Circle",
    price: "Waitlist",
    badge: "",
    perks: [
      "Closed-circle curated travel & lifestyle",
      "Access to RWA & co-ownership pilots",
      "Personal concierge touch (limited spots)",
    ],
  },
];

function Navbar() {
  return (
    <nav className="sj-nav">
      <div className="sj-nav-inner">
        <div className="sj-logo">
          <span className="sj-logo-mark" />
          <span className="sj-logo-text">Safe Journey Club</span>
        </div>

        <div className="sj-nav-links">
          <a href="#overview">Overview</a>
          <a href="#access">Access</a>
          <a href="#hotels">Hotels</a>
          <a href="#benefits">Benefits</a>
          <a href="#tiers">Membership</a>
          <a href="#future">Future</a>
        </div>

        <div className="sj-nav-actions">
          <button className="sj-btn ghost">Sign in</button>
          <button className="sj-btn primary">Join waitlist</button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="sj-hero" id="overview">
      <div className="sj-hero-inner">
        <div className="sj-hero-left">
          <span className="sj-chip">Safe Journey Club · Travel & RWA</span>

          <h1>
            A modern members club for{" "}
            <span className="sj-gradient-text">smarter journeys</span>.
          </h1>

          <p className="sj-hero-sub">
            Safe Journey Club starts as a premium travel & lifestyle layer and
            evolves into a gateway to real-world assets and tokenized rewards —
            for people who want more control, more transparency, and better
            journeys.
          </p>

          <div className="sj-hero-actions">
            <button className="sj-btn primary sj-btn-large">
              Join the early waitlist
            </button>
            <a href="#access" className="sj-btn ghost sj-btn-large">
              Try travel access
            </a>
          </div>

          <div className="sj-hero-meta">
            <span>✅ Built by the same founder as CoOwner.Estate</span>
            <span>🧭 Travel, RWA & rewards — step by step</span>
          </div>
        </div>

        <div className="sj-hero-right">
          <div className="sj-card">
            <div className="sj-card-header">
              <span className="sj-chip small">Concept preview</span>
              <h2>Safe Journey Card</h2>
              <p>
                A future multi-currency card & rewards layer that can sit on top
                of your journeys — online and offline.
              </p>
            </div>

            <div className="sj-card-visual">
              <div className="sj-virtual-card">
                <div className="sj-virtual-top">
                  <span className="sj-virtual-logo">SJ</span>
                  <span className="sj-virtual-tier">Black Circle</span>
                </div>
                <div className="sj-virtual-number">
                  5524 · 8231 · 09•• · ••••
                </div>
                <div className="sj-virtual-bottom">
                  <span>SAFE JOURNEY CLUB</span>
                  <span>VALID — FUTURE</span>
                </div>
              </div>
            </div>

            <div className="sj-card-footer">
              <span>Phase 1: Travel & perks</span>
              <span>Phase 2: RWA pilots</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/** Phase 1 Flights access (affiliate redirect later) */
function TravelAccessSection() {
  return (
    <section id="access" className="sj-section sj-section-alt">
      <div className="sj-section-header">
        <h2>Smarter flights, without friction</h2>
        <p>
          Compare routes and prices — then book directly with the airline or a
          trusted partner. No markups. No forced accounts.
        </p>
      </div>

      <div className="sj-flight-box">
        <div className="sj-flight-form">
          <input className="sj-input" placeholder="From (city or airport)" />
          <input className="sj-input" placeholder="To (city or airport)" />
          <input className="sj-input" type="date" />
          <input className="sj-input" type="date" />
          <button className="sj-btn primary">Find best flight options</button>
        </div>

        <p className="sj-flight-note">
          You’ll be redirected to a trusted booking partner.
        </p>
      </div>
    </section>
  );
}

/** Hotels (Amadeus-ready) – аккуратний preview + пошук-шаблон */
type HotelResult = {
  hotel: {
    hotelId: string;
    name: string;
    cityCode: string;
  };
  offers?: {
    price?: {
      total?: number;
    };
  }[];
};

function HotelsSection() {
  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<HotelResult[]>([]);
  const [error, setError] = useState("");

  async function searchHotels() {
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const API_BASE =
  import.meta.env.VITE_API_BASE || "http://localhost:3001";

const res = await fetch(
  `${API_BASE}/api/hotels/search?city=${city}&checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}`
);

      const data = await res.json();

      if (!data?.data) {
        throw new Error("No results");
      }

      setResults(data.data);
    } catch {
      setError("Could not load hotel offers");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="hotels" className="sj-section">
      <div className="sj-section-header">
        <h2>Hotels</h2>
        <p>
          Transparent pricing and clear conditions. Booking handled inside
          Safe Journey Club.
        </p>
      </div>

      <div className="sj-flight-box sj-hotel-box">

        <div className="sj-hotel-form">
          <input
            className="sj-input"
            placeholder="City (Paris, Rome, Kyiv)"
            value={city}
            onChange={(e) => setCity(e.target.value.toUpperCase())}
          />
          <input
            className="sj-input"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
          <input
            className="sj-input"
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
          <input
            className="sj-input"
            type="number"
            min={1}
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
          />
          <button
            className="sj-btn primary"
            onClick={searchHotels}
            disabled={loading}
          >
            {loading ? "Searching..." : "Search hotels"}
          </button>
        </div>

        {error && <p className="sj-error">{error}</p>}

        {results.length > 0 && (
          <div className="sj-hotel-results">
            {results.slice(0, 6).map((offer: HotelResult) => {
              const hotel = offer.hotel;
              const price = offer.offers?.[0]?.price?.total;

              return (
                <div key={hotel.hotelId} className="sj-hotel-card">
                  <h3>{hotel.name}</h3>
                  <p>{hotel.cityCode}</p>
                  <strong>€ {price}</strong>
                  <button className="sj-btn ghost full">
                    Book (next step)
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section id="benefits" className="sj-section">
      <div className="sj-section-header">
        <h2>What is Safe Journey Club?</h2>
        <p>
          Think of it as a modern, lightweight Diners/Amex-style layer — built
          for people who combine travel, digital finance, and long-term
          thinking.
        </p>
      </div>

      <div className="sj-grid sj-grid-3">
        {features.map((f) => (
          <div className="sj-tile" key={f.title}>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TiersSection() {
  return (
    <section id="tiers" className="sj-section">
      <div className="sj-section-header">
        <h2>Membership tiers (concept)</h2>
        <p>
          The first phase is not about selling cards. It is about building a
          club, understanding real needs, and launching tiers only when they
          truly make sense.
        </p>
      </div>

      <div className="sj-grid sj-grid-3 sj-tiers-grid">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`sj-tier ${tier.badge ? "sj-tier-highlight" : ""}`}
          >
            <div className="sj-tier-head">
              <h3>{tier.name}</h3>
              {tier.badge && <span className="sj-badge">{tier.badge}</span>}
            </div>
            <p className="sj-tier-price">{tier.price}</p>
            <ul className="sj-tier-list">
              {tier.perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
            <button className="sj-btn ghost full">
              {tier.price === "Free" ? "Join as Explorer" : "Join waitlist"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function FutureSection() {
  return (
    <section id="future" className="sj-section sj-section-alt">
      <div className="sj-section-header">
        <h2>The journey: from travel club to RWA layer</h2>
        <p>
          Safe Journey Club is built deliberately and slowly — with trust and
          real-world value first, and tokenization only where it helps.
        </p>
      </div>

      <div className="sj-roadmap">
        <div className="sj-roadmap-item">
          <span className="sj-step">Phase 1</span>
          <h3>Travel & perks foundation</h3>
          <p>
            Curated bookings, insurance, and travel benefits for members,
            without forcing anyone into crypto at all.
          </p>
        </div>

        <div className="sj-roadmap-item">
          <span className="sj-step">Phase 2</span>
          <h3>Rewards & card layer</h3>
          <p>
            Partner card programs (e.g. through providers like Wallester),
            reward logic, and simple, understandable benefits.
          </p>

          {/* Wallester CTA (affiliate) */}
          <div className="sj-partner-cta">
            <p>
              Start with a trusted EU card partner — modern controls, clean
              onboarding, and a travel-friendly payments layer.
            </p>
            <a
              href={WALLESER_AFFILIATE_URL}
              target="_blank"
              rel="noreferrer"
              className="sj-btn ghost"
            >
              Explore Wallester Card
            </a>
          </div>
        </div>

        <div className="sj-roadmap-item">
          <span className="sj-step">Phase 3</span>
          <h3>RWA & co-ownership pilots</h3>
          <p>
            Carefully structured real-world asset experiments — for example,
            co-owned stays, curated properties, and housing pilots.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="sj-footer">
      <div className="sj-footer-inner">
        <div>
          <div className="sj-logo small">
            <span className="sj-logo-mark" />
            <span className="sj-logo-text">Safe Journey Club</span>
          </div>
          <p className="sj-footer-text">
            A modern club for travel, rewards, and future RWA journeys.
          </p>
        </div>

        <div className="sj-footer-cols">
          <div>
            <h4>Projects</h4>
            <a href="https://coowner.estate" target="_blank" rel="noreferrer">
              CoOwner.Estate
            </a>
          </div>
          <div>
            <h4>Social</h4>
            <a
              href="https://x.com/Coowner_Estate"
              target="_blank"
              rel="noreferrer"
            >
              X (Twitter)
            </a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:info@safejourney.club">info@safejourney.club</a>
          </div>
        </div>
      </div>

      <div className="sj-footer-bottom">
        <span>© {new Date().getFullYear()} Safe Journey Club</span>
        <span>Not financial advice. Not an investment product.</span>
      </div>
    </footer>
  );
}

/** -------------------- JONIK (Phase 1: silent guide) -------------------- */
type JonikMessage = { key: string; text: string; anchor?: string };

function Jonik() {
  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string>("overview");

  const messages: JonikMessage[] = useMemo(
    () => [
      {
        key: "overview",
        text: "I’ll help you find the smarter path — no noise, only useful hints.",
        anchor: "#overview",
      },
      {
        key: "access",
        text: "Flights: we compare options, then redirect you to a trusted place to book.",
        anchor: "#access",
      },
      {
        key: "hotels",
        text: "Hotels: Phase 1 booking will be handled inside SJC via Amadeus.",
        anchor: "#hotels",
      },
      {
        key: "future",
        text: "Rewards layer comes later — only when it truly adds value.",
        anchor: "#future",
      },
    ],
    []
  );

  // Lightweight section tracking (no libraries)
  useEffect(() => {
    const ids = ["overview", "access", "hotels", "future"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!("IntersectionObserver" in window) || els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActiveKey(visible.target.id);
      },
      { threshold: [0.15, 0.25, 0.35] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const active = messages.find((m) => m.key === activeKey) ?? messages[0];

  return (
    <div className="sj-jonik">
      <button className="sj-jonik-btn" onClick={() => setOpen((v) => !v)}>
        <span className="sj-jonik-face" aria-hidden="true" />
        <span className="sj-jonik-label">Jonik</span>
      </button>

      {open && (
        <div className="sj-jonik-panel">
          <div className="sj-jonik-title">
            <span className="sj-jonik-dot" />
            <strong>Jonik</strong>
            <span className="sj-jonik-muted">· guide</span>
          </div>

          <div className="sj-jonik-text">{active.text}</div>

          <div className="sj-jonik-actions">
            {active.anchor && (
              <a className="sj-btn ghost" href={active.anchor} onClick={() => setOpen(false)}>
                Go there
              </a>
            )}
            <button className="sj-btn primary" onClick={() => setOpen(false)}>
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="sj-layout">
      <Navbar />
      <Hero />

      {/* ✅ This is what removes your “defined but never used” error */}
      <TravelAccessSection />

      <main className="sj-main">
        <HotelsSection />
        <BenefitsSection />
        <TiersSection />
        <FutureSection />
      </main>

      <Footer />

      {/* Jonik (silent guide) */}
      <Jonik />
    </div>
  );
}

