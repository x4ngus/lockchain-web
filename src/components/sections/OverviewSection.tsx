import React from 'react';
import Section from '../layout/Section';

const OverviewSection: React.FC = () => {
  return (
    <Section
      kicker="Overview"
      title="One workflow, flexible encryption protocols."
      body="LockChain routes unlock logic through a single policy engine. CLI, daemon, USB watcher and control deck UI are all different viewpoints on the same platform."
    >
      <div className="lc-grid lc-grid--3">
        <article className="lc-card">
          <h3 className="lc-card-title">Keep your files safeguarded</h3>
          <p className="lc-card-body">
            The project&apos;s goal is to provide unique unlock workflow for encrypted datasets.
            Creating ideal key-based security mechanisms for protected file systems.
          </p>
        </article>

        <article className="lc-card">
          <h3 className="lc-card-title">Same rules, many faces</h3>
          <p className="lc-card-body">
            CLI, daemon, UI and USB watcher all route through the same engine. Whether you&apos;re
            on a console, in logs or via UI, you&apos;re looking at the same workflow logic.
          </p>
        </article>

        <article className="lc-card">
          <h3 className="lc-card-title">Comfort without complacency</h3>
          <p className="lc-card-body">
            LockChain aims to improve upon the native ZFS encryption protocols 
            without trivialising your security posture or hiding what happens at boot.
          </p>
        </article>
      </div>
    </Section>
  );
};

export default OverviewSection;
