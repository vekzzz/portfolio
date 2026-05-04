import { Nav } from '@/components/layout/Nav'
import { StatusBar } from '@/components/layout/StatusBar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { About } from '@/components/sections/About'
import { Stack } from '@/components/sections/Stack'
import { Experience } from '@/components/sections/Experience'
import { Services } from '@/components/sections/Services'
import { FeaturedWork } from '@/components/sections/FeaturedWork'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'

export default function App() {
  return (
    <>
      <div className="grid-bg" />
      <Nav />
      <StatusBar />
      <Hero />
      <Marquee />
      <About />
      <Stack />
      <Experience />
      <Services />
      <FeaturedWork />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
