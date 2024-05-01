import FooterIcon from '@/components/FooterIcon'
import About from './about/page'
import Navbar from '@/components/Navbar'
import StarEffect from '@/components/StarEffect'
import Projects from './projects/page'
import Astrophotography from './astrophotography/page'

export default function Home() {
  return (
    <main id="home" className="bg-gradient-to-r from-blue-black from-5% to-off-black min-h-screen">
      <StarEffect />  
      <Navbar />
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <p className='font-julius text-5xl sm:text-9xl text-light-orange'>John Cox</p>
        <FooterIcon />
      </div>
      <About />
      <Projects / >
      <Astrophotography />
    </main>
  )
} 