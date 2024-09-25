import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialFooter from "./components/SocialFooter";

const Footer = () => {
  return (
    <div className="p-[1rem] lg:p-[5rem]">
      {/* Top */}
      <div className="flex flex-col min-lg:flex-row lg:flex-row justify-between gap-[2rem] p-[1rem] lg:p-[8rem]">
        {/* Left Section */}
        <Link
          href={"/"}
          className="flex justify-start items-center w-fit pr-[4rem]"
        >
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={400}
            height={400}
            className=""
          />
        </Link>

        {/* Right Section */}
        <div className="flex flex-row justify-between items-start w-full gap-[1rem] md:gap-[2rem] lg:gap-[4rem] flex-wrap">

          {/* Column 2 */}
          <div className="flex flex-col gap-[1rem]">
            <h3 className="text-red-500">Follow TED</h3>
            <div className="flex flex-col gap-[0.5rem]">
              <Link href={"https://www.facebook.com/TEDxEvents/"}>
                Facebook
              </Link>
              <Link href={"https://x.com/tedx"}>Twitter</Link>
              <Link href={"https://www.instagram.com/tedx_official/"}>
                Instagram
              </Link>
              <Link href={"https://www.youtube.com/user/tedxtalks"}>
                Youtube
              </Link>
              <Link href={"https://www.linkedin.com/showcase/tedxofficial/"}>
                LinkedIn
              </Link>
              <Link href={"https://blog.ted.com/"}>TED Blog</Link>
            </div>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <h3 className="text-red-500">Our Community</h3>
            <div className="flex flex-col gap-[0.5rem]">
              <Link
                href={"https://www.instagram.com/tedxaceengineeringcollege/"}
                className="flex flex-row items-center"
              >
                <Image
                  src={"/instagram.svg"}
                  alt="instagram"
                  width={16}
                  height={16}
                  className="mr-[0.3rem]"
                />
                Instagram
              </Link>
              <Link
                href={"https://www.linkedin.com/showcase/tedxofficial/"}
                className="flex flex-row items-center"
              >
                <Image
                  src={"/linkedin.svg"}
                  alt="linkedin"
                  width={16}
                  height={16}
                  className="mr-[0.3rem]"
                />
                LinkedIn
              </Link>
            </div>
          </div>

          <div className="flex flex-row lg:flex-col ">
          <div className="flex flex-col gap-[1rem] lg:items-start">
            <h3 className="text-red-500">Contact Us</h3>
            <div className="flex flex-col gap-[0.5rem] lg:items-start">
              <div>
                <p className="font-black">R Tejanand</p>
                <p className="text-sm">Head of Digital Marketing</p>
                <p className="flex flex-row items-center">
                  <Image
                    src={"/phone.svg"}
                    alt="phone"
                    width={16}
                    height={16}
                    className="mr-[0.3rem]"
                  />
                  +91 9652056560
                </p>
              </div>
              <div>
                <p className="font-black">Praneetha</p>
                <p className="text-sm">Organiser</p>
                <p className="flex flex-row items-center">
                <Image
                    src={"/phone.svg"}
                    alt="phone"
                    width={16}
                    height={16}
                    className="mr-[0.3rem]"
                  />
                  +91 9030790171</p>
              </div>
              <div>
                <p className="font-black">Sri Shivani Bhavya</p>
                <p className="text-sm">Co-Organiser</p>
                <p className="flex flex-row items-center">
                <Image
                    src={"/phone.svg"}
                    alt="phone"
                    width={16}
                    height={16}
                    className="mr-[0.3rem]"
                  />+91 8328002046</p>
              </div>

              <Link
                href="mailto:tedxaceec@gmail.com"
                className="text-blue-300 hover:underline flex flex-row items-center"
              >
                <Image
                  src={"/mail.svg"}
                  alt="mail"
                  width={16}
                  height={16}
                  className="mr-[0.3rem]"
                />
                tedxaceec@gmail.com
              </Link>

            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-row justify-center items-center py-[2rem]">
        <SocialFooter />
      </div>
    </div>
  );
};

export default Footer;
