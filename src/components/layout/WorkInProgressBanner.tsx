import React from 'react';

const WorkInProgressBanner: React.FC = () => {
  return (
    <div className="lc-wip-banner">
      <div className="lc-container lc-wip-banner-inner">
        <span className="lc-wip-pill">Work in progress</span>
        <span>
          LockChain ZFS is an evolving 0.x series project. Behaviour, flags and UX may change between
          releases; always treat the README and docs as the source of truth.
        </span>
      </div>
    </div>
  );
};

export default WorkInProgressBanner;
