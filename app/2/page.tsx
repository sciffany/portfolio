import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <div className='bg-white'>
      <section className='hero w-full'>
        <div className='flex flex-row justify-center items-center space-x-5 md:space-x-10'>
          <img className='h-[10rem]' src='logo_white.png' alt='' />
          <div className='flex flex-col'>
            <div className='text-3xl'>
              <b>Tiffany Chong</b>
            </div>
            <div className='sm:text-xs md:text-2xl'>
              Graphic Design Portfolio
            </div>
          </div>
        </div>
      </section>
      <div className='p-3 bg-white md:p-20'>
        <div className='grid grid-cols-2 gap-3 md:gap-20'>
          <div className='flex flex-col space-y-3 md:space-y-20'>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='1.png'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='fin1.png'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='newsad_large.png'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='hope.jpeg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='3.png'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='5.png'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='7.png'
                alt=''
              />
            </div>
          </div>
          <div className='flex flex-col space-y-3 md:space-y-20'>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='tess.png'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='chopin-1-1.png'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='bipc.png'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='shine.jpeg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='2.png'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='4.png'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='6.png'
                alt=''
              />
            </div>
            <div className='flex flex-row items-center space-x-1'>
              <div>
                Contact me at{" "}
                <span className='text-blue-500'>hello@sciffany.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
