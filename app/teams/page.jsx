import React from "react";
import Image from "next/image";
import teamDetails from "./team_details.json"; // Import JSON data

const TeamSection = ({ title, members }) => (
  <div className="flex flex-col justify-center items-center gap-[4rem]">
    <h1 className="text-4xl font-black">{title}</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2rem]">
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
            <p>{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-[1rem] py-[10rem] gap-[8rem]">
      <TeamSection title="Organisers" members={teamDetails.org} />
      <TeamSection title="Webdev Team" members={teamDetails.web} />
      <TeamSection title="Collaboration Team" members={teamDetails.colab} />
      <TeamSection title="Content & Design Team" members={teamDetails.cont} />
      <TeamSection title="Event Management Team" members={teamDetails.event} />
      <TeamSection title="Networking & Logistics Team" members={teamDetails.log} />
    </div>
  );
};

export default Page;
