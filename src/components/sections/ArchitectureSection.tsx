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
            `zfs`/`zpool` binaries. The ZFS provider maps exit codes and parses output so there
            are no uncomfortable guessing games.
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
          <h3 className="lc-card-title">Passkey recovery methods</h3>
          <p className="lc-card-body">
            Intuitive key rebuild mechanisim using secure recovery codes. As for actual 
            key usage - Retry budgets, backoff and jitter are configuration, not afterthoughts,
            so you can tune how hard the system should try before giving up.
          </p>
        </article>

      </div>
    </Section>
  );
};

export default ArchitectureSection;
