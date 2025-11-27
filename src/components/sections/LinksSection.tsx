import React from 'react';
import Section from '../layout/Section';

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.09-.74.09-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.52 1 .11-.8.42-1.33.76-1.64-2.67-.3-5.48-1.34-5.48-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.5.12-3.13 0 0 1-.32 3.3 1.23a11.4 11.4 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.63.25 2.83.12 3.13.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.43.38.82 1.12.82 2.26v3.35c0 .32.21.7.82.58A12 12 0 0012 .5z" />
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
    <path d="M6 4h11a2 2 0 012 2v12.5a.5.5 0 01-.78.41L15 16H7a1 1 0 00-1 1v-13a1 1 0 011-1z" />
  </svg>
);

const LinksSection: React.FC = () => {
  return (
    <Section
      kicker="Dig deeper"
      title="This site is the front door, not the source of truth."
      body="When you’re ready to read real docs, look at the repository. This page is meant to give you enough context to decide whether that’s worth your time."
    >
      <div className="lc-grid lc-grid--2">
        <article className="lc-card">
          <h3 className="lc-card-title">Repository &amp; README</h3>
          <p className="lc-card-body">
            The README walks through the system overview, quick start guide, configuration blueprint and console
            commands, all tied to the current release.
          </p>
          <div style={{ marginTop: '0.8rem' }}>
            <a
              href="https://github.com/x4ngus/lockchain-zfs"
              className="lc-btn lc-btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon /> Open GitHub repo
            </a>
          </div>
        </article>

        <article className="lc-card">
          <h3 className="lc-card-title">Docs &amp; decisions</h3>
          <p className="lc-card-body">
            The `docs/` tree and ADRs cover architecture, security considerations and design decisions behind the
            ZFS provider and workflow engine.
          </p>
          <div style={{ marginTop: '0.8rem', display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/x4ngus/lockchain-zfs/tree/main/docs"
              className="lc-btn lc-btn--ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookIcon /> Browse docs
            </a>
            <a
              href="https://github.com/x4ngus/lockchain-zfs/tree/main/docs/adr"
              className="lc-btn lc-btn--ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookIcon /> Architecture decisions
            </a>
          </div>
        </article>
      </div>
    </Section>
  );
};

export default LinksSection;
