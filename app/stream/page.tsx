import PageHero from "../components/page-hero";
import StreamCabinet from "../components/stream-cabinet";

export default function StreamPage() {
  return <main className="subpage stream-page"><PageHero eyebrow="THE LIVE ARCADE" title="Stream + Chat" description="The complete Twitch experience lives here. Watch, talk and interact with the RydaGang without leaving the Funhouse." code="PLAYER 01 // ONLINE" /><section className="page-section page-section--stream"><StreamCabinet /><div className="stream-note"><p>The player begins muted so the cabinet never jumpscares your speakers. Twitch account sign-in and chat moderation remain handled securely inside Twitch.</p><a href="https://www.twitch.tv/jestertheryda" target="_blank" rel="noreferrer">Open directly on Twitch ↗</a></div></section></main>;
}
