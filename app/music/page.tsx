import PageHero from "../components/page-hero";
import ReleaseGrid from "../components/release-grid";

export default function MusicPage() {
  return <main className="subpage"><PageHero eyebrow="THE RECORD RACK" title="Pick Your Poison" description="The complete JesterTheRyda discography and featured appearances. New releases can be added without rebuilding the attraction." code="GAME MODE // MUSIC" /><section className="page-section"><ReleaseGrid /><div className="streaming-strip"><p>CHOOSE YOUR PLATFORM</p><a href="/spotify">Spotify ↗</a><a href="/apple">Apple Music ↗</a><a href="/soundcloud">SoundCloud ↗</a><a href="/youtube">YouTube ↗</a></div></section></main>;
}
