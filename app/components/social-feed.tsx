"use client";

import { useEffect } from "react";

export default function SocialFeed() {
  useEffect(() => {
    if (document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) return;
    const script = document.createElement("script"); script.src = "https://platform.twitter.com/widgets.js"; script.async = true; script.charset = "utf-8"; document.body.appendChild(script);
  }, []);
  return <div className="social-feed"><a className="twitter-timeline" data-width="680" data-height="780" data-dnt="true" data-theme="dark" href="https://twitter.com/JesterTheRyda?ref_src=twsrc%5Etfw">Load posts by JesterTheRyda</a></div>;
}
