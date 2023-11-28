import { projects } from '@/components/Projects'
import Link from 'next/link';

interface ProjectCardProps {
  key: number;
  children: React.ReactNode;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <li>
      {props.children}
    </li>
  )
}

const Projects: React.FC = () => {
  return(
    <main id="project_page" className="bg-gradient-to-r from-blue-black from-5% to-off-black min-h-screen">
      <div className='flex justify-center items-center min-h-screen'>
        <div className='z-30'>
          <ul className='mt-16 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4'>
            {
              projects.map((project, id) => {
                return (
                  <ProjectCard key={id}>
                    <Link href={project.url} target="_blank">
                    <div className='flex w-72 h-72 flex-col justify-center bg-gradient-to-b from-dark-blue to-off-black'>
                      <div className='group w-72 h-72 [perspective:5000px]'>
                        <div className='relative h-72 w-72 shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                          <div className='absolute inset-0'>
                            <div className='h-72 w-72 flex flex-col items-center justify-center'>
                              <p className='font-normal text-xl' >{project.name}</p>
                              <p className='font-thin text-xl'>{project.date_completed}</p>
                              <div className='flex flex-row'>
                                {
                                  project.icons.map((icon, id) => {
                                    return (
                                      <img key={id} src={`./project_icon/${icon}.svg`} width="25" height="25" alt="Nextjs" className='mx-1' />
                                    )
                                  })
                                }
                              </div>
                            </div>
                          </div>
                          <div className='absolute inset-0 h-72 w-72 bg-gradient-to-b from-dark-blue to-off-black px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                            <div className='text-sm font-semibold flex h-full w-full flex-col justify-center items-center'>
                              <p>{project.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </Link>
                  </ProjectCard>
                )
              })
            }
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Projects;