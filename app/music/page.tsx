import PageHero from "../components/page-hero";
import ReleaseGrid from "../components/release-grid";

export default function MusicPage() {
  return <main className="subpage"><PageHero eyebrow="THE RECORD RACK" title="Pick Your Poison" description="The complete JesterTheRyda discography and featured appearances. New releases can be added without rebuilding the attraction." code="GAME MODE // MUSIC" /><section className="page-section"><ReleaseGrid /><div className="streaming-strip"><p>CHOOSE YOUR PLATFORM</p><a href="https://nav.JesterTheRyda.com/spotify" target="_blank" rel="noreferrer">Spotify ↗</a><a href="https://nav.JesterTheRyda.com/apple" target="_blank" rel="noreferrer">Apple Music ↗</a><a href="https://nav.JesterTheRyda.com/soundcloud" target="_blank" rel="noreferrer">SoundCloud ↗</a><a href="https://nav.JesterTheRyda.com/youtube" target="_blank" rel="noreferrer">YouTube ↗</a></div></section></main>;
}
