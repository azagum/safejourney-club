import { useState } from "react";
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

        <div className="sj-partner-cta">
  <p>
    Start with a trusted EU card partner — zero FX fees, modern controls,
    and clean onboarding.
  </p>
  <a
    href="https://wallester.com/atrk?c=00fe5bd3-1975-4bfe-89bc-0c2631357a6b&promo=direct_link"
    target="_blank"
    rel="noreferrer"
    className="sj-btn ghost"
  >
    Explore Wallester Card
  </a>
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
interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function TermsModal({ isOpen, onClose }: TermsModalProps): React.JSX.Element | null {
  if (!isOpen) return null;

  return (
    <div className="sj-modal-overlay" onClick={onClose}>
      <div className="sj-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="sj-modal-header">
          <h3>Terms of Service</h3>
          <button className="sj-modal-close" onClick={onClose}>&times;</button>
        </div>
        
        <div className="sj-modal-body">
          <p style={{ fontSize: "0.85rem", color: "#8892b0", marginBottom: "20px" }}>
            <strong>Last Updated:</strong> September 18, 2026
          </p>
          
          <p>
            Welcome to Safe Journey Club. Please read these Terms of Service ("Terms", "Agreement") carefully 
            before using the website <a href="https://safejourney.club" target="_blank" rel="noreferrer" style={{ color: "#64ffda" }}>https://safejourney.club</a> (the 
            "Platform" or "Service") operated by <strong>Safe Journey Club Limited</strong>, a company incorporated 
            in Ireland under registration number <strong>751178</strong> ("Company", "we", "us", or "our").
          </p>
          
          <p>
            By accessing or using our Platform, you ("User", "Member", "you") agree to be bound by these Terms. 
            If you disagree with any part of the terms, you do not have permission to access the Service.
          </p>
          
          <hr style={{ border: "0", borderTop: "1px solid #222733", margin: "20px 0" }} />

          <h4>💡 1. Scope of Service & Non-Regulated Status</h4>
          <p>
            <strong>1.1.</strong> Safe Journey Club Limited is a premium travel, lifestyle, and loyalty infrastructure platform. 
            The Platform acts exclusively as a technology layer designed to offer membership perks, tokenized rewards, 
            travel coordination concepts, and software integration tools.
          </p>
          <p>
            <strong>1.2.</strong> The Company is not a bank, not an Electronic Money Institution (EMI), and not a licensed 
            custodian or investment broker.
          </p>
          <p>
            <strong>1.3.</strong> We do not directly capture, hold, manage, or settle fiat money, digital assets, or 
            cross-border payment flows on behalf of users.
          </p>

          <h4>➡️ 2. Integration of Third-Party Licensed Partners</h4>
          <p>
            <strong>2.1.</strong> All regulated financial services, multi-currency card issuance, currency conversions, 
            and fiat payment handling are executed entirely by our licensed third-party embedded banking partners, including 
            but not limited to <strong>Wallester AS</strong> (an official Visa Principal Member and licensed payment institution).
          </p>
          <p>
            <strong>2.2.</strong> All fiat-to-crypto and crypto-to-fiat transactions, blockchain liquidity bridges, and asset 
            swaps (including those routing via Solana and Ripple rails) are managed, authenticated, and settled directly 
            by <strong>Ramp Network</strong> (or other integrated, licensed liquidity providers available through hosted widgets).
          </p>
          <p>
            <strong>2.3.</strong> By utilizing any financial or crypto functions made available via our technical interface, 
            you acknowledge that you are entering into a direct contractual relationship with those respective third-party 
            providers and agree to abide by their independent Know-Your-Customer (KYC), Anti-Money Laundering (AML), 
            and transaction processing policies.
          </p>

          <h4>🔎 3. Membership Tiers & Subscription Perks</h4>
          <p>
            <strong>3.1.</strong> Safe Journey Club offers various membership tiers (e.g., Explorer, Member, Black Circle). 
            The availability, pricing, qualification parameters, and perks of these tiers are conceptual in nature and 
            subject to continuous modification at the sole discretion of the Company.
          </p>
          <p>
            <strong>3.2.</strong> Club subscriptions, entry fees, or technology fees paid directly to the Company represent 
            payments made exclusively for software access, curated network privileges, and internal club reward point systems. 
            They do not constitute financial deposits or equity investment stakes.
          </p>

          <h4>📊 4. Real-World Assets (RWA) & Future Concepts</h4>
          <p>
            <strong>4.1.</strong> References to Real-World Asset (RWA) tokens, co-ownership pilots, on-chain rewards, or 
            fractional experiments represent technical roadmaps and technological simulations.
          </p>
          <p>
            <strong>4.2.</strong> No information provided on this Platform constitutes financial, investment, legal, or tax 
            advice. Safe Journey Club does not offer securities or regulated crowdfunding products.
          </p>

          <h4>⚠️ 5. Anti-Money Laundering (AML) & User Verification</h4>
          <p>
            <strong>5.1.</strong> To access advanced features or third-party widgets, users must comply with all verification 
            checks initiated by our partner networks.
          </p>
          <p>
            <strong>5.2.</strong> Any attempt to use the technical interface of Safe Journey Club for illicit activities, 
            structuring financial transactions, bypassing sanctions, or executing unauthorized capital flight will result 
            in an immediate, permanent ban from the Platform, and data will be shared with the relevant authorities as 
            required by Irish and European Union law.
          </p>

          <h4>🗒 6. Limitation of Liability</h4>
          <p>
            <strong>6.1.</strong> In no event shall Safe Journey Club Limited, nor its directors (including non-resident 
            directors), employees, or affiliates, be held liable for any indirect, incidental, special, consequential, 
            or punitive damages arising out of third-party network downtimes, blockchain protocol failures (including 
            Solana or Ripple congestion), or the suspension of accounts by licensed EMI or crypto partners.
          </p>

          <h4>📅 7. Governing Law</h4>
          <p>
            <strong>7.1.</strong> These Terms shall be governed, construed, and enforced in accordance with the laws of 
            <strong> Ireland</strong>, without regard to its conflict of law provisions. Any legal actions arising from 
            the use of this software interface shall be resolved within the competent courts of Ireland.
          </p>
        </div>
        
        <div className="sj-modal-footer">
          <button className="sj-btn primary" onClick={onClose}>I Accept & Understand</button>
        </div>
      </div>
    </div>
  );
}

interface FooterProps {
  onOpenTerms: () => void;
}

function Footer({ onOpenTerms }: FooterProps): React.JSX.Element {
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
            <h4>Social</h4>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              X (Twitter)
            </a>
          </div>
          <div>
            <h4>Legal</h4>
            <button 
              onClick={onOpenTerms} 
              className="sj-footer-link-btn"
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left' }}
            >
              Terms of Service
            </button>
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
  const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false); // Новий стан для Sign In
  const [selectedTier, setSelectedTier] = useState<string>("Explorer");

  const handleOpenJoin = (tier: string) => {
    setSelectedTier(tier);
    setIsSignInOpen(false); // Закриваємо вікно входу, якщо перемикаємось на реєстрацію
    setIsJoinOpen(true);
  };

  return (
    <div className="sj-layout">
      {/* Передаємо обидва пропси управління вікнами */}
      <Navbar onJoinClick={handleOpenJoin} onSignInClick={() => setIsSignInOpen(true)} />
      
      <Hero onJoinClick={handleOpenJoin} />
      
      <main className="sj-main">
        <CryptoTransferSection />
        <BenefitsSection />
        <TravelAccessSection />
        <TiersSection onTierSelect={handleOpenJoin} /> 
        <FutureSection />
      </main>
      
      <Footer onOpenTerms={() => setIsTermsOpen(true)} />
      
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <JoinModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} selectedTier={selectedTier} />
      
      {/* Додаємо нове вікно входу в леяут */}
      <SignInModal 
        isOpen={isSignInOpen} 
        onClose={() => setIsSignInOpen(false)} 
        onSwitchToJoin={() => handleOpenJoin("Explorer")} 
      />
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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Тут у майбутньому буде запит до вашого Node.js бэкенду
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
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  required 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="sj-input-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {selectedTier === "Member" && (
              <div style={{ background: "#0d1117", padding: "12px", borderRadius: "8px", border: "1px solid #222733", fontSize: "0.85rem", color: "#a8b2d1" }}>
              💳 <strong>Membership Fee: €19/year</strong>. After clicking the button below, you will receive an invoice via Wise to activate your digital premium card.
          </div>
          )}

              {selectedTier === "Black Circle" && (
              <div style={{ background: "#0d1117", padding: "12px", borderRadius: "8px", border: "1px solid #222733", fontSize: "0.85rem", color: "#a8b2d1" }}>
              👑 <strong>Elite Membership Card Request</strong>. Your application will be sent directly to the club's board. We will contact you via email to schedule a private video call for verification and bespoke card minting.
          </div>
          )}


              <button type="submit" className="sj-btn primary" style={{ padding: "14px", width: "100%", marginTop: "10px" }}>
                {selectedTier === "Member" ? "Proceed to Payment" : "Create Free Account"}
              </button>
            </form>
          ) : (
            // Оновіть текст у блоці відображення успішного сабміту:
<div style={{ textAlign: "center", padding: "20px 0" }}>
  <h4 style={{ color: "#64ffda", fontSize: "1.3rem", marginBottom: "12px" }}>Welcome to the Club, {name}!</h4>
  <p style={{ color: "#a8b2d1", fontSize: "1rem", lineHeight: "1.6" }}>
    {selectedTier === "Member" && "We have generated your invoice. Check your email inbox shortly for the secure Wise activation link. Once paid, your Safe Journey Card will be activated!"}
    {selectedTier === "Explorer" && "Your Free Explorer account is ready. We've sent a temporary login token and access instructions to your email."}
    {selectedTier === "Black Circle" && "Your Black Circle application has been securely received. Our concierge team will review your profile and contact you within 24 hours to initiate your premium onboarding."}
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

