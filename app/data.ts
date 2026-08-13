export type Release = {
  title: string;
  artist: string;
  year: string;
  image: string;
  href: string;
  kind: "JTR RELEASE" | "FEATURED APPEARANCE";
  code: string;
};

export const releases: Release[] = [
  { title: "Antisocial Emotional Man Inside", artist: "JesterTheRyda", year: "2023", image: "/media/cover-aemi.webp", href: "https://nav.JesterTheRyda.com/aemi", kind: "JTR RELEASE", code: "AEMI-01" },
  { title: "I Still Exist", artist: "JesterTheRyda", year: "2023", image: "/media/cover-istillexist.webp", href: "https://nav.DabNStabRecords.com/istillexist", kind: "JTR RELEASE", code: "ISE-02" },
  { title: "Mobster Moves", artist: "JesterTheRyda", year: "2024", image: "/media/cover-mobster.webp", href: "https://nav.JesterTheRyda.com/mobster-moves", kind: "JTR RELEASE", code: "MM-03" },
  { title: "Prelude to the Soundtracks", artist: "Poltergyst", year: "Featured", image: "/media/cover-prelude.webp", href: "https://nav.ThePoltergyst.com/prelude", kind: "FEATURED APPEARANCE", code: "FEAT-04" },
  { title: "Vibe High", artist: "Funky Skunky", year: "Featured", image: "/media/cover-vibehigh.webp", href: "https://nav.JesterTheRyda.com/vibehigh", kind: "FEATURED APPEARANCE", code: "FEAT-05" },
  { title: "Feeding a Beast Called Hate", artist: "Poltergyst", year: "Featured", image: "/media/cover-fabch.webp", href: "https://nav.ThePoltergyst.com/fabch", kind: "FEATURED APPEARANCE", code: "FEAT-06" },
];

export const socialLinks = [
  ["Apple Music", "https://nav.JesterTheRyda.com/apple"],
  ["Bandsintown", "https://nav.JesterTheRyda.com/bandsintown"],
  ["Discord", "https://nav.JesterTheRyda.com/discord"],
  ["Facebook", "https://nav.JesterTheRyda.com/facebook"],
  ["Instagram", "https://nav.JesterTheRyda.com/instagram"],
  ["Ko-fi", "https://nav.JesterTheRyda.com/kofi"],
  ["Reddit", "https://nav.JesterTheRyda.com/reddit"],
  ["Snapchat", "https://nav.JesterTheRyda.com/snapchat"],
  ["SoundCloud", "https://nav.JesterTheRyda.com/soundcloud"],
  ["Spotify", "https://nav.JesterTheRyda.com/spotify"],
  ["TikTok", "https://nav.JesterTheRyda.com/tiktok"],
  ["Twitch", "https://nav.JesterTheRyda.com/twitch"],
  ["X / Twitter", "https://nav.JesterTheRyda.com/twitter"],
  ["YouTube", "https://nav.JesterTheRyda.com/youtube"],
];

export const biography = [
  "Jordin Bryant, known professionally as JesterTheRyda, is an American actor, director, musician, record producer and voiceover artist from Grays Harbor County, Washington. He is the founder and Chief Executive Officer of Hell Harbor Entertainment. After dropping out of school as a teenager, he devoted himself to learning the crafts he needed to entertain the world on his own terms.",
  "He taught himself to write, record, mix, master and produce his own music from his bedroom, discovering early that his voice belonged in raw, unfiltered and uncensored work. Through Hell Harbor Entertainment and Dab & Stab Records, he built an independent route for taking that work directly to an audience.",
  "Beyond music, Jester works in screen acting, voice acting and improvised character performance. His roleplay work across Grand Theft Auto V and Red Dead Redemption 2 communities sharpened his instinct for character voices, live storytelling and worlds that can change in real time.",
  "When he is not recording, acting or producing, he develops private game servers and interactive systems. Underneath the macabre carnival is a lifelong tinkerer: a creator who keeps turning curiosity into another show, another character and another world.",
];
