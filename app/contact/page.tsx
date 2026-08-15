import PageHero from "../components/page-hero";

const contacts = [
  ["Main Contact", "contact@JesterTheRyda.com"], ["Press Contact", "press@JesterTheRyda.com"], ["Sponsor Contact", "sponsor@JesterTheRyda.com"],
  ["Music Bookings & Features", "booking@DabNStabRecords.com"], ["Screen Acting Bookings", "screenbooking@HellHarbor.com"], ["Voice Acting Bookings", "voicebooking@HellHarbor.com"],
];

export default function ContactPage() {
  return <main className="subpage"><PageHero eyebrow="THE TICKET BOOTH" title="Make Contact" description="Bookings, press, sponsorships, collaborations and business inquiries are routed from here." code="OPERATOR // STANDING BY" /><section className="page-section"><div className="contact-board">{contacts.map(([label, email], index) => <a href={`mailto:${email}`} key={email}><span>WINDOW {String(index + 1).padStart(2, "0")}</span><h2>{label}</h2><p>{email}</p><b>RING BELL ↗</b></a>)}</div><div className="booking-banner booking-banner--illustrated"><img src="/media/jtr-emote-bong.webp" alt="Cartoon JesterTheRyda holding a glass bong" /><div><small>READY TO START?</small><h2>Bring the Jester<br />into your project.</h2><p>Include the project type, timeframe, location or remote requirements, budget range and the best way to reach you.</p></div></div></section></main>;
}
