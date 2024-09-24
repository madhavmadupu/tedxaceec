import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center w-full gap-[2rem] p-[1rem] pt-[7rem] lg:gap-[4rem]">
      {/* Tickets Image */}
      <div className="w-full max-w-[500px] lg:w-1/2 flex justify-center">
        <Image
          src="/tickets.svg"
          alt="tickets"
          width={500}
          height={500}
          draggable={false}
          className="w-full h-auto"
        />
      </div>

      {/* Details Section */}
      <div className="w-full lg:max-w-lg lg:w-1/2">
        <div className="flex flex-col justify-center items-center gap-[1rem]">
          <h1 className="font-black text-2xl md:text-3xl text-center">
            Tickets are coming soon!
          </h1>
          <p className="text-center text-sm md:text-base px-4">
            Follow us on Instagram to be the first to grab yours before they
            sell out. Don&apos;t miss out when they go live.
          </p>

          {/* Social Links */}
          <div className="flex flex-row h-fit gap-[1rem] w-full px-4 justify-center">
            <Link
              href={
                "https://www.linkedin.com/company/tedx-ace-engineering-college/"
              }
              className="bg-[#0077b5] p-[1rem] rounded-[1rem] font-black w-full text-center flex items-center justify-center gap-2 text-white"
            >
              <FaLinkedin /> LinkedIn
            </Link>
            <Link
              href={
                "https://www.instagram.com/tedxaceengineeringcollege?igsh=NGZzeWxxNHYyZjNh"
              }
              className="bg-gradient-to-r from-[#ffc527] via-[#d62976] to-[#4f5bd5] p-[1rem] rounded-[1rem] font-black w-full text-center flex items-center justify-center gap-2 text-white"
            >
              <FaInstagram /> Instagram
            </Link>
          </div>

          {/* QR Code */}
          <Link
            href={
              "https://www.instagram.com/tedxaceengineeringcollege?igsh=NGZzeWxxNHYyZjNh"
            }
          >
            <div className="w-full max-w-[500px] flex justify-center">
              <Image
                src="/insta_qr.png"
                alt="insta_qr"
                width={500}
                height={500}
                draggable={false}
                className="w-full h-auto lg:short:hidden lg:short:gap-[1rem] overflow-y-auto"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
