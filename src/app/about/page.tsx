import NebulaEffect from '@/components/NebulaEffect'
import NormalNavbar from '@/components/NormalNavbar'

export default function About() {
  return (
    <main className="cursor-custom bg-stars bg-cover min-h-screen">
      <NebulaEffect />
      <div className='absolute w-full'>
        <NormalNavbar />
        <div>
          <p className='text-white font-michroma text-3xl'>About Me</p>
        </div>
      </div>
    </main>
  )
}