
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import LandingSection from '@/components/Sections/LandingSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingSection />
    </main>
  )
}
