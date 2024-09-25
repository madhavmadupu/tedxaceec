import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer"

const lexend_deca = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase:new URL("https://tedx.aceec.ac.in"),
  keywords:['TEDxACEEC','tedxaceec','tedxace','TEDxACE','TEDx ACE','tedx ace','TEDx ACEEC','tedx aceec','ACE TEDX','ace tedx','ted ace','tedx ace','ted','ace','aceec','ted aceec','ted ace','ace engineering college','ace engg clg','Ace engineering college','Ace Engineering College','ACE','Ace'],
  title:{
    default:"TEDxACEEC",
    template:"%s | TEDxACEEC"
  },
  openGraph:{
    description:"Ideas worth spreading. Independently organised TedX event by ACE Engineering College.",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </head>
      <body className={lexend_deca.className + "w-screen"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}