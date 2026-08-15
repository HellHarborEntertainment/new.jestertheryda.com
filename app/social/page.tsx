import type { Metadata } from "next";
import SocialRedirect from "./social-redirect";

export const metadata: Metadata = {
  title: "Social Links | JesterTheRyda",
  description: "Official JesterTheRyda social links and community portals.",
  robots: { index: false, follow: true },
};

export default function SocialPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/links/" />
      <SocialRedirect />
      <main className="redirect-page">
        <section className="redirect-terminal">
          <p>NETWORK ROUTE UPDATED</p>
          <h1 className="vampiress">Opening the Prize Counter</h1>
          <h2>ALL SOCIAL PORTALS HAVE MOVED TO /LINKS</h2>
          <a className="redirect-fallback" href="/links/">CONTINUE →</a>
        </section>
      </main>
    </>
  );
}
