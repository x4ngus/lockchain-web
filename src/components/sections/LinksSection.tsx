import React from 'react';
import Section from '../layout/Section';

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
            The README walks through the system overview, quick start guide, configuration blueprint
            and console commands, all tied to the current release.
          </p>
          <div style={{ marginTop: '0.8rem' }}>
            <a
              href="https://github.com/x4ngus/lockchain-zfs"
              className="lc-btn lc-btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open GitHub repo
            </a>
          </div>
        </article>

        <article className="lc-card">
          <h3 className="lc-card-title">Docs &amp; decisions</h3>
          <p className="lc-card-body">
            The `docs/` tree and ADRs cover architecture, security considerations and design
            decisions behind the ZFS provider and workflow engine.
          </p>
          <div style={{ marginTop: '0.8rem', display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/x4ngus/lockchain-zfs/tree/main/docs"
              className="lc-btn lc-btn--ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Browse docs
            </a>
            <a
              href="https://github.com/x4ngus/lockchain-zfs/tree/main/docs/adr"
              className="lc-btn lc-btn--ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Architecture decisions
            </a>
          </div>
        </article>
      </div>
    </Section>
  );
};

export default LinksSection;
