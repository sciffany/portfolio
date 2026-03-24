"use client";

import { appendRuffleEmbed, loadRuffleScript } from "@/app/lib/ruffle";
import { useEffect, useRef } from "react";

export default function TowerDefenseGame() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    void loadRuffleScript().then(() => {
      if (cancelled) return;
      appendRuffleEmbed(host, {
        src: "/flash/swfs/gift.swf",
        width: "800px",
        height: "600px",
      });
    });
    return () => {
      cancelled = true;
      host.replaceChildren();
    };
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6">
      <div ref={hostRef} />
    </div>
  );
}
