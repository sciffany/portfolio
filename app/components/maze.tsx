"use client";

import Image from "next/image";

export default function Maze() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center text-sm text-gray-800">
      <iframe
        title="Happy Egg Maze (PowerPoint)"
        className="max-w-full border-0"
        height={550}
        src="https://nusu-my.sharepoint.com/personal/e0201567_u_nus_edu/_layouts/15/Doc.aspx?sourcedoc={8d67dabe-dc4a-4da9-b80c-1c583ec403fc}&action=embedview&wdAr=1.3333333333333333"
        width={600}
      />
      <p className="max-w-xl">
        Find your way out of the maze. Below is the map to prove that this game
        has an ending, but don&apos;t cheat. Good luck!
      </p>
      <Image
        src="/game-images/blueprint.png"
        alt="Maze blueprint map"
        width={500}
        height={500}
        className="h-auto max-w-full"
      />
    </div>
  );
}
