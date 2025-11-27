import React from 'react';

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

const Shield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3l7 3v6.5c0 3.5-2.5 6.7-7 8.5-4.5-1.8-7-5-7-8.5V6z" />
  </svg>
);

const HeroSection: React.FC = () => {
  return (
    <div className="lc-hero-inner">
      {/* Hero copy: keep the voice plainspoken and operator-first; highlight problem, ambition, and how to engage. */}
      <div className="lc-hero-copy">
        <div className="lc-hero-kicker">ZFS · USB · Headless boot</div>
        <h1 className="lc-hero-title">
          A security key chain for paranoid lovers of encryption.
        </h1>
        <p className="lc-hero-tagline">
          LockChain pairs modern Rust software tooling with a transparent policy engine so you can unlock encrypted
          drives during early boot stages of Linux without losing observability or control.
        </p>

        <div className="lc-hero-actions">
          <a
            href="https://github.com/x4ngus/lockchain-zfs"
            className="lc-btn lc-btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowRight /> View project on GitHub
          </a>
          <a href="#overview" className="lc-btn lc-btn--ghost">
            <Shield /> Explore the idea first
          </a>
        </div>
      </div>

      <div className="lc-hero-visual">
        <div className="lc-hero-card">
          {/* Card answers “why” in one paragraph; stay honest about pain points and intent. */}
          <strong>What problem is LockChain trying to solve?</strong>
          <p style={{ margin: 0 }}>
            Encrypted storage is good. Locked out and wrestling with it at midnight is not. LockChain&apos;s
            ambition is a single, explicit workflow for unlocking encrypted datasets at early boot –
            Easy for system admins, fully automated for users, and transparent for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
