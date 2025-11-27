import React from 'react';
import Section from '../layout/Section';

const ArchitectureSection: React.FC = () => {
  return (
    <Section
      kicker="Architecture"
      title="Policy-driven, not magic-driven."
      body="LockChain hangs off a single configuration file that describes your datasets, binaries, timeouts and USB expectations. Everything else is wiring."
    >
      <div className="lc-grid lc-grid--2">
        <article className="lc-card">
          <h3 className="lc-card-title">Policy &amp; provider</h3>
          <p className="lc-card-body">
            A core policy engine orchestrates unlock attempts against the host&apos;s native
            `zfs`/`zpool` binaries. The ZFS provider maps exit codes and parses output into stable,
            testable behaviour instead of ad‑hoc parsing.
          </p>
        </article>

        <article className="lc-card">
          <h3 className="lc-card-title">USB key workflow</h3>
          <p className="lc-card-body">
            A dedicated USB stick carries key material. Policy can describe labels, UUIDs, key
            paths, checksums and mount timeouts, so the vault only opens when the right device is
            present and healthy.
          </p>
        </article>

        <article className="lc-card">
          <h3 className="lc-card-title">Fallback &amp; retries</h3>
          <p className="lc-card-body">
            Fallback behaviour – including passphrase prompts via `systemd-ask-password` – is
            explicit. Retry budgets, backoff and jitter are configuration, not afterthoughts, so you
            can tune how hard the system should try before giving up.
          </p>
        </article>

        <article className="lc-card">
          <h3 className="lc-card-title">Signals for the rest of the stack</h3>
          <p className="lc-card-body">
            Surfaces expose structured error codes and a health responder, making it easier to plug
            LockChain into logging, metrics and alerting pipelines rather than treating it as a
            one-off init script.
          </p>
        </article>
      </div>
    </Section>
  );
};

export default ArchitectureSection;
