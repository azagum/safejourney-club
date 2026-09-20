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
            <button className="sj-btn ghost sj-btn-large">
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
  const openTripFlights = (): void => {
    window.open(
      "https://www.trip.com/flights/?Allianceid=7455498&SID=283527301",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openTripHotels = (): void => {
    window.open(
      "https://www.trip.com/t/2uaIDWYHiS2",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="sj-section sj-section-alt">
      <div className="sj-section-header">
        <h2>Smarter flights, without friction</h2>
        <p>
          Compare routes and prices with a trusted global booking partner.
          Book directly — Safe Journey does not add a markup.
        </p>
      </div>

      <div className="sj-flight-box">
        <div className="sj-flight-form">
          <input placeholder="From" />
          <input placeholder="To" />
          <input type="date" />
          <input type="date" />

          <button
            className="sj-btn primary"
            onClick={openTripFlights}
          >
            Find best flight options
          </button>
        </div>

        <div className="sj-flight-actions">
          <button
            className="sj-btn ghost"
            onClick={openTripHotels}
          >
            Search hotels & stays
          </button>
        </div>

        <p className="sj-flight-note">
          You will be redirected to a trusted booking partner.
          Member benefits and additional travel products are coming soon.
        </p>
      </div>
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
            className={`sj-tier ${
              tier.badge ? "sj-tier-highlight" : ""
            }`}
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

  return (
    <div className="sj-layout">
      <Navbar />
      <Hero />
      <main className="sj-main">
        <CryptoTransferSection />
        <BenefitsSection />
        <TravelAccessSection />
        <TiersSection />
        <FutureSection />
      </main>
      <Footer onOpenTerms={() => setIsTermsOpen(true)} />
      
      {/* Модальне вікно з правилами */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </div>
  );
}

