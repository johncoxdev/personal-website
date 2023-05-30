import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image src="./Willow.svg" width="100" height="100" alt="Willow the Planet Logo" />
        <p className='animate-text bg-gradient-to-r to-orange-500 via-purple-500 from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black'>John Cox</p>
      </div>
    </main>
  )
}
