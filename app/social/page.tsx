import PageHero from "../components/page-hero";
import SocialFeed from "../components/social-feed";

export default function SocialPage() {
  return <main className="subpage"><PageHero eyebrow="THE BARKER'S BOOTH" title="Social Feed" description="Fresh noise from JesterTheRyda across the internet, preserved from the original site's embedded feed." code="NETWORK // X" /><section className="page-section social-page-grid"><div><p className="terminal-label">PUBLIC TRANSMISSION</p><h2>I like talking shit on the internet.</h2><p>Follow the official account for music announcements, live-show notices, project updates and whatever else escapes the Funhouse.</p><a href="https://nav.JesterTheRyda.com/twitter" target="_blank" rel="noreferrer">FOLLOW ON X ↗</a></div><SocialFeed /></section></main>;
}
