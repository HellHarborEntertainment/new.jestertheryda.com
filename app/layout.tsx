import type { Metadata } from "next";
import "./globals.css";
import SiteChrome from "./components/site-chrome";

export const metadata: Metadata = {
  title: "JesterTheRyda | Enter The Funhouse",
  description: "The official home of JesterTheRyda: musician, actor, producer, director, voice artist and underground storyteller.",
  icons: { icon: "/media/jtr-mark.png", shortcut: "/media/jtr-mark.png" },
  metadataBase: new URL("https://new.jestertheryda.com"),
  openGraph: {
    title: "JesterTheRyda | Enter The Funhouse",
    description: "Music, lore, live streams and controlled chaos from JesterTheRyda.",
    url: "https://new.jestertheryda.com",
    siteName: "JesterTheRyda",
    images: [{ url: "/media/jtr-portrait.webp", alt: "JesterTheRyda" }],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteChrome>{children}</SiteChrome></body></html>;
}
