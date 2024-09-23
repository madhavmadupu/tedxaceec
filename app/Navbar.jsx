"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    closed: { opacity: 0, x: "-100%", transition: { duration: 0.5 } },
  };

  return (
    <div className='fixed top-0 left-0 right-0 py-[1rem] px-[1rem] lg:px-[4rem] max-w-screen w-full text-xl backdrop-blur-lg bg-opacity-50 z-20 bg-[#0000006b]'>
      <div className='flex items-center justify-between w-full'>
        <Link href={"/"} className='hover:scale-105 transition-all'>
          <Image src={"/logo.svg"} alt='logo' width={200} height={200} />
        </Link>
        <button
          className='lg:hidden flex items-center px-3 py-2 rounded'
          onClick={toggleMenu}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </button>

        {/* Menu for large screens (always visible) */}
        <div className="hidden lg:flex text-right pr-[2rem] flex-row items-center gap-[1rem]">
          <Link href={"/"} className='block py-2 hover:text-red-500'>Home</Link>
          <Link href={"/theme"} className='block py-2 hover:text-red-500'>Theme</Link>
          <Link href={"/teams"} className='block py-2 hover:text-red-500'>Teams</Link>
          <Link href={"/speakers"} className='block py-2 hover:text-red-500'>Speakers</Link>
          <Link href={"/tickets"} className='block py-2 hover:text-red-500'>Tickets</Link>
        </div>

        {/* Menu items with Framer Motion for small screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className={`lg:hidden text-right pr-[2rem] flex-col absolute top-full right-0 w-full bg-black/80 px-[2rem]`}
        >
          <Link href={"/"} className='block py-2 hover:text-red-500' onClick={closeMenu}>Home</Link>
          <Link href={"/theme"} className='block py-2 hover:text-red-500' onClick={closeMenu}>Theme</Link>
          <Link href={"/teams"} className='block py-2 hover:text-red-500' onClick={closeMenu}>Teams</Link>
          <Link href={"/speakers"} className='block py-2 hover:text-red-500' onClick={closeMenu}>Speakers</Link>
          <Link href={"/tickets"} className='block py-2 hover:text-red-500' onClick={closeMenu}>Tickets</Link>
        </motion.div>

      </div>
    </div>
  );
}

export default Navbar;
