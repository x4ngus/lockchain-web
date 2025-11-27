import React from 'react';
import Section from '../layout/Section';

const StorySection: React.FC = () => {
  return (
    <Section
      kicker="Story"
      title="Why bother with yet another ZFS helper?"
      body="Because encrypted storage is only useful if people can live with it day to day. LockChain leans into that tension instead of pretending it doesn’t exist."
    >
      <div className="lc-grid lc-grid--2">
        <article className="lc-card">
          <h3 className="lc-card-title">Treat unlocks as workflows</h3>
          <p className="lc-card-body">
            The project starts from the view that unlocking an encrypted pool is a workflow, not a
            single command. There are decisions, fallbacks, retries and humans involved – all of
            which deserve explicit configuration.
          </p>
        </article>

        <article className="lc-card">
          <h3 className="lc-card-title">Make the trade‑offs visible</h3>
          <p className="lc-card-body">
            LockChain does not claim to "fix" encryption. Instead, it tries to make the trade‑offs
            legible: what happens if the USB stick dies, how fallbacks behave, where logs go, and
            what on‑call engineers will actually see.
          </p>
        </article>

        <article className="lc-card">
          <h3 className="lc-card-title">Focus on operators</h3>
          <p className="lc-card-body">
            Module names like `lockchain-cli`, `lockchain-daemon`, `lockchain-key-usb` and
            `lockchain-ui` hint at the real intent: give operators more than one way to observe and
            steer the unlock path, all backed by the same engine.
          </p>
        </article>

        <article className="lc-card">
          <h3 className="lc-card-title">Keep it honest, keep it open</h3>
          <p className="lc-card-body">
            The entire project lives on GitHub with an open configuration blueprint, console
            commands, ADRs and docs, so you can decide whether LockChain fits your risk appetite
            instead of guessing.
          </p>
        </article>
      </div>
    </Section>
  );
};

export default StorySection;
