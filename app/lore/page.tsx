import PageHero from "../components/page-hero";
import LoreReader from "../components/lore-reader";

export default function LorePage() {
  return <main className="subpage lore-page"><PageHero eyebrow="HARBOR'S HOLLOW ARCHIVE" title="Lore of the Jester" description="The complete on-site archive: origins, the Jester's Privilege, treatment records and the stories behind the releases." code="ACCESS // RESTRICTED" /><section className="archive-shell"><aside><p>ARCHIVE DIRECTORY</p><a href="#who-is-jestertheryda">Who Is JesterTheRyda</a><a href="#the-jester-s-privilege">Jester&apos;s Privilege</a><a href="#straight-outta-washingstoned-2015">Early recordings</a><a href="#antisocial-emotional-man-inside-aemi-2023">Harbor&apos;s Hollow</a><a href="#i-still-exist-2018-2023">I Still Exist</a><a href="#mobster-moves-2024">Mobster Moves</a><small>Original archive preserved in full. Reader discretion advised.</small></aside><LoreReader /></section></main>;
}
