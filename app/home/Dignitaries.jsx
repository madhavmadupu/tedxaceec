import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import speakers from "./Dignitaries_Speakers.json";
import boardData from "./Dignitaries_Board.json";
import organisers from "./Dignitaries_Organisers.json";

const Dignitaries = () => {
  return (
    <div className="h-fit flex flex-col justify-center items-center p-[1rem] gap-[8rem]">
      {/* Speakers */}
      <div className="flex flex-col justify-center items-center gap-[4rem]">
        <h1 className="text-4xl font-black">Speakers</h1>
        <div className="flex flex-col lg:flex-row gap-[2rem]">
          {speakers.speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col justify-center items-center gap-[2rem]">
              <Image
                src={speaker.image}
                className="rounded-tr-[1rem] rounded-bl-[1rem] aspect-square dignitaries object-cover"
                alt={speaker.alt}
                width={300}
                height={300}
                draggable={false}
              />
              <div className="flex flex-col justify-center items-center">
                <h2 className="font-black text-2xl">{speaker.name}</h2>
                <p className="text-center">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href={"/speakers"} className="flex flex-row items-center gap-[4rem] font-black border border-red-700 p-[1rem] rounded-md text-center text-2xl bg-red-500 hover:bg-transparent hover:text-red-500">
          More <FaArrowCircleRight />
        </Link>
      </div>

      {/* Board Members */}
      <div className="flex flex-col justify-center items-center gap-[4rem]">
        <h1 className="text-4xl font-black">Board Members</h1>
        <div className="flex flex-col lg:flex-row gap-[2rem]">
          {boardData.boardMembers.map((boardMember, index) => (
            <div key={index} className="flex flex-col justify-center items-center gap-[2rem]">
              <Image
                src={boardMember.image}
                className="rounded-tr-[1rem] rounded-bl-[1rem] aspect-square dignitaries"
                alt={boardMember.alt}
                width={300}
                height={300}
                draggable={false}
              />
              <div className="flex flex-col justify-center items-center">
                <h2 className="font-black text-2xl">{boardMember.name}</h2>
                <p className="text-center">{boardMember.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Organisers */}
      <div className="flex flex-col justify-center items-center gap-[4rem]">
        <h1 className="text-4xl font-black">Organisers</h1>
        <div className="flex flex-col lg:flex-row gap-[2rem]">
          {organisers.organisers.map((organiser, index) => (
            <div key={index} className="flex flex-col justify-center items-center gap-[2rem]">
              <Image
                src={organiser.image}
                className="rounded-tr-[1rem] rounded-bl-[1rem] aspect-square dignitaries object-cover"
                alt={organiser.alt}
                width={300}
                height={300}
                draggable={false}
              />
              <div className="flex flex-col justify-center items-center">
                <h2 className="font-black text-2xl">{organiser.name}</h2>
                <p className="text-center">{organiser.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dignitaries;
