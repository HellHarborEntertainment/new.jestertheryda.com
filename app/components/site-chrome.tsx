"use client";

import { useEffect, useState } from "react";

const nav = [
  ["Music", "/music"], ["Lore", "/lore"], ["Stream", "/stream"],
  ["Shows", "/shows"], ["EPK", "/epk"], ["Social", "/social"], ["Links", "/links"], ["Contact", "/contact"],
];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("--:--:--");
  const [cursor, setCursor] = useState({ x: -100, y: -100, hot: false });

  useEffect(() => {
    const tick = () => setTime(new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date()));
    tick();
    const clock = window.setInterval(tick, 1000);
    const move = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY, hot: Boolean((event.target as HTMLElement | null)?.closest("a, button")) });
    window.addEventListener("mousemove", move, { passive: true });
    return () => { window.clearInterval(clock); window.removeEventListener("mousemove", move); };
  }, []);

  return (
    <div className="site-stage">
      <div className="crt-lines" aria-hidden="true" />
      <div className="screen-glare" aria-hidden="true" />
      <div className={`arcade-cursor ${cursor.hot ? "arcade-cursor--hot" : ""}`} style={{ transform: `translate3d(${cursor.x}px,${cursor.y}px,0)` }} aria-hidden="true" />
      <header className="cabinet-header">
        {/* Vinext's development RSC router currently throws during internal Link transitions; a full document navigation is deliberate here. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a className="cabinet-brand" href="/" aria-label="JesterTheRyda home">
          <img src="/media/jtr-mark.png" alt="" />
          <span className="vampiress">JesterTheRyda</span>
        </a>
        <nav className={menuOpen ? "cabinet-nav cabinet-nav--open" : "cabinet-nav"} aria-label="Primary navigation">
          {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a href="https://hellharbor.com/shop.html" target="_blank" rel="noreferrer">Shop ↗</a>
        </nav>
        <div className="cabinet-status"><span className="status-lamp" /> PST {time}</div>
        <button className="cabinet-menu" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "CLOSE" : "MENU"}</button>
      </header>
      {children}
      <footer className="cabinet-footer">
        <div className="footer-bulbs" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <i key={i} />)}</div>
        <div><span className="vampiress">JesterTheRyda</span><small>HOME OF THE RYDAGANG</small></div>
        <p>© 2018–2026 Hell Harbor Entertainment. All rights reserved.</p>
        <a href="/links">Insert coin to continue →</a>
      </footer>
    </div>
  );
}
