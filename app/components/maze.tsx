"use client";

export default function Maze() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <iframe
        frameBorder='0'
        height='550px'
        src='https://nusu-my.sharepoint.com/personal/e0201567_u_nus_edu/_layouts/15/Doc.aspx?sourcedoc={8d67dabe-dc4a-4da9-b80c-1c583ec403fc}&amp;action=embedview&amp;wdAr=1.3333333333333333'
        width='600px'
      >
        This is an embedded
        <br />
        <br />
      </iframe>
      <br />
      <br />
      Find your way out of the maze. Below is the map to prove that this game
      has an ending, but don't cheat. Good luck!
      <br />
      <br />
      <img src='/assets/images/blueprint.png' />
      <br />
      <br />
      <a href='/games'>Back to Games</a>
    </div>
  );
}
