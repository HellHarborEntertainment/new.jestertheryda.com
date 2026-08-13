import { releases } from "../data";

export default function ReleaseGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`poison-grid ${compact ? "poison-grid--compact" : ""}`}>
      {releases.map((release, index) => (
        <a className="poison-card" href={release.href} target="_blank" rel="noreferrer" key={release.title}>
          <div className="poison-screen">
            <img src={release.image} alt={`${release.title} cover artwork`} />
            <span className="poison-scan" />
            <span className="poison-player">P{String(index + 1).padStart(2, "0")}</span>
            <span className="poison-action">PLAY ↗</span>
          </div>
          <div className="poison-copy">
            <small>{release.kind}{" // "}{release.code}</small>
            <h3>{release.title}</h3>
            <p>{release.artist}<span>{release.year}</span></p>
          </div>
        </a>
      ))}
    </div>
  );
}
