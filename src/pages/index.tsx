
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import LandingSection from '@/components/Sections/LandingPage/LandingSection'
import PrincingSection from '@/components/Sections/LandingPage/PrincingSection'
import EmptySpace from '@/components/EmptySpace'

const inter = Inter({ subsets: ['latin'] })

const bgStyle = {
  backgroundImage: `
  radial-gradient(at 7% 16%, hsla(346,50%,60%,1) 0px, transparent 50%),
  radial-gradient(at 90% 91%, hsla(18,100%,70%,1) 0px, transparent 50%)
  `,
  backgroundColor: "background-color:hsla(0,0%,100%,1)"
}

export default function Home() {
  return (
    <main className="" style={bgStyle}>
      <Navbar />
      <LandingSection />
      <EmptySpace />
      <PrincingSection />
      <EmptySpace />
    </main>
  )
}
