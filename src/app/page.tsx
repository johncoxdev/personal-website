import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      {/* circle */}
      {/* <div className="w-114 h-114 shrink-0 grow-0 rounded-full opacity-45 blur-6xl" style={{ background: 'radial-gradient(circle, rgba(43, 39, 143, 1) 0%, rgba(0, 0, 0, 0) 100%)' }}></div> */}
      {/* name title */}
      <div className='absolute'>  
        <div className='flex justify-center'>
          <Image src="./Willow.svg" width="75" height="75" alt="Willow the Planet Logo"/>
          <p className='animate-animate-text bg-gradient-to-r from-dark-babyblue via-babyblue via-blurple via-purple via-blurple via-babyblue to-dark-babyblue font-michroma bg-clip-text text-white text-2xl sm:text-5xl hover:text-transparent'>John Cox</p>
        </div>
          {/* Home Navigation Bar  */}
          <div className='flex text-center justify-center'>
            <ul className='sm:flex justify-center text-md sm:text-3xl pt-10'>
              <li className='font-exo font-extralight '>Home</li>
              <li className='font-exo font-extralight sm:pl-16'>About</li>
              <li className='font-exo font-extralight sm:pl-16'>Projects</li>
              <li className='font-exo font-extralight sm:pl-16'>Astrophotography</li>
            </ul>
          </div>
          {/* Icons */}
          <div className='flex justify-center pt-10'>
            <a>
              <Image src="./Resume.svg" width="30" height="30" alt="Resume"/>
            </a>
            <Image src="./Email.svg" width="30" height="30" alt="Email"/>
            <Image src="./Github.svg" width="30" height="30" alt="Github"/>
            <Image src="./Linkedin.svg" width="30" height="30" alt="LinkedIn"/>
            <Image src="./Twitter.svg" width="30" height="30" alt="Twitter"/>
          </div>
      </div>
    </main>
  )
}
