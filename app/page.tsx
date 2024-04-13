import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <body>
      <div className='bg-white'>
        <div className='flex flex-row justify-center items-center space-x-5 md:space-x-10'>
          <div className='h-[100vh] bg top-0 left-0 relative'>
            <div className='absolute text-white h-full w-full flex flex-col justify-start items-start'>
              <img
                src='./bird.gif'
                className='fly w-[40vw] md:w-[20vw] sm:ml-[5vw] mt-[10vh]'
              ></img>
            </div>

            <div className='absolute text-white h-full w-full flex flex-col justify-center items-end'>
              <img
                src='./me.png'
                className='floating h-[80vh] md:h-[100vh] ml-[10vw] md:mr-[10vw]'
              ></img>
            </div>

            <div className='absolute text-white h-full w-full flex flex-col justify-end items-start'>
              <img
                src='./earth.png'
                className='rotate w-[40vw] md:w-[20vw]'
              ></img>
            </div>
            <div className='absolute text-white h-full w-full flex flex-col justify-center items-center'>
              <div className='text-4xl'>
                <b>Tiffany Chong</b>
              </div>
              <div className='sm:text-xs md:text-3xl'>
                Software Engineer | Graphic Designer
              </div>
            </div>

            <div className='absolute pr-[5vw] py-[2vh] text-white h-full w-full flex flex-col justify-between items-end'>
              <div className='flex flex-row space-x-5'>
                <Link href='/projects'>Experience</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/projects'>Games</Link>
                <Link href='/projects'>Design</Link>
                <Link href='/projects'>Blog</Link>
              </div>

              <div className='flex flex-col items-end'>
                <div>Tiffany Sia Chong</div>
                <a href='mailto:hello@sciffany.com'>hello@sciffany.com</a>
                <div>© 2024. All rights reserved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
