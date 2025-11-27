import React, { ReactNode } from 'react';

interface SectionProps {
  kicker?: string;
  title: string;
  body?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ kicker, title, body, children }) => (
  <>
    <header className="lc-section-header">
      {kicker && <div className="lc-section-kicker">{kicker}</div>}
      <h2 className="lc-section-title">{title}</h2>
      {body && <p className="lc-section-body">{body}</p>}
    </header>
    {children}
  </>
);

export default Section;
