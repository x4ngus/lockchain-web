import React from 'react';

const WorkInProgressBanner: React.FC = () => (
  /* Banner stays factual; remind readers the repo is the live source. */
  <div className="lc-banner" role="note" aria-label="Work in progress notice">
    <div className="lc-container lc-banner-inner">
      <span className="lc-banner-badge">Under Construction</span>
      <span>
        LockChain is evolving in the open. Behaviour, usability and platform support may change over time.
      </span>
    </div>
  </div>
);

export default WorkInProgressBanner;
