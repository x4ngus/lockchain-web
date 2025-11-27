import React from 'react';
import Section from '../layout/Section';

const StorySection: React.FC = () => {
  return (
    /* Story section: frame motivations and trade-offs; stay candid and operator-centric. */
    <Section
      kicker="Story"
      title="Why bother with yet another encryption tool?"
      body="Because encrypted storage is only useful if people can live with it day to day. LockChain leans into that tension instead of pretending it doesn’t exist."
    >
      <div className="lc-grid lc-grid--2">
        <article className="lc-card">
          <h3 className="lc-card-title">Silent unlocks for better system usage</h3>
          <p className="lc-card-body">
            The project champions the view that unlocking an encrypted pool is a workflow, not a
            single command. There are decisions, fallbacks, retries and humans involved – all of
            which deserve explicit configuration.
          </p>
        </article>

        <article className="lc-card">
          <h3 className="lc-card-title">Make each trade‑off understood</h3>
          <p className="lc-card-body">
            LockChain does not claim to "fix" encryption. Instead, it tries to make the trade‑offs
            visible. What happens if the USB stick dies? How does encryption fail-safe? Lastly,
            what does the end-user actually see?
          </p>
        </article>

        <article className="lc-card">
          <h3 className="lc-card-title">Keep it honest, keep it open</h3>
          <p className="lc-card-body">
            The entire project lives on GitHub with an open configuration blueprint, console
            commands, ADRs and docs, so you can decide whether LockChain fits your risk appetite
            and achieves your security requirements.
          </p>
        </article>
      </div>
    </Section>
  );
};

export default StorySection;
