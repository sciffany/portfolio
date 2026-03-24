"use client";

import { appendRuffleEmbed, loadRuffleScript } from "@/app/lib/ruffle";
import { useEffect, useRef } from "react";

export default function MapDesignerGame() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    void loadRuffleScript().then(() => {
      if (cancelled) return;
      appendRuffleEmbed(host, {
        src: "/flash/swfs/mapDesigner.swf",
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
      <p className="max-w-xl">
        Note: It is not currently possible to test your map in-browser the same
        way as the original Flash player, but you can still use the designer.
      </p>
      <div ref={hostRef} />
      <div className="max-w-xl space-y-2 text-left">
        <p>
          <strong>Instructions</strong>: Click tiles in the left panel and drag
          them onto the map.
        </p>
        <p>
          Resize the map by typing dimensions and clicking the hexagon.{" "}
          <strong>SAVE</strong> prints the tile sheet for the game maker.
        </p>
      </div>
    </div>
  );
}
