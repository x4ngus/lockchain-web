import React from 'react';
import Section from '../layout/Section';

const RoadmapSection: React.FC = () => {
  return (
    <Section
      kicker="Work in progress"
      title="This is an early access version of software."
      body="The fundamentals are in place, but the project is still iterating. Expect active development as more use cases, pathways and dependencies are worked on."
    >
      <div className="lc-grid lc-grid--2">
        <article className="lc-card">
          <h3 className="lc-card-title">User Experience, first</h3>
          <p className="lc-card-body">
            An innovative control deck (`lockchain-ui`) is presented to help guide the workflow
            engine, so users can see unlock state and policy outcomes without crawling through logs.
          </p>
        </article>

        <article className="lc-card">
          <h3 className="lc-card-title">Docs &amp; runbooks</h3>
          <p className="lc-card-body">
            More complete install and troubleshooting guides are on the roadmap, covering failure
            modes like degraded pools, broken hardware and misconfigured datasets, as well as
            security operations guides.
          </p>
        </article>

        <article className="lc-card">
          <h3 className="lc-card-title">Threat model &amp; hardening</h3>
          <p className="lc-card-body">
            A formal threat model and attack surface document will spell out assumptions, requirements
            and recommended hardening measures, so users can be fully informed before adopting LockChain.
          </p>
        </article>

      </div>
    </Section>
  );
};

export default RoadmapSection;
