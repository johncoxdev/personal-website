import NebulaEffect from '@/components/NebulaEffect'
import NormalNavbar from '@/components/NormalNavbar'

export default function About() {
  return (
    <main className="cursor-custom bg-stars bg-cover min-h-screen">
      <NormalNavbar />
      <div className="flex items-center justify-center min-h-screen">
        <NebulaEffect />
      </div>
    </main>
  )
}