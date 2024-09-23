import Link from 'next/link'
import React from 'react'
import "./NavCTA.css"

const NavCTA = () => {
  return (
    <Link className='navbutton' href={"/tickets"}>Register Now</Link>
  )
}

export default NavCTA