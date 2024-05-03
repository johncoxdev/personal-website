import FooterIcon from '@/components/FooterIcon'
import About from './about/page'
import Navbar from '@/components/Navbar'
import StarEffect from '@/components/StarEffect'
import Projects from './projects/page'
import Astrophotography from './astrophotography/page'

export default function Home() {
  return (
    <main id="home" className="bg-gradient-to-r from-blue-black from-5% to-off-black min-h-screen ">
      <StarEffect />  
      <Navbar />
      <div className='flex flex-col items-center justify-center min-h-screen'>
          <p className='font-julius text-5xl sm:text-9xl text-light-orange'>John Cox</p>
          <FooterIcon />
      </div>
      <a href="#about_page" className='hidden z-20 sm:inline-flex absolute sm:left-60 sm:bottom-20 hover:scale-105 duration-300'>
        <div className='rounded-full items-center justify-center flex outline outline-stone-800 outline-1 bg-blue-black w-48 h-12'>
          <p className='font-julius font-medium text-md text-white'>Scroll Down</p> 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.75 17.25L12 21M12 21L8.25 17.25M12 21V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </a>
      <About />
      <Projects / >
      <Astrophotography />
    </main>
  )
} 
