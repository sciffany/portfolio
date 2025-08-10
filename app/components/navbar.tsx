import DesktopNavbar from "./desktop-navbar";
import MobileNavbar from "./mobile-navbar";

export default function Navbar() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white lg:bg-white/50 lg:backdrop-blur-md'>
      {/* Desktop Navigation */}
      <div className='hidden lg:block'>
        <DesktopNavbar />
      </div>

      {/* Mobile Navigation */}
      <div className='lg:hidden'>
        <MobileNavbar />
      </div>
    </header>
  );
}
