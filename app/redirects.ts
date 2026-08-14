export type RedirectEntry = {
  slug: string;
  label: string;
  destination: string;
  group: "music" | "social" | "community";
};

/*
 * Native Funhouse short links.
 *
 * Add or edit one entry, then deploy. The static build generates /{slug}/
 * automatically, and every on-site link using that slug follows the update.
 * Slugs must be lowercase, unique, and must not match a real site section.
 */
export const redirects = [
  { slug: "apple", label: "Apple Music", destination: "https://music.apple.com/us/artist/jestertheryda/1637173614", group: "music" },
  { slug: "bandsintown", label: "Bandsintown", destination: "https://www.bandsintown.com/search?q=JesterTheRyda", group: "music" },
  { slug: "discord", label: "#RydaGang Discord", destination: "https://discord.com/invite/YswtpUV", group: "community" },
  { slug: "facebook", label: "Facebook", destination: "https://www.facebook.com/JesterTheRyda", group: "social" },
  { slug: "instagram", label: "Instagram", destination: "https://www.instagram.com/jestertheryda/", group: "social" },
  { slug: "kofi", label: "Ko-fi", destination: "https://ko-fi.com/hellharbor", group: "community" },
  { slug: "reddit", label: "Reddit", destination: "https://www.reddit.com/user/JesterTheRyda/", group: "social" },
  { slug: "snapchat", label: "Snapchat", destination: "https://www.snapchat.com/add/jestertheryda", group: "social" },
  { slug: "soundcloud", label: "SoundCloud", destination: "https://soundcloud.com/jestertheryda", group: "music" },
  { slug: "spotify", label: "Spotify", destination: "https://open.spotify.com/artist/6jhbqdv4AAOMIHio8uyO5b", group: "music" },
  { slug: "tiktok", label: "TikTok", destination: "https://www.tiktok.com/@jestertheryda", group: "social" },
  { slug: "twitch", label: "Twitch", destination: "https://www.twitch.tv/jestertheryda", group: "social" },
  { slug: "twitter", label: "X / Twitter", destination: "https://x.com/JesterTheRyda", group: "social" },
  { slug: "youtube", label: "YouTube", destination: "https://www.youtube.com/@JesterTheRyda", group: "music" },
] as const satisfies readonly RedirectEntry[];

export type RedirectSlug = (typeof redirects)[number]["slug"];

export const redirectPath = (slug: RedirectSlug) => `/${slug}`;

export const findRedirect = (slug: string) => redirects.find((entry) => entry.slug === slug);
