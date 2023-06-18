import FooterIcon from '@/components/FooterIcon'
import NebulaEffect from '@/components/NebulaEffect'
import NormalNavbar from '@/components/NormalNavbar'

export default function Projects() {
  return (
    <main className="cursor-custom bg-stars bg-cover min-h-screen">
      <NebulaEffect />
      <div className='absolute w-full'>
        <NormalNavbar />
        <div className='flex flex-col items-center justify-center'>
          <p className='flex items-center justify-center text-white font-michroma text-4xl underline underline-offset-8 pt-16'>PROJECTS</p>
        </div>
      </div>
    </main>
  )
}