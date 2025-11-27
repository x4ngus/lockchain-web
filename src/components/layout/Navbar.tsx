import React, { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Story', href: '#story' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Links', href: '#links' }
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <header className="lc-navbar">
      <div className="lc-container lc-navbar-inner">
        <a href="#top" onClick={close} aria-label="LockChain ZFS home">
          <div className="lc-navbar-title">
            <span className="lc-navbar-title-main">LOCKCHAIN ZFS</span>
            <span className="lc-navbar-title-sub">Security chain for encrypted storage</span>
          </div>
        </a>

        <nav aria-label="Main navigation">
          <button
            type="button"
            className="lc-navbar-toggle"
            onClick={toggle}
            aria-expanded={open}
          >
            ☰ <span>Menu</span>
          </button>

          <div className={open ? 'lc-navbar-links lc-navbar-links--open' : 'lc-navbar-links'}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="lc-navbar-link"
                onClick={close}
              >
                {item.label}
              </a>
            ))}

            <div className="lc-navbar-cta">
              <a
                href="https://github.com/x4ngus/lockchain-zfs"
                target="_blank"
                rel="noopener noreferrer"
                className="lc-btn lc-btn--ghost"
              >
                GitHub
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
