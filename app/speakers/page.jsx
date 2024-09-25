import React from "react";
import Image from "next/image";
import speakerDetails from "./speakers.json"; // Import JSON data

const SpeakerSection = ({ title, members }) => (
  <div className="flex flex-col justify-center items-center gap-[4rem]">
    <h1 className="text-4xl font-black">{title}</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2rem] items-start">
      {members.map((member, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center gap-[2rem]"
        >
          <Image
            src={member.image}
            className="rounded-tr-[1rem] rounded-bl-[1rem] aspect-square dignitaries object-cover"
            alt={member.name}
            width={300}
            height={300}
            draggable={false}
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-black text-2xl">{member.name}</h2>
            <p className="max-w-[300px] text-center">{member.designation}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-[1rem] py-[10rem] gap-[8rem]">
      <SpeakerSection title="Speakers" members={speakerDetails} />
    </div>
  );
};

export default Page;
