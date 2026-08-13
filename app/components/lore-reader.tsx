"use client";

import { useEffect, useMemo, useState } from "react";

type Token = { type: "h2" | "h3" | "h4" | "p"; value: string };

export default function LoreReader() {
  const [source, setSource] = useState("");
  useEffect(() => { fetch("/content/jester-details.md").then((response) => response.text()).then(setSource).catch(() => setSource("## Archive unavailable\nThe record could not be loaded.")); }, []);
  const tokens = useMemo(() => {
    const result: Token[] = [];
    let paragraph: string[] = [];
    const flush = () => { if (paragraph.length) result.push({ type: "p", value: paragraph.join(" ") }); paragraph = []; };
    for (const raw of source.split(/\r?\n/)) {
      const line = raw.trim();
      if (!line) { flush(); continue; }
      if (line.startsWith("#### ")) { flush(); result.push({ type: "h4", value: line.slice(5) }); }
      else if (line.startsWith("### ")) { flush(); result.push({ type: "h3", value: line.slice(4) }); }
      else if (line.startsWith("## ")) { flush(); result.push({ type: "h2", value: line.slice(3) }); }
      else paragraph.push(line);
    }
    flush();
    return result;
  }, [source]);

  const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return <div className="lore-reader">{tokens.map((token, index) => {
    if (token.type === "h2") return <h2 id={slugify(token.value)} key={index}>{token.value}</h2>;
    if (token.type === "h3") return <h3 key={index}>{token.value}</h3>;
    if (token.type === "h4") return <h4 key={index}>{token.value}</h4>;
    return <p key={index}>{token.value}</p>;
  })}</div>;
}
