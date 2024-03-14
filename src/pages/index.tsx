import Image from 'next/image'
import { Inter } from 'next/font/google'
import Access from './access';
import Navbar from '@/components/Layout/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-0 ${inter.className}`}
    >
      <Navbar/>
      <Access/>
    </main>
  )
}
