
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import LandingSection from '@/components/Sections/LandingPage/LandingSection'
import PrincingSection from '@/components/Sections/LandingPage/PrincingSection'
import EmptySpace from '@/components/EmptySpace'
import FAQSection from '@/components/Sections/LandingPage/FAQSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <LandingSection />
      <EmptySpace />
      <PrincingSection />
      <EmptySpace gradient />
      <FAQSection />
    </main>
  )
}
