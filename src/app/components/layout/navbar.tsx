import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <ul className='flex gap-5'>
      <Link href='/'>Home</Link>
      <Link href='/workshop'>Workshop</Link>
    </ul>
  )
}

export default Navbar
