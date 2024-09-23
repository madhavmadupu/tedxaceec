import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"

const Venue = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-09-28T00:00:00');
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='py-[8rem] px-[1rem] flex lg:flex-row flex-col items-center justify-center gap-[4rem]'>
            <Link href={"https://maps.app.goo.gl/LXLP3JKEkCNu97x46"} target='_blank' className='hover:scale-110 transition-all ease-in-out'>
                <motion.div
                animate={{
                    rotate:[0,10,-10,0]
                }}
                transition={{
                    repeat:Infinity,
                    ease:"circInOut",
                    repeatDelay:4,
                    duration:0.5
                }}
                >
                    <Image src={"/location.png"} alt='location' width={500} height={500} className='w-[20rem]' />
                </motion.div>
            </Link>
            <div className='flex flex-row justify-between gap-[1rem] scale-50 md:scale-100'>
                <div className='bg-red-800 flex flex-col items-center justify-center size-[10rem] rounded-[1rem]'>
                    <p className='text-[4rem] font-black'>{timeLeft.days}</p>
                    <p className='opacity-50 font-black text-2xl'>Days</p>
                </div>

                <div className='bg-red-800 flex flex-col items-center justify-center size-[10rem] rounded-[1rem]'>
                    <p className='text-[4rem] font-black'>{timeLeft.hours}</p>
                    <p className='opacity-50 font-black text-2xl'>Hours</p>
                </div>

                <div className='bg-red-800 flex flex-col items-center justify-center size-[10rem] rounded-[1rem]'>
                    <p className='text-[4rem] font-black'>{timeLeft.minutes}</p>
                    <p className='opacity-50 font-black text-2xl'>Minutes</p>
                </div>

                <div className='bg-red-800 flex flex-col items-center justify-center size-[10rem] rounded-[1rem]'>
                    <p className='text-[4rem] font-black'>{timeLeft.seconds}</p>
                    <p className='opacity-50 font-black text-2xl'>Seconds</p>
                </div>
            </div>
        </div>
    );
};

export default Venue;
