"use client";

import { appendRuffleEmbed, loadRuffleScript } from "@/app/lib/ruffle";
import { useEffect, useRef } from "react";

export default function FoofGame() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    void loadRuffleScript().then(() => {
      if (cancelled) return;
      appendRuffleEmbed(host, {
        src: "/flash/swfs/game.swf",
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
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 text-center">
      <div ref={hostRef} />
      <div className="max-w-xl space-y-2 text-left">
        <p>
          <strong>Instructions</strong>: Replace &quot;test&quot; with your name
          and hit &quot;New Game&quot;.
        </p>
        <p>
          Use arrow keys to explore the world, and space bar to collect items!
        </p>
        <p>
          <strong>Goal</strong>: Just explore the world
        </p>
      </div>
    </div>
  );
}
