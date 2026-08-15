"use client";

import { useEffect, useRef, useState } from "react";

const nav = [
  ["Music", "/music"], ["Lore", "/lore"], ["Stream", "/stream"],
  ["Shows", "/shows"], ["EPK", "/epk"], ["Links", "/links"], ["Contact", "/contact"],
];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("--:--:--");
  const [customCursor, setCustomCursor] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tick = () => setTime(new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date()));
    tick();
    const clock = window.setInterval(tick, 1000);
    return () => window.clearInterval(clock);
  }, []);

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      try {
        setCustomCursor(window.localStorage.getItem("jtr-custom-cursor") !== "system");
      } catch {
        // Custom cursor remains the default if storage is unavailable.
      }
    });
    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const body = document.body;
    let animationFrame = 0;

    body.classList.toggle("custom-cursor-enabled", customCursor);
    cursor?.classList.toggle("arcade-cursor--disabled", !customCursor);

    const move = (event: PointerEvent) => {
      if (!cursor || !customCursor || event.pointerType === "touch") return;
      const x = event.clientX;
      const y = event.clientY;
      const target = event.target instanceof Element ? event.target : null;
      const hot = Boolean(target?.closest("a, button, [role='button']"));

      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${x}px,${y}px,0)`;
        cursor.classList.toggle("arcade-cursor--hot", hot);
      });
    };
    const crossEmbedBoundary = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest("iframe")) cursor?.classList.add("arcade-cursor--embed");
    };
    const leaveEmbed = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest("iframe")) cursor?.classList.remove("arcade-cursor--embed");
    };
    const leaveWindow = () => cursor?.classList.add("arcade-cursor--outside");
    const enterWindow = () => cursor?.classList.remove("arcade-cursor--outside");

    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", crossEmbedBoundary, true);
    document.addEventListener("pointerout", leaveEmbed, true);
    document.documentElement.addEventListener("mouseleave", leaveWindow);
    document.documentElement.addEventListener("mouseenter", enterWindow);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      body.classList.remove("custom-cursor-enabled");
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", crossEmbedBoundary, true);
      document.removeEventListener("pointerout", leaveEmbed, true);
      document.documentElement.removeEventListener("mouseleave", leaveWindow);
      document.documentElement.removeEventListener("mouseenter", enterWindow);
    };
  }, [customCursor]);

  const toggleCursor = () => {
    setCustomCursor((enabled) => {
      const next = !enabled;
      try {
        window.localStorage.setItem("jtr-custom-cursor", next ? "custom" : "system");
      } catch {
        // The in-session toggle still works if storage is unavailable.
      }
      return next;
    });
  };

  return (
    <div className="site-stage">
      <div className="crt-lines" aria-hidden="true" />
      <div className="screen-glare" aria-hidden="true" />
      <div ref={cursorRef} className="arcade-cursor" aria-hidden="true" />
      <header className="cabinet-header">
        {/* Vinext's development RSC router currently throws during internal Link transitions; a full document navigation is deliberate here. */}
        <a className="cabinet-brand" href="/" aria-label="JesterTheRyda home">
          <img src="/media/jtr-mark.png" alt="" />
          <span className="vampiress">JesterTheRyda</span>
        </a>
        <nav className={menuOpen ? "cabinet-nav cabinet-nav--open" : "cabinet-nav"} aria-label="Primary navigation">
          {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a href="https://hellharbor.com/shop.html" target="_blank" rel="noreferrer">Shop ↗</a>
        </nav>
        <div className="cabinet-tools">
          <div className="cabinet-status"><span className="status-lamp" /> PST {time}</div>
          <button
            className={customCursor ? "cursor-toggle cursor-toggle--active" : "cursor-toggle"}
            type="button"
            aria-label={`Use ${customCursor ? "system" : "custom"} cursor`}
            aria-pressed={customCursor}
            title={`Cursor: ${customCursor ? "custom" : "system"}. Click to switch.`}
            onClick={toggleCursor}
          >
            <i aria-hidden="true" />
            <span>{customCursor ? "CUSTOM" : "SYSTEM"}</span>
          </button>
        </div>
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
