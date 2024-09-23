
import { motion } from "framer-motion";
import Image from "next/image";
import SocialsCard from "../components/SocialsCard"
import NavCTA from "../components/NavCTA"

const HeroSection = () => {
  return (
    <div className="h-screen flex justify-center items-center overflow-hidden w-screen">
      <SocialsCard />
      {/* Heading */}
      <div className="absolute  flex justify-center items-center flex-col z-10 ">
        <h1 className="font-black text-[4rem] lg:text-[8rem] flex flex-row justify-center items-center">
          <motion.div
            animate={{
              rotate: [0, 180, 0]
            }}
            transition={{
              duration: 6,
              ease: "circInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            <Image src={"/uturn.png"} alt="uturn" width={1000} height={1000} className="size-[4rem] lg:size-[8rem]" draggable={false} />
          </motion.div>
          TURN
        </h1>
        {/* <p className="">Pivotal Points Of Life</p> */}
        <NavCTA />
      </div>


      <div className=" hidden relative w-screen h-screen overflow-hidden bg-black lg:block">
        <motion.div
          className="w-[8rem] absolute top-[50%] left-[50%]"
          initial={{
            x:0,
            y:0,
            scale:0
          }}
          animate={{
            scale:[0, 1, 1, 1.5],
            x:-500,
            y:-400,
            rotate:-10
          }}
          transition={{
            duration: 2,
            ease: "circInOut",
          }}
        >
          <Image src={"/bulb.svg"} alt="bulb.svg" width={500} height={500}></Image>
        </motion.div>

        <motion.div
          className="w-[8rem] absolute top-[50%] left-[50%]"
          initial={{
            x:0,
            y:0,
            scale:0
          }}
          animate={{
            scale:[0, 1, 1, 1.5],
            x:-100,
            y:300,
            rotate:10
          }}
          transition={{
            duration: 2,
            ease: "circInOut"
          }}
        >
          <Image src={"/meditation.svg"} alt="meditation.svg" width={500} height={500} className="shadow-md"></Image>
        </motion.div>

        <motion.div
          className="w-[8rem] absolute top-[50%] left-[50%]"
          initial={{
            x:0,
            y:0,
            scale:0
          }}
          animate={{
            scale:[0, 1, 1, 1.5],
            x:400,
            y:-300,
            rotate:40
          }}
          transition={{
            duration: 2,
            ease: "circInOut",
          }}
        >
          <Image src={"/money.svg"} alt="money.svg" width={500} height={500}></Image>
        </motion.div>

        <motion.div
          className="w-[8rem] absolute top-[50%] left-[50%]"
          initial={{
            x:0,
            y:0,
            scale:0
          }}
          animate={{
            scale:[0, 1, 1, 1.5],
            x:500,
            y:250,
            rotate:20
          }}
          transition={{
            duration: 2,
            ease: "circInOut",
          }}
        >
          <Image src={"/mic.svg"} alt="mic.svg" width={500} height={500}></Image>
        </motion.div>

        <motion.div
          className="w-[8rem] absolute top-[50%] left-[50%]"
          initial={{
            x:0,
            y:0,
            scale:0
          }}
          animate={{
            scale:[0, 1, 1, 1.5],
            x:-600,
            y:150,
            rotate:-40
          }}
          transition={{
            duration: 2,
            ease: "circInOut",
          }}
        >
          <Image src={"/study.svg"} alt="study.svg" width={500} height={500}></Image>
        </motion.div>

      </div>









      <div className="relative w-screen h-screen overflow-hidden bg-black lg:hidden">
        <motion.div
          className="w-[8rem] absolute top-[50%] left-[50%]"
          initial={{
            x:0,
            y:0,
            scale:0
          }}
          animate={{
            scale:[0, 0.3, 0.3, 0.7],
            x:-200,
            y:-300,
            rotate:-10
          }}
          transition={{
            duration: 2,
            ease: "circInOut",
          }}
        >
          <Image src={"/bulb.svg"} alt="bulb.svg" width={500} height={500}></Image>
        </motion.div>

        <motion.div
          className="w-[8rem] absolute top-[50%] left-[50%]"
          initial={{
            x:0,
            y:0,
            scale:0
          }}
          animate={{
            scale:[0, 1, 1, 1.5],
            x:-200,
            y:300,
            rotate:10
          }}
          transition={{
            duration: 2,
            ease: "circInOut"
          }}
        >
          <Image src={"/meditation.svg"} alt="meditation.svg" width={500} height={500}></Image>
        </motion.div>

        <motion.div
          className="w-[8rem] absolute top-[50%] left-[50%]"
          initial={{
            x:0,
            y:0,
            scale:0
          }}
          animate={{
            scale:[0, 0.3, 0.3, 0.8],
            x:100,
            y:150,
            rotate:40
          }}
          transition={{
            duration: 2,
            ease: "circInOut",
          }}
        >
          <Image src={"/money.svg"} alt="money.svg" width={500} height={500}></Image>
        </motion.div>

        <motion.div
          className="w-[8rem] absolute top-[50%] left-[50%]"
          initial={{
            x:0,
            y:0,
            scale:0
          }}
          animate={{
            scale:[0, 0.2, 0.2, 0.5],
            x:-100,
            y:100,
            rotate:-20
          }}
          transition={{
            duration: 2,
            ease: "circInOut",
          }}
        >
          <Image src={"/mic.svg"} alt="mic.svg" width={500} height={500}></Image>
        </motion.div>

        <motion.div
          className="w-[8rem] absolute top-[50%] left-[50%]"
          initial={{
            x:0,
            y:0,
            scale:0
          }}
          animate={{
            scale:[0,0.3,0.3,0.8],
            x:100,
            y:-350,
            rotate:-40
          }}
          transition={{
            duration: 2,
            ease: "circInOut",
          }}
        >
          <Image src={"/study.svg"} alt="study.svg" width={500} height={500}></Image>
        </motion.div>

      </div>
    </div>
  );
};

export default HeroSection;

