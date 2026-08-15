"use client";

import { useEffect, useRef, useState } from "react";
import ReleaseGrid from "./components/release-grid";

export default function Home() {
  const [secret, setSecret] = useState(false);
  const [cabinetOn, setCabinetOn] = useState(true);
  const keys = useRef<string[]>([]);

  useEffect(() => {
    const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    const listen = (event: KeyboardEvent) => {
      keys.current = [...keys.current, event.key].slice(-code.length);
      if (keys.current.join("|").toLowerCase() === code.join("|").toLowerCase()) setSecret(true);
    };
    window.addEventListener("keydown", listen);
    return () => window.removeEventListener("keydown", listen);
  }, []);

  return (
    <main>
      <section className={`arcade-hero ${cabinetOn ? "" : "arcade-hero--off"}`}>
        <div className="marquee-bulbs marquee-bulbs--hero" aria-hidden="true">{Array.from({ length: 22 }, (_, i) => <i key={i} />)}</div>
        <div className="arcade-sky" aria-hidden="true"><span /><span /><span /></div>
        <div className="hero-console">
          <p className="boot-copy">HELL HARBOR ARCADE SYSTEM // JTR-86<br />SIGNAL LOCKED: GRAYS HARBOR, WA</p>
          <div className="logo-lockup">
            <small>WELCOME TO THE</small>
            <h1 className="vampiress">JesterTheRyda</h1>
            <strong>FUNHOUSE</strong>
          </div>
          <p className="hero-tagline">MUSICIAN • ACTOR • PRODUCER • DIRECTOR • VOICE ARTIST • DIGITAL TROUBLEMAKER</p>
          <div className="hero-controls">
            <a className="start-button" href="/music"><span>START</span> ENTER THE FUNHOUSE</a>
            <button className="power-button" type="button" onClick={() => setCabinetOn(!cabinetOn)} aria-pressed={!cabinetOn}><i /> CRT POWER</button>
          </div>
        </div>
        <button className="hero-character hero-character--illustrated" type="button" onClick={() => setSecret(true)} aria-label="JesterTheRyda. Activate hidden character select.">
          <span className="character-aura" />
          <img src="/media/jtr-emote-flipoff.webp" alt="Cartoon JesterTheRyda wearing sunglasses and a jester hat" />
          <small>PLAYER 01</small>
        </button>
        <div className="arcade-floor" aria-hidden="true" />
        <div className="hero-hud"><span>HIGH SCORE 666666</span><span>1 PLAYER</span><span>CREDIT 01</span></div>
      </section>

      <div className="carnival-ticker"><div>STEP RIGHT UP • HOME OF THE RYDAGANG • RAW &amp; UNCENSORED • THE SHOW NEVER ENDS • STEP RIGHT UP • HOME OF THE RYDAGANG • RAW &amp; UNCENSORED • THE SHOW NEVER ENDS •</div></div>

      <section className="attraction attraction--video">
        <div className="attraction-label"><span>ATTRACTION 01</span><b>NOW SHOWING</b></div>
        <div className="video-cabinet">
          <div className="video-copy">
            <small>FEATURED TRANSMISSION</small>
            <h2>For The<br />Juggs</h2>
            <p>Written and performed by JesterTheRyda. From the album <em>I Still Exist</em>.</p>
            <a href="https://www.youtube.com/watch?v=nUSb8A_fi40" target="_blank" rel="noreferrer">WATCH ON YOUTUBE ↗</a>
          </div>
          <div className="tube-frame">
            <div className="tube-screen"><iframe src="https://www.youtube-nocookie.com/embed/nUSb8A_fi40?rel=0" title="For The Juggs official lyric video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
            <div className="tube-controls"><i /><i /><span>JTR VIDEO SYSTEM</span><b>CH 01</b></div>
          </div>
        </div>
      </section>

      <section className="attraction attraction--poison">
        <div className="attraction-label"><span>ATTRACTION 02</span><b>THE RECORD RACK</b></div>
        <div className="poison-heading"><div><small>SELECT YOUR FATE</small><h2>Pick Your Poison</h2></div><p>The cabinet is built to keep growing. Every new release and featured appearance earns another playable slot.</p></div>
        <ReleaseGrid compact />
        <div className="center-action"><a href="/music">VIEW FULL DISCOGRAPHY <span>→</span></a></div>
      </section>

      <section className="attraction attraction--map">
        <div className="attraction-label"><span>ATTRACTION 03</span><b>CHOOSE A DOOR</b></div>
        <div className="funhouse-map">
          <a href="/lore"><span>01</span><h3>Hall of Lore</h3><p>Lost tapes, treatment logs and forbidden files.</p><b>ENTER ↗</b></a>
          <a href="/stream" className="featured-door"><span>02</span><h3>Live Arcade</h3><p>Watch the Twitch stream and join the chat without leaving the Funhouse.</p><b>WATCH ↗</b></a>
          <a href="/shows"><span>03</span><h3>Big Top</h3><p>Shows, appearances, tickets and booking.</p><b>ENTER ↗</b></a>
          <a href="/epk"><span>04</span><h3>Press Booth</h3><p>Bio, credits, contacts and electronic press kit.</p><b>ENTER ↗</b></a>
        </div>
      </section>

      <section className="midway-callout">
        <p>THE FUNHOUSE IS ALWAYS TRANSMITTING</p>
        <h2>Catch the whole<br />show live.</h2>
        <a href="/stream"><i /> ENTER THE STREAM ARCADE <span>→</span></a>
      </section>

      {secret && <div className="secret-screen" role="dialog" aria-modal="true" aria-label="Hidden character select"><button type="button" onClick={() => setSecret(false)}>CLOSE [X]</button><div><img src="/media/jtr-mark.png" alt="JTR mark" /><p>SECRET CHARACTER UNLOCKED</p><h2 className="vampiress">The Jester Never Left</h2><code>&gt; RYDAGANG CHANNEL OPEN<br />&gt; HIGH SCORE PRESERVED<br />&gt; MORE TRANSMISSIONS PENDING...</code><a href="/links">CONTINUE? [Y]</a></div></div>}
    </main>
  );
}
