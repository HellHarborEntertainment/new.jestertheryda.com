"use client";

import { useState, useSyncExternalStore } from "react";

export default function StreamCabinet() {
  const [chatOpen, setChatOpen] = useState(true);
  const [theater, setTheater] = useState(false);
  const parent = useSyncExternalStore(() => () => {}, () => window.location.hostname, () => "");
  const player = parent ? `https://player.twitch.tv/?channel=jestertheryda&parent=${encodeURIComponent(parent)}&autoplay=false&muted=true` : "";
  const chat = parent ? `https://www.twitch.tv/embed/jestertheryda/chat?parent=${encodeURIComponent(parent)}&darkpopout` : "";
  return <div className={`stream-rig ${theater ? "stream-rig--theater" : ""} ${chatOpen ? "" : "stream-rig--no-chat"}`}>
    <div className="stream-toolbar"><div><i /> CHANNEL: JESTERTHERYDA</div><div><button type="button" onClick={() => setTheater(!theater)}>{theater ? "EXIT THEATER" : "THEATER MODE"}</button><button type="button" onClick={() => setChatOpen(!chatOpen)}>{chatOpen ? "HIDE CHAT" : "SHOW CHAT"}</button></div></div>
    <div className="stream-player">{player ? <iframe src={player} title="JesterTheRyda Twitch stream" allowFullScreen /> : <p>WARMING UP THE TUBES...</p>}</div>
    {chatOpen && <div className="stream-chat"><header><span>LIVE CHAT</span><b>RYDAGANG COMMS</b></header>{chat ? <iframe src={chat} title="JesterTheRyda Twitch chat" /> : <p>CONNECTING...</p>}</div>}
    <div className="stream-panel"><span>VOLUME</span><i /><i /><b>JTR BROADCAST CABINET</b><i /><span>SIGNAL</span></div>
  </div>;
}
