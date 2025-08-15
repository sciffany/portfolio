"use client";

import { useEffect } from "react";

export default function PhaserGame({ fileName }: { fileName: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/phaser@3.90.0/dist/phaser.min.js";
    script.type = "module";
    script.async = true;

    script.onload = () => {
      console.log("Phaser loaded");
    };

    script.onerror = () => {
      console.error("Failed to load Phaser");
    };

    // load the phaser game next
    const gameScript = document.createElement("script");
    gameScript.src = `${fileName}/src/main.js`;
    gameScript.type = "module";
    gameScript.async = true;

    gameScript.onload = () => {
      console.log("Game loaded");
    };

    gameScript.onerror = () => {
      console.error("Failed to load Game");
    };

    document.body.appendChild(script);
    document.body.appendChild(gameScript);
  }, []);

  return <div className='w-full h-full' id='phaser-div'></div>;
}
