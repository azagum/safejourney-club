import React from "react";
import "../index.css";

const RewardsPage: React.FC = () => {
  return (
    <main className="sj-main sj-section">
      <div className="sj-section-header">
        <h1>Member Rewards</h1>
        <p>
          Rewards are part of your Safe Journey Club membership.
          They are powered by trusted partners and evolve over time.
        </p>
      </div>

      {/* Wallester */}
      <section className="sj-card sj-card-wide">
        <h2>Safe Journey × Wallester</h2>

        <p>
          Use your Wallester card for travel-related payments and automatically
          participate in curated member reward programs.
        </p>

        <ul className="sj-list">
          <li>No points or registrations</li>
          <li>Available to active members</li>
          <li>Monthly curated rewards</li>
        </ul>

        <div className="sj-divider" />

        <h4>How it works</h4>
        <ol className="sj-list">
          <li>Become a Safe Journey Club member</li>
          <li>Use your Wallester card for travel spending</li>
          <li>Participate automatically in rewards</li>
        </ol>

        <p className="sj-note">
          This program is in pilot phase. Terms may evolve.
        </p>
      </section>

      {/* Travel partners */}
      <section className="sj-card sj-card-wide">
        <h2>Travel Booking Partners</h2>

        <p>
          Book flights and hotels via trusted travel partners.
          Your bookings support the Safe Journey Club ecosystem.
        </p>

        <ul className="sj-list">
          <li>Global booking platforms</li>
          <li>No Safe Journey markups</li>
          <li>Partner benefits added progressively</li>
        </ul>

        <div className="sj-divider" />

        <h4>How it works</h4>
        <ol className="sj-list">
          <li>Search via a Safe Journey partner</li>
          <li>Complete your booking externally</li>
          <li>Member benefits unlock over time</li>
        </ol>

        <p className="sj-note">
          Partner list and conditions evolve as the club grows.
        </p>
      </section>
    </main>
  );
};

export default RewardsPage;
