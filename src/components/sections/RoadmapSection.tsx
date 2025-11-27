import React from 'react';
import Section from '../layout/Section';

const RoadmapSection: React.FC = () => {
  return (
    <Section
      kicker="Work in progress"
      title="This is a 0.x project, on purpose."
      body="The fundamentals exist, but the project is still finding its shape. Expect active iteration as more edge cases, UX paths and docs are discovered."
    >
      <div className="lc-grid lc-grid--2">
        <article className="lc-card">
          <h3 className="lc-card-title">UI &amp; operator experience</h3>
          <p className="lc-card-body">
            A keyboard‑first control deck (`lockchain-ui`) is being wired into the same workflow
            engine, so operators can see unlock state and policy outcomes without living in logs.
          </p>
        </article>

        <article className="lc-card">
          <h3 className="lc-card-title">Docs &amp; runbooks</h3>
          <p className="lc-card-body">
            More complete install and troubleshooting guides are on the roadmap, covering failure
            modes like degraded pools, missing sticks and misconfigured datasets, as well as
            day‑two operations.
          </p>
        </article>

        <article className="lc-card">
          <h3 className="lc-card-title">Threat model &amp; hardening</h3>
          <p className="lc-card-body">
            A formal threat model and attack surface document will spell out assumptions, non‑goals
            and recommended hardening measures, so teams can map LockChain onto their own controls.
          </p>
        </article>

        <article className="lc-card">
          <h3 className="lc-card-title">Edge cases &amp; telemetry</h3>
          <p className="lc-card-body">
            Additional test suites for unusual ZFS layouts, optional telemetry with pluggable sinks,
            and performance profiling helpers are all under consideration as the user base grows.
          </p>
        </article>
      </div>
    </Section>
  );
};

export default RoadmapSection;
