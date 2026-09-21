import { useState } from "react";
import { useEffect } from "react";
import "./index.css";

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
interface Tier {
  name: string;
  price: string;
  badge: string;
  perks: string[];
}
const tiers: Tier[] = [
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
    price: "€19 / year", // Прибрали Coming soon, поставили ціну
    badge: "Most popular",
    perks: [
      "Preferred pricing on selected hotels & stays",
      "Priority access to new travel products",
      "Invitations to early pilot programs",
    ],
  },
  {
    name: "Black Circle",
    price: "Bespoke / Custom", // Прибрали Waitlist, додали преміальний статус
    badge: "Elite Tier",
    perks: [
      "Closed-circle curated travel & lifestyle",
      "Access to RWA & co-ownership pilots",
      "Personal concierge touch (limited spots)",
    ],
  },
];

interface NavbarProps {
  onJoinClick: (tier: string) => void;
  onSignInClick: () => void; // Додано новий пропс для Sign in
}

function Navbar({ onJoinClick, onSignInClick }: NavbarProps): React.JSX.Element {
  return (
    <nav className="sj-nav">
      <div className="sj-nav-inner">
        <div className="sj-logo">
          <span className="sj-logo-mark" />
          <span className="sj-logo-text">Safe Journey Club</span>
        </div>

        <div className="sj-nav-links">
          <a href="#overview">Overview</a>
          <a href="#transfers">Fast Transfers</a>
          <a href="#benefits">Benefits</a>
          <a href="#tiers">Membership</a>
          <a href="#future">Future</a>
        </div>

        <div className="sj-nav-actions">
          {/* Кнопка тепер активна та викликає сповіщення */}
          <button className="sj-btn ghost" onClick={onSignInClick}>
            Sign in
          </button>
          <button className="sj-btn primary" onClick={() => onJoinClick("Explorer")}>
            Join the Club
          </button>
        </div>
      </div>
    </nav>
  );
}

interface HeroProps {
  onJoinClick: (tier: string) => void;
}

function Hero({ onJoinClick }: HeroProps): React.JSX.Element {
  const handleLearnMore = () => {
    const benefitsSection = document.getElementById("benefits");
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            {/* Головна кнопка тепер активна та відкриває безкоштовну реєстрацію */}
            <button 
              className="sj-btn primary sj-btn-large" 
              onClick={() => onJoinClick("Explorer")}
            >
              Get Instant Club Access — Free
            </button>
            
            {/* Кнопка плавного скролу до опису клубу */}
            <button 
              className="sj-btn ghost sj-btn-large" 
              onClick={handleLearnMore}
            >
              Learn how it works
            </button>
          </div>

          <div className="sj-hero-meta">
            <span>🧭 Travel, RWA & rewards — step by step</span>
          </div>
        </div>

        <div className="sj-hero-right">
          <div className="sj-card">
            <div className="sj-card-header">
              <span className="sj-chip small">Concept preview</span>
              <h2>Safe Journey Card</h2>
              <p>
                A future multi-currency card & rewards layer that can sit on
                top of your journeys — online and offline.
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

// --- ПОШУК АВІАКВИТКІВ ---
function TravelAccessSection(): React.JSX.Element {
  // Ваше партнерське посилання на Trip.com (замініть базовий лінк на ваше реферальне, якщо є)
  const tripFlightsUrl = "https://www.trip.com/flights/?Allianceid=7455498&SID=283527301"; 
  const tripHotelsUrl = "https://www.trip.com/t/2uaIDWYHiS2";

  return (
    <section className="sj-section sj-section-alt">
      <div className="sj-section-header">
        <h2>Smarter Journeys, Zero Friction</h2>
        <p>
          Compare routes and book directly with our trusted global travel partner. 
          <strong> Safe Journey Club</strong> never adds markups or hidden fees.
        </p>
      </div>

      {/* Нова преміальна сітка з двома великими інтерактивними кнопками */}
      <div className="sj-travel-hub-grid">
        <a 
          href={tripFlightsUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="sj-travel-card"
        >
          <div className="sj-travel-icon">✈️</div>
          <div className="sj-travel-info">
            <h3>Find Best Flights</h3>
            <p>Search global routes, airlines, and real-time schedules on Trip.com</p>
          </div>
          <span className="sj-travel-arrow">→</span>
        </a>

        <a 
          href={tripHotelsUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="sj-travel-card"
        >
          <div className="sj-travel-icon">🏨</div>
          <div className="sj-travel-info">
            <h3>Search Hotels & Stays</h3>
            <p>Access exclusive pricing on thousands of premium properties worldwide</p>
          </div>
          <span className="sj-travel-arrow">→</span>
        </a>
      </div>

      <p className="sj-flight-note text-center">
        ℹ️ You will be redirected securely to our booking partner. Member cashback benefits and integrated blockchain rewards are coming soon.
      </p>
    </section>
  );
}

function CryptoTransferSection(): React.JSX.Element {
  const [amount, setAmount] = useState<number>(100);
  const [network, setNetwork] = useState<string>("SOLANA");
  
  const fee = (amount * 0.005).toFixed(2); 
  const wiseFee = (amount * 0.015 + 0.5).toFixed(2); 
  const saving = (Number(wiseFee) - Number(fee)).toFixed(2);

  const handleTransfer = (): void => {
  const cryptoToken = network === "SOLANA" ? "SOL_USDC" : "XRP_XRP";
  
  // ТИМЧАСОВО: Використовуємо Demo-сервер, який не вимагає верифікованого ключа
  const baseUrl = "https://ramp.network"; 
  
  const params = new URLSearchParams({
    hostAppName: "Safe Journey Club",
    fiatCurrency: "EUR",
    fiatAmount: amount.toString(),
    cryptoAsset: cryptoToken,
    // hostApiKey: "ВАШ_ТЕСТОВИЙ_КЛЮЧ" // Сюди згодом вставите ключ, коли схвалять заявку
  });

  const providerUrl = `${baseUrl}/?${params.toString()}`;
  window.open(providerUrl, "_blank", "width=500,height=700,noopener,noreferrer");
};

  return (
    <section id="transfers" className="sj-section sj-section-alt">
      <div className="sj-section-header">
        <h2>Web3-Powered Global Transfers</h2>
        <p>
          Explore fast cross-border payment routes using modern digital-asset
          infrastructure.
        </p>
      </div>

      <div className="sj-flight-box crypto-box">
        <div className="sj-crypto-form">
          <div className="sj-input-group">
            <label>You Send (EUR)</label>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              min={10}
            />
          </div>

          <div className="sj-input-group">
            <label>Network Route</label>

            <select
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
            >
              <option value="SOLANA">Solana / USDC</option>
              <option value="RIPPLE">XRP Ledger / XRP</option>
            </select>
          </div>

          <button
            className="sj-btn primary"
            onClick={handleTransfer}
          >
            Explore Transfer
          </button>
        </div>

        <div className="sj-crypto-metrics">
          <div className="metric-item">
            <span>Illustrative platform fee (0.5%):</span>
            <strong>€{fee}</strong>
          </div>

          <div className="metric-item highlight-metric">
            <span>Illustrative difference:</span>
            <strong>€{saving}</strong>
          </div>
        </div>

        <p className="sj-flight-note text-center">
          Final rates, fees, availability and transaction processing are
          provided by the selected third-party provider.
        </p>
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

interface TiersSectionProps {
  onTierSelect: (tierName: string) => void;
}

function TiersSection({ onTierSelect }: TiersSectionProps): React.JSX.Element {
  return (
    <section id="tiers" className="sj-section">
      <div className="sj-section-header">
        <h2>Membership Tiers & Instant Access</h2>
        <p>
          We don't believe in waiting lists. Choose your path, create an account, 
          and start your smarter journey with Safe Journey Club today.
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
              {tier.perks.map((perk: string) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
            {/* Усі кнопки тепер активні, фіолетові та зрозумілі */}
            <button 
              className="sj-btn primary full"
              onClick={() => onTierSelect(tier.name)}
            >
              {tier.name === "Black Circle" ? "Request Black Card" : `Join as ${tier.name}`}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function FutureSection(): React.JSX.Element {
  return (
    <section id="future" className="sj-section sj-section-alt">
      <div className="sj-section-header">
        <h2>The Journey: From Travel Club to RWA Layer</h2>
        <p>
          Safe Journey Club is built deliberately and slowly — establishing trust, real-world utility, and robust compliance partnerships first.
        </p>
      </div>

      <div className="sj-roadmap">
        {/* PHASE 1 */}
        <div className="sj-roadmap-item">
          <span className="sj-step">Phase 1</span>
          <h3>Travel & Perks Foundation</h3>
          <p>
            Curated bookings, insurance coordination, and premium travel lifestyle benefits 
            for members — completely localized and friction-free.
          </p>
        </div>

        {/* INTEGRATED CARD PARTNER BLOCK */}
        <div className="sj-partner-card-block">
          <div className="sj-partner-badge">Official Card Infrastructure Partner</div>
          <h3>Co-Branded Card Integration</h3>
          <p>
            We operate with trusted European payment networks. Enjoy zero FX fees, elite spending controls, 
            and instant digital onboarding via our dedicated partner gateway.
          </p>
          <a
            href="https://wallester.com/atrk?c=00fe5bd3-1975-4bfe-89bc-0c2631357a6b&promo=direct_link"
            target="_blank"
            rel="noreferrer"
            className="sj-btn primary sj-partner-btn"
          >
            Issue Safe Journey Card via Wallester →
          </a>
        </div>

        {/* PHASE 2 */}
        <div className="sj-roadmap-item">
          <span className="sj-step">Phase 2</span>
          <h3>Global Web3 Remittances</h3>
          <p>
            Integration of Solana and Ripple liquidity bridges to provide high-speed, 
            ultra-low-fee worldwide transfers disguised as a premium loyalty perk.
          </p>
        </div>

        {/* PHASE 3 */}
        <div className="sj-roadmap-item">
          <span className="sj-step">Phase 3</span>
          <h3>RWA & Co-Ownership Pilots</h3>
          <p>
            Carefully structured real-world asset experiments — for example, 
            co-owned stays, premium properties, and curated transport housing pilots.
          </p>
        </div>
      </div>
    </section>
  );
}

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "TERMS" | "PRIVACY"; // Додали правило для вкладки за замовчуванням
}

function TermsModal({ isOpen, onClose, defaultTab = "TERMS" }: TermsModalProps): React.JSX.Element | null {
  const [activeTab, setActiveTab] = useState<"TERMS" | "PRIVACY">(defaultTab);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultTab);
    }
  }, [isOpen, defaultTab]);

  if (!isOpen) return null;

  return (
    <div className="sj-modal-overlay" onClick={onClose}>
      <div className="sj-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="sj-modal-tabs" style={{ display: "flex", borderBottom: "1px solid #222733" }}>
          <button 
            onClick={() => setActiveTab("TERMS")}
            style={{ flex: 1, padding: "16px", background: "none", color: activeTab === "TERMS" ? "#64ffda" : "#8892b0", border: "none", borderBottom: activeTab === "TERMS" ? "2px solid #64ffda" : "none", fontWeight: "bold", cursor: "pointer" }}
          >
            Terms of Service
          </button>
          <button 
            onClick={() => setActiveTab("PRIVACY")}
            style={{ flex: 1, padding: "16px", background: "none", color: activeTab === "PRIVACY" ? "#64ffda" : "#8892b0", border: "none", borderBottom: activeTab === "PRIVACY" ? "2px solid #64ffda" : "none", fontWeight: "bold", cursor: "pointer" }}
          >
            Privacy Policy
          </button>
        </div>
        
        <div className="sj-modal-body">
          {activeTab === "TERMS" ? (
            <>
              <p style={{ fontSize: "0.85rem", color: "#8892b0", marginBottom: "20px" }}><strong>Last Updated:</strong> September 18, 2026</p>
              <p>Welcome to Safe Journey Club. Please read these Terms of Service carefully before using the website operated by <strong>Safe Journey Club Limited</strong>, Ireland (Reg. No. <strong>751178</strong>).</p>
              <h4>💡 1. Scope of Service & Non-Regulated Status</h4>
              <p>1.1. Safe Journey Club Limited is a premium travel, lifestyle, and loyalty infrastructure platform. The Platform acts exclusively as a technology layer designed to offer membership perks and software integration tools. The Company is not a bank, not an Electronic Money Institution (EMI), and not a licensed custodian.</p>
              <h4>➡️ 2. Integration of Third-Party Licensed Partners</h4>
              <p>2.1. All regulated financial services, multi-currency card issuance, and fiat payment handling are executed entirely by our licensed third-party embedded banking partners, including but not limited to <strong>Wallester AS</strong>. All fiat-to-crypto and crypto-to-fiat transactions are managed and settled directly by <strong>Ramp Network</strong>.</p>
              <h4>⚠️ 3. Anti-Money Laundering (AML) & User Verification</h4>
              <p>3.1. To access advanced features or third-party widgets, users must comply with all verification checks initiated by our partner networks. Any attempt to use the technical interface for illicit activities will result in an immediate, permanent ban.</p>
              <h4>📅 4. Governing Law</h4>
              <p>4.1. These Terms shall be governed, construed, and enforced in accordance with the laws of <strong>Ireland</strong>. Any legal actions shall be resolved within the competent courts of Ireland.</p>
            </>
          ) : (
            <>
              <p style={{ fontSize: "0.85rem", color: "#8892b0", marginBottom: "20px" }}><strong>Effective Date:</strong> September 21, 2026</p>
              <p><strong>Safe Journey Club Limited</strong>, Ireland (Reg. No. <strong>751178</strong>) is committed to protecting your privacy in compliance with the <strong>EU General Data Protection Regulation (GDPR)</strong>.</p>
              <h4>1. Data Controller</h4>
              <p>For any data protection inquiries, you may contact our compliance team at: <strong>info@safejourney.club</strong>.</p>
              <h4>2. Information We Collect</h4>
              <p>We collect your Full Name, Email Address, and selected membership tier to deliver software and club access. We do not sell or lease your profile records.</p>
              <h4>3. Processing of Biometric Data (KYC)</h4>
              <p>We do not collect or store your official ID documents, passports, or biometric metadata on our servers. All identity authentication protocols are safely managed directly by our dedicated data processor: <strong>Sumsub</strong>.</p>
              <h4>4. Your GDPR Rights</h4>
              <p>You hold complete statutory rights to access, rectify, restrict, or demand the permanent erasure of your personal data from our platform systems at any moment.</p>
            </>
          )}
        </div>
        <div className="sj-modal-footer">
          <button className="sj-btn primary" onClick={onClose}>I Understand</button>
        </div>
      </div>
    </div>
  );
}

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void; // Додали правило для приватності
}

function Footer({ onOpenTerms, onOpenPrivacy }: FooterProps): React.JSX.Element {
  return (
    <footer className="sj-footer">
      <div className="sj-footer-inner">
        <div>
          <div className="sj-logo small">
            <span className="sj-logo-mark" />
            <span className="sj-logo-text">Safe Journey Club</span>
          </div>
          <p className="sj-footer-text">A modern club for travel, rewards, and future RWA journeys.</p>
        </div>
        <div className="sj-footer-cols">
          
          <div>
            <h4>Social</h4>
            <a href="https://x.com" target="_blank" rel="noreferrer">X (Twitter)</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a 
              href="#terms" 
              onClick={(e) => { e.preventDefault(); window.location.hash = "terms"; onOpenTerms(); }}
              className="sj-footer-link-btn"
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left', display: 'block', marginBottom: '8px', textDecoration: 'none' }}
            >
              Terms of Service
            </a>
            <a 
              href="#privacy" 
              onClick={(e) => { e.preventDefault(); window.location.hash = "privacy"; onOpenPrivacy(); }}
              className="sj-footer-link-btn"
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left', display: 'block', textDecoration: 'none' }}
            >
              Privacy Policy
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

export default function App(): React.JSX.Element {
  const [isTermsOpen, setIsTermsOpen] = useState<boolean>(false);
  const [isJoinOpen, setIsJoinOpen] = useState<boolean>(false);
  const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);
  const [selectedTier, setSelectedTier] = useState<string>("Explorer");
  const [initialModalTab, setInitialModalTab] = useState<"TERMS" | "PRIVACY">("TERMS");

  useEffect(() => {
    const checkUrlHash = () => {
      const hash = window.location.hash;
      if (hash === "#privacy") {
        setInitialModalTab("PRIVACY");
        setIsTermsOpen(true);
      } else if (hash === "#terms") {
        setInitialModalTab("TERMS");
        setIsTermsOpen(true);
      }
    };

    checkUrlHash();
    window.addEventListener("hashchange", checkUrlHash);
    return () => window.removeEventListener("hashchange", checkUrlHash);
  }, []);

  const handleOpenJoin = (tier: string) => {
    setSelectedTier(tier);
    setIsSignInOpen(false);
    setIsJoinOpen(true);
  };

  const handleOpenTermsDirectly = (tab: "TERMS" | "PRIVACY") => {
    setInitialModalTab(tab);
    setIsTermsOpen(true);
  };

  return (
    <div className="sj-layout">
      <Navbar onJoinClick={handleOpenJoin} onSignInClick={() => setIsSignInOpen(true)} />
      <Hero onJoinClick={handleOpenJoin} />
      
      <main className="sj-main">
        <CryptoTransferSection />
        <BenefitsSection />
        <TravelAccessSection />
        <TiersSection onTierSelect={handleOpenJoin} /> 
        <FutureSection />
      </main>
      
      <Footer 
        onOpenTerms={() => handleOpenTermsDirectly("TERMS")} 
        onOpenPrivacy={() => handleOpenTermsDirectly("PRIVACY")} 
      />
      
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} defaultTab={initialModalTab} />
      <JoinModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} selectedTier={selectedTier} />
      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} onSwitchToJoin={() => handleOpenJoin("Explorer")} />
    </div>
  );
}

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier: string;
}

function JoinModal({ isOpen, onClose, selectedTier }: JoinModalProps): React.JSX.Element | null {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [chosenVerification, setChosenVerification] = useState<"SUMSUB" | "WORLD_ID" | "NONE">("NONE");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleVerificationClick = (provider: "SUMSUB" | "WORLD_ID") => {
    setChosenVerification(provider);
    
    // Формуємо тимчасові лінки для тестування (замініть на продуктові після схвалення)
    const url = provider === "SUMSUB" 
      ? "https://sumsub.com"
      : "https://worldcoin.org";

    window.open(url, "_blank", "width=500,height=700,noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="sj-modal-overlay" onClick={onClose}>
      <div className="sj-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="sj-modal-header">
          <h3>Activate Your {selectedTier} Membership</h3>
          <button className="sj-modal-close" onClick={onClose}>&times;</button>
        </div>
        
        <div className="sj-modal-body">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="sj-join-form" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ color: "#8892b0", fontSize: "0.95rem" }}>
                You are creating an account under the <strong>{selectedTier}</strong> tier for <strong>Safe Journey Club</strong>.
              </p>
              
              <div className="sj-input-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="sj-input-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              {selectedTier === "Member" && (
                <>
                  <div style={{ background: "#0d1117", padding: "12px", borderRadius: "8px", border: "1px solid #222733", fontSize: "0.85rem", color: "#a8b2d1", marginBottom: "10px" }}>
                    💳 <strong>Membership Fee: €19/year</strong>. After clicking the button below, you will receive an invoice via Wise to activate your digital premium card.
                  </div>
                  <button type="submit" className="sj-btn primary" style={{ padding: "14px", width: "100%" }}>
                    Proceed to Payment
                  </button>
                </>
              )}

              {selectedTier === "Explorer" && (
                <button type="submit" className="sj-btn primary" style={{ padding: "14px", width: "100%" }}>
                  Create Free Account
                </button>
              )}

              {selectedTier === "Black Circle" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ background: "#0d1117", padding: "12px", borderRadius: "8px", border: "1px solid #222733", fontSize: "0.85rem", color: "#a8b2d1" }}>
                    👑 <strong>Instant Digital ID Verification</strong>. To secure your elite tier, please choose your preferred verification pathway below. No manual video calls required.
                  </div>
                  
                  {/* Варіант 1: Традиційний європейський комплаєнс */}
                  <button 
                    type="button" 
                    className="sj-btn primary" 
                    style={{ padding: "14px", width: "100%" }}
                    onClick={() => handleVerificationClick("SUMSUB")}
                  >
                    Verify via Sumsub (ID / Passport / Diia) →
                  </button>

                  {/* Варіант 2: Сучасна анонімна Web3 верифікація */}
                  <button 
                    type="button" 
                    className="sj-btn ghost" 
                    style={{ padding: "14px", width: "100%", borderColor: "#64ffda", color: "#64ffda" }}
                    onClick={() => handleVerificationClick("WORLD_ID")}
                  >
                    Verify via World ID (Anonymously) 🌐
                  </button>
                </div>
              )}
            </form>
          ) : (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <h4 style={{ color: "#64ffda", fontSize: "1.3rem", marginBottom: "12px" }}>Welcome to the Club, {name}!</h4>
              <p style={{ color: "#a8b2d1", fontSize: "1rem", lineHeight: "1.6" }}>
                {selectedTier === "Member" && "We have generated your invoice. Check your email inbox shortly for the secure Wise activation link. Once paid, your Safe Journey Card will be activated!"}
                {selectedTier === "Explorer" && "Your Free Explorer account is ready. We've sent a temporary login token and access instructions to your email."}
                {selectedTier === "Black Circle" && chosenVerification === "SUMSUB" && "Your identity session has been initialized with Sumsub. Complete the automated document check window to activate your custom Black Card."}
                {selectedTier === "Black Circle" && chosenVerification === "WORLD_ID" && "Your World ID verification request has been securely processed. Once approved on-chain, your custom Black Card will be minted."}
              </p>
              <button className="sj-btn ghost" onClick={onClose} style={{ marginTop: "20px" }}>Close Window</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToJoin: () => void;
}

function SignInModal({ isOpen, onClose, onSwitchToJoin }: SignInModalProps): React.JSX.Element | null {
  if (!isOpen) return null;

  return (
    <div className="sj-modal-overlay" onClick={onClose}>
      <div className="sj-modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "450px" }}>
        <div className="sj-modal-header">
          <h3>Member Sign In</h3>
          <button className="sj-modal-close" onClick={onClose}>&times;</button>
        </div>
        
        <div className="sj-modal-body" style={{ textAlign: "center", padding: "30px 20px" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>🔒</div>
          <h4 style={{ color: "#ffffff", fontSize: "1.2rem", marginBottom: "8px" }}>Portal Under Optimization</h4>
          <p style={{ color: "#a8b2d1", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "20px" }}>
            The secure dashboard for digital ID, Web3-wallet login (Solana), and card controls is being finalized alongside our regulated partner rollout.
          </p>
          <p style={{ color: "#606a85", fontSize: "0.85rem", marginBottom: "24px" }}>
            If you are a new member, please create an account first to reserve your club tier status.
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <button className="sj-btn primary" onClick={onSwitchToJoin}>
              Create / Activate Account
            </button>
            <button className="sj-btn ghost" onClick={onClose}>
              Back to Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

