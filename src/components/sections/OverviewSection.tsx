import React from 'react';
import Section from '../layout/Section';

const OverviewSection: React.FC = () => {
  return (
    <Section
      kicker="Overview"
      title="One workflow, several surfaces."
      body="LockChain routes unlock logic through a single policy engine. CLI, daemon, USB watcher and control deck are all different viewpoints on the same configuration."
    >
      <div className="lc-grid lc-grid--3">
        <article className="lc-card">
          <div className="lc-card-tag">Objective</div>
          <h3 className="lc-card-title">Unlock encrypted ZFS deliberately</h3>
          <p className="lc-card-body">
            The project&apos;s goal is a unique unlock workflow for encrypted ZFS datasets, where
            behaviour is driven by configuration instead of scattered shell fragments.
          </p>
        </article>

        <article className="lc-card">
          <div className="lc-card-tag">Surfaces</div>
          <h3 className="lc-card-title">Same rules, many faces</h3>
          <p className="lc-card-body">
            CLI, daemon, UI and USB watcher all route through the same engine. Whether you&apos;re
            on a console, in logs or in a TUI, you&apos;re looking at the same story.
          </p>
        </article>

        <article className="lc-card">
          <div className="lc-card-tag">Posture</div>
          <h3 className="lc-card-title">Comfort without complacency</h3>
          <p className="lc-card-body">
            The README calls it out directly: LockChain aims to improve interactions with encrypted
            file systems without trivialising your security posture or hiding what happens at boot.
          </p>
        </article>
      </div>
    </Section>
  );
};

export default OverviewSection;
