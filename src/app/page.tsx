import Image from 'next/image'
import HomeNavbar from '@/components/HomeNavbar'
import NebulaEffect from '@/components/NebulaEffect'
import FooterIcon from '@/components/FooterIcon'

export default function Home() {
  return (
    <main className="cursor-custom bg-stars bg-cover min-h-screen">
      <NebulaEffect />  
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className='absolute'>
          <div className='flex justify-center'>
            <Image src="./Willow.svg" width="75" height="75" alt="Willow the Planet Logo"/>
            <p className='animate-animate-text bg-gradient-to-r from-dark-babyblue via-babyblue via-blurple via-purple via-blurple via-babyblue to-dark-babyblue font-michroma bg-clip-text text-white text-4xl sm:text-5xl hover:text-transparent'>John Cox</p>
          </div>
          <HomeNavbar />
          <FooterIcon /> 
        </div>
      </div>
    </main>
  )
} 
