import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="lc-hero-inner">
      <div className="lc-hero-copy">
        <div className="lc-hero-kicker">Rust · ZFS · Early boot</div>
        <h1 className="lc-hero-title">
          A security chain for encrypted ZFS, built to be understood.
        </h1>
        <p className="lc-hero-tagline">
          LockChain ZFS is an open-source experiment in making encrypted ZFS less painful and more
          predictable: USB‑key driven unlock at early boot, backed by a policy engine you can read,
          audit and extend.
        </p>

        <div className="lc-hero-actions">
          <a
            href="https://github.com/x4ngus/lockchain-zfs"
            className="lc-btn lc-btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project on GitHub
          </a>
          <a
            href="#overview"
            className="lc-btn lc-btn--ghost"
          >
            Explore the idea
          </a>
        </div>

        <div className="lc-hero-meta">
          <span className="lc-badge">Rust 2021</span>
          <span className="lc-badge">Encrypted ZFS focus</span>
          <span className="lc-badge">CLI · daemon · USB watcher · TUI</span>
        </div>
      </div>

      <div className="lc-hero-visual">
        <div className="lc-hero-card">
          <strong>What problem is LockChain trying to solve?</strong>
          <p style={{ marginTop: '0.5rem' }}>
            Encrypted storage is good. Wrestling with it at 03:00 on a degraded host is not.
            LockChain&apos;s ambition is a single, explicit workflow for unlocking encrypted ZFS
            datasets at early boot – visible to operators, friendly to automation, and honest about
            the trade‑offs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
