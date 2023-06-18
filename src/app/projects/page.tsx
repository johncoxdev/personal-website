import FooterIcon from '@/components/FooterIcon'
import NebulaEffect from '@/components/NebulaEffect'
import NormalNavbar from '@/components/NormalNavbar'
import Link from 'next/link'

export default function Projects() {
  return (
    <main className="cursor-custom bg-stars bg-cover bg-round h-screen">
      <NebulaEffect />
      <div className='absolute w-full'>
        <NormalNavbar />
        <div className='flex flex-col items-center justify-center'>
          <p className='flex items-center justify-center text-white font-michroma text-4xl underline underline-offset-8 pt-16'>PROJECTS</p>
          <div className='justify-center'>
            <ul className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <li className='rounded-lg bg-gradient-to-b from-purple via-transparent to-dark-babyblue hover:scale-105'>
                <Link href={"/"}>
                  <div className='flex flex-col justify-center items-center mx-14 my-8'>
                    <span className='font-exo text-white text-lg font-semibold'>Website Portfolio</span>
                    <span className='font-exo text-white text-lg font-extralight'>June 23'</span>
                    <div className='flex mt-1'>
                      <img src="./project_icon/nextjs.svg" width="25" height="25" alt="Nextjs" className='mx-1' />
                      <img src="./project_icon/tailwind.svg" width="25" height="25" alt="TailwindCSS" className='mx-1'/>
                      <img src="./project_icon/typescript.svg" width="25" height="25" alt="TypeScript" className='mx-1'/>
                      <img src="./project_icon/Figma.svg" width="25" height="25" alt="Figma" className='mx-1'/>
                    </div>
                  </div>
                </Link>
              </li>
              <li className='rounded-lg bg-gradient-to-b from-purple via-transparent to-dark-babyblue hover:scale-105'>
                <Link href={"/"}>
                  <div className='flex flex-col justify-center items-center mx-14 my-8'>
                    <span className='font-exo text-white text-lg font-semibold'>Theme Park Website</span>
                    <span className='font-exo text-white text-lg font-extralight'>April 23'</span>
                    <div className='flex mt-1'>
                      <img src="./project_icon/mysql.svg" width="25" height="25" alt="MySQL" className='mx-1' />
                      <img src="./project_icon/nodejs.svg" width="25" height="25" alt="Nodejs" className='mx-1'/>
                      <img src="./project_icon/javascript.svg" width="25" height="25" alt="Javascript" className='mx-1'/>
                    </div>
                  </div>
                </Link>
              </li>
              <li className='rounded-lg bg-gradient-to-b from-purple via-transparent to-dark-babyblue hover:scale-105'>
                <Link href={"/"} className='cursor-custom'>
                  <div className='flex flex-col justify-center items-center mx-14 my-8'>
                    <span className='font-exo text-white text-lg font-semibold'>Hekima RPG</span>
                    <span className='font-exo text-white text-lg font-extralight'>Jan 23'</span>
                    <div className='flex mt-1'>
                      <img src="./project_icon/sequelize.svg" width="25" height="25" alt="Sequelize" className='mx-1' />
                      <img src="./project_icon/javascript.svg" width="25" height="25" alt="Javascript" className='mx-1'/>
                      <img src="./project_icon/googlecloud.svg" width="25" height="25" alt="Google Cloud" className='mx-1'/>
                      <img src="./project_icon/discord.svg" width="25" height="25" alt="DiscordJS" className='mx-1'/>
                    </div>
                  </div>
                </Link>
              </li>
              <li className='rounded-lg bg-gradient-to-b from-purple via-transparent to-dark-babyblue hover:scale-105'>
                <Link href={"/"}>
                  <div className='flex flex-col justify-center items-center mx-14 my-8'>
                    <span className='font-exo text-white text-lg font-semibold'>Alone</span>
                    <span className='font-exo text-white text-lg font-extralight'>July 22'</span>
                    <div className='flex mt-1'>
                      <img src="./project_icon/python.svg" width="25" height="25" alt="Python" className='mx-1' />
                    </div>
                  </div>
                </Link>
              </li>
              <li className='rounded-lg bg-gradient-to-b from-purple via-transparent to-dark-babyblue hover:scale-105'>
                <Link href={"/"}>
                  <div className='flex flex-col justify-center items-center mx-14 my-8'>
                    <span className='font-exo text-white text-lg font-semibold'>Recent Logins</span>
                    <span className='font-exo text-white text-lg font-extralight'>March 21'</span>
                    <div className='flex mt-1'>
                      <img src="./project_icon/opencv.svg" width="25" height="25" alt="OpenCV" className='mx-1' />
                      <img src="./project_icon/python.svg" width="25" height="25" alt="Python" className='mx-1'/>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
            <FooterIcon />
        </div>
      </div>
    </main>
  )
}