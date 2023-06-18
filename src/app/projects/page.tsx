import FooterIcon from '@/components/FooterIcon'
import NebulaEffect from '@/components/NebulaEffect'
import NormalNavbar from '@/components/NormalNavbar'
import Link from 'next/link'

export default function Projects() {
  return (
    <main className="cursor-custom min-h-screen">
      <NebulaEffect />
      <div className='absolute w-full'>
        <NormalNavbar />
        <div className='flex flex-col items-center justify-center'>
          <p className='flex items-center justify-center text-white font-michroma text-4xl underline underline-offset-8 pt-16'>PROJECTS</p>
          <div className='justify-center'>
            <ul className='mt-16 grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <li className='rounded-lg bg-gradient-to-b from-purple via-transparent to-dark-babyblue hover:scale-105'>
                <Link href={"/"}>
                  <div className='flex flex-col justify-center items-center mx-14 my-8'>
                    <span className='font-exo text-white text-lg font-semibold opacity-100'>Portfolio Website</span>
                    <span className='font-exo text-white text-lg font-extralight'>May 23'</span>
                  </div>
                </Link>
              </li>
              <li className='rounded-lg bg-gradient-to-b from-purple via-transparent to-dark-babyblue hover:scale-105'>
                <Link href={"/"}>
                  <div className='flex flex-col justify-center items-center mx-14 my-8'>
                    <span className='font-exo text-white text-lg font-semibold'>Theme Park Website</span>
                    <span className='font-exo text-white text-lg font-extralight'>April 23'</span>
                  </div>
                </Link>
              </li>
              <li className='rounded-lg bg-gradient-to-b from-purple via-transparent to-dark-babyblue hover:scale-105'>
                <Link href={"/"}>
                  <div className='flex flex-col justify-center items-center mx-14 my-8'>
                    <span className='font-exo text-white text-lg font-semibold'>Hekima RPG</span>
                    <span className='font-exo text-white text-lg font-extralight'>Jan 23'</span>
                  </div>
                </Link>
              </li>
              <li className='rounded-lg bg-gradient-to-b from-purple via-transparent to-dark-babyblue hover:scale-105'>
                <Link href={"/"}>
                  <div className='flex flex-col justify-center items-center mx-14 my-8'>
                    <span className='font-exo text-white text-lg font-semibold'>Alone</span>
                    <span className='font-exo text-white text-lg font-extralight'>July 22'</span>
                  </div>
                </Link>
              </li>
              <li className='rounded-lg bg-gradient-to-b from-purple via-transparent to-dark-babyblue hover:scale-105'>
                <Link href={"/"}>
                  <div className='flex flex-col justify-center items-center mx-14 my-8'>
                    <span className='font-exo text-white text-lg font-semibold'>Recent Logins</span>
                    <span className='font-exo text-white text-lg font-extralight'>March 21'</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
          <FooterIcon />
      </div>
    </main>
  )
}