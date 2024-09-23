import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer"

const lexend_deca = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TEDXACEEC",
  description: "Ideas worth spreading.",
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