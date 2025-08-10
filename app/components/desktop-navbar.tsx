import Link from 'next/link';
import Image from 'next/image';
import { navbarItems, siteConfig } from '../lib/navbar-data';

export default function DesktopNavbar() {
  return (
    <nav className='mx-4 sm:mx-6 lg:mx-48 p-6 h-16 flex items-center justify-between'>
      <Link
        href='/'
        className='text-gray-900 lg:text-2xl text-lg font-bold tracking-tight flex items-center flex-row gap-2'
      >
        <Image
          src={siteConfig.logo}
          alt='logo'
          width={50}
          height={50}
          className='rounded-full'
        />
        {siteConfig.name}
      </Link>
      <div className='flex items-center space-x-6 text-sm font-medium'>
        {navbarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className='text-gray-800 hover:text-black font-semibold text-lg'
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
} 