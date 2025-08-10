import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { poppins } from "./lib/fonts";

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
        <Navbar />
        <main className='pt-16'>{children}</main>
      </body>
    </html>
  );
}
