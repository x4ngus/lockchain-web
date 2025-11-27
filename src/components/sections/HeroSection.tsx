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
      <div className="lc-hero-copy">
        <div className="lc-hero-kicker">Rust · ZFS · Early boot</div>
        <h1 className="lc-hero-title">
          A security chain for encrypted ZFS that operators can actually read.
        </h1>
        <p className="lc-hero-tagline">
          LockChain ZFS pairs Rust-first tooling with a transparent policy engine so you can unlock encrypted
          pools during early boot without losing observability or control. Designed to match the austere style
          of the upstream project, but with a calmer interface built for long nights in the lab.
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
            <Shield /> Explore the idea
          </a>
        </div>

        <div className="lc-hero-meta">
          <span className="lc-badge">Rust 2021</span>
          <span className="lc-badge">Encrypted ZFS</span>
          <span className="lc-badge">CLI · Daemon · USB watcher · TUI</span>
        </div>
      </div>

      <div className="lc-hero-visual">
        <div className="lc-hero-card">
          <div className="lc-pill">
            <Shield /> Policy-first flow
          </div>
          <strong>What problem is LockChain trying to solve?</strong>
          <p style={{ margin: 0 }}>
            Encrypted storage is good. Wrestling with it at 03:00 on a degraded host is not. LockChain&apos;s
            ambition is a single, explicit workflow for unlocking encrypted ZFS datasets at early boot –
            visible to operators, friendly to automation, and honest about the trade-offs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
