import Image from 'next/image'

export default function Entry2() {
  return (
    <main className="cursor-custom bg-stars bg-cover min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className='absolute'>
          <div className='flex justify-center'>
            <Image src="./Willow.svg" width="75" height="75" alt="Willow the Planet Logo" className='hover:animate-bounce'/>
            <p className='animate-animate-text bg-gradient-to-r from-dark-babyblue via-babyblue via-blurple via-purple via-blurple via-babyblue to-dark-babyblue font-michroma bg-clip-text text-white text-4xl sm:text-5xl hover:text-transparent'>Entry 3</p>
          </div>
        </div>
      </div>
    </main>
  )
} 
