import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex items-center'>
        <Image src="./Willow.svg" width="100" height="100" alt="Willow the Planet Logo"/>
        <p className='font-exo font-extralight hover:animate-text bg-gradient-to-r from-dark-babyblue via-babyblue via-blurple via-purple via-blurple via-babyblue to-dark-babyblue from-dark-babyblue via-babyblue via-blurple via-purple bg-clip-text text-white text-5xl font-hover:text-transparent'>John Cox</p>
      </div>
    </main>
  )
}
