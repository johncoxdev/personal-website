import FooterIcon from '@/components/FooterIcon'
import NebulaEffect from '@/components/NebulaEffect'
import NormalNavbar from '@/components/NormalNavbar'
import Link from 'next/link'
import { projects } from '@/components/Projects'

interface ProjectCardProps {
  key: number;
  children: React.ReactNode;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <li className='w-96 sm:m-2 sm:w-114 rounded-lg bg-gradient-to-b from-purple via-transparent to-dark-babyblue hover:scale-105 transition-all duration-500 ease-out'>
      {props.children}
    </li>
  )
}

export default function Projects() {
  return (
    <main className="cursor-custom bg-stars bg-cover h-screen">
      <NebulaEffect />
      <div className='absolute w-full'>
        <NormalNavbar />
        <div className='flex flex-col items-center justify-center'>
          <p className='flex items-center justify-center text-white font-michroma text-2xl sm:text-4xl underline underline-offset-8 pt-16'>PROJECTS</p>
          <div className='justify-center'>
            <ul className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4'>
              {
                projects.map((project, ind) => {
                  return (
                    <ProjectCard key={ind}>
                      <Link href={project.url} target="_blank" className='cursor-custom'>
                        <div className='flex flex-row justify-center items-center'>
                          <div className='justify-center items-center'>
                            <div className='flex flex-col mx-2 my-6 sm:mx-2 sm:my-8 text-center'>
                              <span className='w-32 font-exo text-white text-lg font-semibold'>{project.name}</span>
                              <span className='w-32 font-exo text-white text-lg font-extralight'>{project.date_completed}</span>
                                <div className='flex mt-1 justify-center items-center'>
                                  {
                                    project.icons.map((icon, icon_ind) => {
                                      return (
                                        <img src={`./project_icon/${icon}.svg`} width="25" height="25" alt="Nextjs" className='mx-1' />
                                      )
                                    })
                                  }
                                </div>
                            </div>
                          </div>
                          <div className='font-exo text-white text-sm m-2'>
                            {project.description}
                          </div>
                        </div>
                      </Link>
                    </ProjectCard>
                  )
                })
              }
            </ul>
          </div>
            <FooterIcon />
        </div>
      </div>
    </main>
  )
}