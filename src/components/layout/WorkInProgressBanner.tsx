import React from 'react';

const WorkInProgressBanner: React.FC = () => (
  /* Banner stays factual; remind readers the repo is the live source. */
  <div className="lc-banner" role="note" aria-label="Work in progress notice">
    <div className="lc-container lc-banner-inner">
      <span className="lc-banner-badge">Work in progress</span>
      <span>
        LockChain ZFS is evolving in the open. Behaviour, flags and UX may change; the repository is the
        canonical source of truth.
      </span>
    </div>
  </div>
);

export default WorkInProgressBanner;
