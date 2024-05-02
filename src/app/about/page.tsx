import { experience } from "@/components/Experience";
import Link from "next/link";

interface ExperienceCardProps {
  key: number;
  children: React.ReactNode;
}

const ExperienceCard = (props: ExperienceCardProps) => {
  return (
    <li className="list-none flex items-center pt-5 hover:scale-105 transition-all duration-500">
      <div className="h-0 w-0 border-t-[10px] border-l-[15px] border-b-[10px] border-solid border-t-transparent border-b-transparent border-l-light-orange pl-5"></div>
      {props.children}
    </li>
  )
}

const About: React.FC = () => {
  return (
    <main id="about_page" className="bg-gradient-to-r from-blue-black from-5% to-off-black shadow-[inset_0_24px_12px_rgba(0,0,0,0.6)] min-h-screen">
      <section className='z-30 flex justify-center items-center text-white font-exo min-h-screen'>
        <div className="hidden sm:flex animate-rotate-planet absolute sm:float-right">
          <img src="./planet.svg" width="750" height="750" alt="Planet"/>
        </div>
        <div id="text_about_me" className="z-20 w-3/4 sm:80 lg:w-100 flex flex-col">
          <p className='text-xl font-bold tracking-widest'>{"Hello, I'm john"}</p>
          <p className='text-xl font-thin'>{"I'm a computer science major, minoring in mathematics at the University of Houston. I have a love for software developing & astronomy. I'm programming by day and a star gazing at night."}</p>
          <br></br>
          <p className='text-xl font-julius'>{"\"Life would be tragic if it was weren't funny.\""}</p>
          <p className='text-xl font-julius'>{"-Stephen Hawking"}</p>
        </div>
        <div id='experience' className='z-20 pt-20 sm:pl-40 sm:pt-0 '>
          <p className='font-thin text-3xl'>Experience</p>
          <div>
            {
              experience.map((job, ind) => {
                return (
                  <ExperienceCard key={ind}>
                    <div className="flex flex-col">
                      <Link href={job.url} target="_blank">
                        <p>{job.position} - {job.organization}</p>
                      </Link>
                      <p className="font-thin ">{job.date}</p>
                    </div>
                  </ExperienceCard>
                )
              })
            }
          </div>
        </div> 
      </section>
    </main>
  )
}

export default About;