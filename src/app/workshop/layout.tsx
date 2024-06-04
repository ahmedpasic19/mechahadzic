import type { Metadata } from 'next'
import Navbar from '../components/layout/navbar'
import Sidebar from '../components/layout/sidebar'

export const metadata: Metadata = {
  title: 'Workshop | Mechahadzic',
  description: 'Workshop | Mechahadzic',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='grid grid-cols-[20%_auto] grid-rows-2'>
      <div className='row-start-1 row-end-2 col-span-2'>
        <Navbar />
      </div>
      <div className='row-start-2 row-end-3 col-span-1'>
        <Sidebar />
      </div>
      <div className='row-start-2 row-end-3 col-start-2 col-end-3'>
        {children}
      </div>
    </main>
  )
}
