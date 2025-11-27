import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className="lc-footer-inner">
      <div>
        <div>© {year} LockChain ZFS.</div>
        <div>Exploring safer unlock workflows for encrypted ZFS at early boot.</div>
      </div>

      <div className="lc-footer-links">
        <a
          href="https://github.com/x4ngus/lockchain-zfs"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://github.com/x4ngus/lockchain-zfs/tree/main/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docs
        </a>
        <a
          href="https://github.com/x4ngus/lockchain-zfs/security"
          target="_blank"
          rel="noopener noreferrer"
        >
          Security policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
