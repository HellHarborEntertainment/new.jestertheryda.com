"use client";

import { useEffect } from "react";

type RedirectPortalProps = {
  destination: string;
  label: string;
  slug: string;
};

export default function RedirectPortal({ destination, label, slug }: RedirectPortalProps) {
  useEffect(() => {
    const redirect = window.setTimeout(() => window.location.replace(destination), 900);
    return () => window.clearTimeout(redirect);
  }, [destination]);

  const destinationHost = new URL(destination).hostname.replace(/^www\./, "");

  return (
    <main className="redirect-page">
      <div className="redirect-noise" aria-hidden="true" />
      <section className="redirect-terminal" aria-live="polite">
        <div className="redirect-lamps" aria-hidden="true">{Array.from({ length: 9 }, (_, index) => <i key={index} />)}</div>
        <p>HELL HARBOR ROUTING SYSTEM // LINK LOCKED</p>
        <span className="redirect-code">/{slug}</span>
        <h1 className="vampiress">Leaving the Funhouse</h1>
        <h2>ROUTING TO {label.toUpperCase()}</h2>
        <div className="redirect-progress" aria-hidden="true"><i /></div>
        <small>DESTINATION // {destinationHost}</small>
        <div className="redirect-actions">
          <a href={destination}>CONTINUE NOW ↗</a>
          <a href="/links">CANCEL // PRIZE COUNTER</a>
        </div>
      </section>
    </main>
  );
}
