import Image from "next/image";
import React from "react";

const Dignitaries = () => {
  return (
    <div className="h-fit flex flex-col justify-center items-center p-[1rem] gap-[8rem]">
      {/* Speakers */}
      <div className="flex flex-col justify-center items-center gap-[4rem]">
        <h1 className="text-4xl font-black">Speakers</h1>
        <div className="flex flex-col lg:flex-row gap-[2rem]">
          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <Image
              src={"/speakers/VindyaVishaka.png"}
              className="rounded-tr-[1rem] rounded-bl-[1rem] dignitaries"
              alt="dignitaries"
              width={300}
              height={300}
              draggable={false}
            />
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-black text-2xl">Vindhya Vishaka</h2>
              <p className="text-center">Sports Presenter, IPL Commentator</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <Image
              src={"/speakers/AbhimanyuSaxena.png"}
              className="rounded-tr-[1rem] rounded-bl-[1rem] aspect-square dignitaries "
              alt="dignitaries"
              width={300}
              height={300}
              draggable={false}
            />
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-black text-2xl">Abhimanyu Saxena</h2>
              <p className="text-center">Co-Founder, Scaler</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <Image
              src={"/speakers/Midhula.png"}
              className="rounded-tr-[1rem] rounded-bl-[1rem] aspect-square dignitaries "
              alt="dignitaries"
              width={300}
              height={300}
              draggable={false}
            />
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-black text-2xl">Midhula Devabhaktuni</h2>
              <p className="text-center">Co-Founder, Mivi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Board Members */}
      <div className="flex flex-col justify-center items-center gap-[4rem]">
        <h1 className="text-4xl font-black">Board Members</h1>
        <div className="flex flex-col lg:flex-row gap-[2rem]">
          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <Image
              src={"/higher/gksir.png"}
              className="rounded-tr-[1rem] rounded-bl-[1rem] aspect-square dignitaries "
              alt="dignitaries"
              width={300}
              height={300}
              draggable={false}
            />
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-black text-2xl">
                Prof.Y.V.Gopala Krishna Murthy
              </h2>
              <p className="text-center">General Secretary</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <Image
              src={"/higher/vamsi.png"}
              className="rounded-tr-[1rem] rounded-bl-[1rem] aspect-square dignitaries object-cover "
              alt="dignitaries"
              width={300}
              height={300}
              draggable={false}
            />
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-black text-2xl">Y. Raghu Vamshi</h2>
              <p className="text-center">
                Board Member, YSM Society, Ace Engineering College
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <Image
              src={"/higher/padmavathi.png"}
              className="rounded-tr-[1rem] rounded-bl-[1rem] aspect-square dignitaries object-cover "
              alt="dignitaries"
              width={300}
              height={300}
              draggable={false}
            />
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-black text-2xl">Mrs M. Padmavathi</h2>
              <p className="text-center">Joint Secretary</p>
            </div>
          </div>
        </div>
      </div>

      {/* Organisers */}
      <div className="flex flex-col justify-center items-center gap-[4rem]">
        <h1 className="text-4xl font-black">Organisers</h1>
        <div className="flex flex-col lg:flex-row gap-[2rem]">
          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <Image
              src={"/profiles/org/org_shivani.jpg"}
              className="rounded-tr-[1rem] rounded-bl-[1rem] aspect-square dignitaries object-cover"
              alt="dignitaries"
              width={300}
              height={300}
              draggable={false}
            />
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-black text-2xl">Sri Shivani Bhavya</h2>
              <p>Co-organiser</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <Image
              src={"/profiles/org/org_praneetha.jpg"}
              className="rounded-tr-[1rem] rounded-bl-[1rem] aspect-square dignitaries object-cover"
              alt="dignitaries"
              width={300}
              height={300}
              draggable={false}
            />
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-black text-2xl">Praneetha</h2>
              <p>Organiser</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-[2rem]">
            <Image
              src={"/profiles/org/org_jayanth.jpg"}
              className="rounded-tr-[1rem] rounded-bl-[1rem] aspect-square dignitaries object-cover"
              alt="dignitaries"
              width={300}
              height={300}
              draggable={false}
            />
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-black text-2xl">Jayanth</h2>
              <p>Co-organiser</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dignitaries;
