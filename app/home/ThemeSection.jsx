import Image from "next/image";
import React from "react";
import Link from "next/link";
import KnowMore from "../components/KnowMore";

const ThemeSection = () => {
  return (
    <div className="flex justify-center items-center px-[1rem] py-[8rem]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <Image src={"/dude.svg"} alt={"dude"} width={400} height={400} />
        <div className="flex flex-col justify-center items-start gap-[2rem] max-w-lg">
          <h3 className="text-xl">
            The theme{" "}
            <span className="font-black">
              Uturn - Pivotal points in our life
            </span>{" "}
            highlights those critical moments when life takes an unexpected
            turn, leading to profound personal transformation and new
            beginnings.
          </h3>
          <Link href={"/theme"}>
            <KnowMore />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThemeSection;
