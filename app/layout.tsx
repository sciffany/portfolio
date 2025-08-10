import type { Metadata } from "next";
import Link from "next/link";
import { Lato, Merriweather, Poppins, Quicksand } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Tiffany Sia Chong | Software Engineer & Graphic Designer",
  description: "Tiffany Sia Chong | Software Engineer & Graphic Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} antialiased bg-white`}>
        <header className='fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md'>
          <nav className='mx-4 sm:mx-6 lg:mx-48 p-6 h-16 flex items-center justify-between'>
            <Link
              href='/'
              className='text-gray-900 lg:text-2xl text-lg font-bold tracking-tight flex items-center flex-row gap-2'
            >
              <Image
                src='/logo_white.png'
                alt='logo'
                width={50}
                height={50}
                className='rounded-full'
              />
              Tiffany Sia Chong
            </Link>
            <div className='flex items-center space-x-6 text-sm font-medium'>
              <Link
                href='/experience'
                className='text-gray-800 hover:text-black font-semibold text-lg'
              >
                Experience
              </Link>
              <Link
                href='/projects'
                className='text-gray-800 hover:text-black font-semibold text-lg'
              >
                Projects
              </Link>
              <Link
                href='/design'
                className='text-gray-800 hover:text-black font-semibold text-lg'
              >
                Designs
              </Link>
            </div>
          </nav>
        </header>
        <main className='pt-16'>{children}</main>
      </body>
    </html>
  );
}
