export default function PageHero({ eyebrow, title, description, code }: { eyebrow: string; title: string; description: string; code: string }) {
  return (
    <section className="subpage-hero">
      <div className="marquee-bulbs" aria-hidden="true">{Array.from({ length: 16 }, (_, i) => <i key={i} />)}</div>
      <p>{eyebrow}</p>
      <h1>{title}</h1>
      <div><span>{description}</span><b>{code}</b></div>
    </section>
  );
}
