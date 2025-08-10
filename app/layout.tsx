import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

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
        <Navbar />
        <main className='pt-16'>{children}</main>
      </body>
    </html>
  );
}
