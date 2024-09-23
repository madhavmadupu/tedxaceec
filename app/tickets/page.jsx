import React from "react";
import Image from "next/image";
import PaymentCTA from "../components/PaymentCTA";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  const ticketPrice = 350; // Example ticket price

  return (
    <div className="h-screen flex flex-col lg:flex-row justify-center items-center w-full gap-[4rem] p-[1rem]">
      {/* Tickets */}
      <Image
        src={"/tickets.svg"}
        alt="tickets"
        width={500}
        height={500}
        draggable={false}
      />

      {/* Details */}
      <div className="w-full lg:max-w-lg">
        <div className="flex flex-col justify-center items-center gap-[1rem]">
          {/* <h1 className="text-2xl font-black">Registration Details</h1>
          <p className="text-xl font-semibold">
            Ticket Price: Rs.{ticketPrice}/-
          </p>

          <form
            action=""
            method="post"
            className="flex flex-col gap-[1rem] w-full justify-center items-center"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="bg-transparent border border-red-500 p-[1rem] rounded-[1rem] font-black w-full"
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="bg-transparent border border-red-500 p-[1rem] rounded-[1rem] font-black w-full"
            />
            <input
              type="number"
              name="Phone"
              id="Phone"
              placeholder="Phone"
              className="bg-transparent border border-red-500 p-[1rem] rounded-[1rem] font-black w-full"
            />
            <PaymentCTA />
          </form> */}

          <h1 className="font-black text-3xl">Tickets are coming soon!</h1>
          <p className="text-center">
            Follow us on Instagram to be the first to grab yours before they
            sell out. Don&apos;t miss out when they go live.
          </p>
          <div className="flex flex-row h-fit gap-[1rem]">
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
          <Link
            href={
              "https://www.instagram.com/tedxaceengineeringcollege?igsh=NGZzeWxxNHYyZjNh"
            }
          >
            <Image
              src={"/insta_qr.png"}
              alt="insta_qr"
              width={300}
              height={300}
              draggable={false}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
