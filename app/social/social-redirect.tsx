"use client";

import { useEffect } from "react";

export default function SocialRedirect() {
  useEffect(() => {
    window.location.replace("/links/");
  }, []);

  return null;
}
