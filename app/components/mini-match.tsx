"use client";

import { useRef } from "react";
import Phaser from "phaser";

export default function MiniMatch() {
  return (
    <div className='game-style' id='phaser-div'>
      <script src='/mini-match/miniMatch/src/main.js' type='module'></script>
    </div>
  );
}
