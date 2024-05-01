import FooterIcon from '@/components/FooterIcon'
import About from './about/page'
import Navbar from '@/components/Navbar'
import StarEffect from '@/components/StarEffect'
import Projects from './projects/page'
import Astrophotography from './astrophotography/page'
import { WavyBackground } from '@/components/ui/wavy-background'

export default function Home() {
  return (
    <main id="home" className="bg-off-black min-h-screen ">
      <StarEffect />  
      <Navbar/>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <WavyBackground className="max-w-4xl mx-auto">
          <p className='font-julius text-5xl sm:text-9xl text-light-orange'>John Cox</p>
          <FooterIcon />
        </WavyBackground>
      </div>
      <About />
      <Projects / >
      <Astrophotography />
    </main>
  )
} 