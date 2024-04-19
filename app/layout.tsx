import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Foooter";
const monserrat = Montserrat({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MovieApp",
  description: "Pagina de Peliculas",
  keywords: "Peliculas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Navbar></Navbar>
        
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
