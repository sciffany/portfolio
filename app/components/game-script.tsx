"use client";

import { useEffect } from "react";

export default function GameScript({ fileName }: { fileName: string }) {
  useEffect(() => {
    const gameScript = document.createElement("script");
    gameScript.src = `${fileName}`;
    gameScript.type = "module";
    gameScript.async = true;

    gameScript.onload = () => {
      console.log("Game loaded");
    };

    gameScript.onerror = () => {
      console.error("Failed to load Game");
    };

    document.body.appendChild(gameScript);
  }, [fileName]);

  return <canvas id='canvas' width={1100} height={550} tabIndex={0} />;
}
