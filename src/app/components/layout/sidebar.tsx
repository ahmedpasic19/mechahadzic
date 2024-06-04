import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <ul>
      <Link href='/narudžbe'>Narudžbe</Link>
      <Link href='/radni-nalozi'>Radni nalozi</Link>
      <Link href='/skladiste'>Skladište</Link>
    </ul>
  )
}

export default Sidebar
