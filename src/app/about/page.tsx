import { experience } from "@/components/Experience";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



// interface ExperienceCardProps {
//   key: number;
//   children: React.ReactNode;
// }

// const ExperienceCard = (props: ExperienceCardProps) => {
//   return (
//     <details>
//       {props.children}
//     </details>
//   )
// }

const About: React.FC = () => {
  return (
    <main id="about_page" className="bg-gradient-to-r from-blue-black from-5% to-off-black min-h-screen w-full">
      <section className='flex items-center justify-center text-white font-exo'>
        <div className="z-20 flex flex-col justify-center items-center min-h-screen">
          <img src="./me.svg" alt="Me" className="relative"/>
          <div className="absolute justify-center items-center text-center mt-[27rem] w-96">
            <p className='text-3xl font-bold tracking-widest'>
              {"Hello, I'm John"}
            </p>
            <p className='text-lg font-thin'>
              {"I'm a computer science major, minoring in mathematics at the University of Houston. I have a love for software developing & astronomy. I'm programming by day and a star gazing at night."}
            </p>
          </div>
        </div> 
        <div className="z-20 pl-40">
          <Accordion type="single" collapsible className="w-100">
            {experience.map((job, ind) => {
              return (
                  <AccordionItem value={String(ind)}>
                    <AccordionTrigger>
                        <div className="font-julius">{job.organization} | {job.position}</div>
                        <div>{job.date}</div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc">
                        {job.description.map((desc) => <li className="ml-6 mt-1">{desc}</li>)}
                      </ul>
                      <br></br>
                      <a href={job.url} target='_blank' className="group text-md float-right font-julius text-white transition duration-700 hover:text-light-orange">
                        {">"} {job.organization} Website
                      </a>
                    </AccordionContent>
                  </AccordionItem>
              )
            })}
      </Accordion>
          {/* {
            experience.map((job, ind) => {
              return (
               <details className="w-100 bg-blue-black ring-1 ring-stone-800 open:animate-box-animation">
                <summary className="text-julius bg-blue-black p-3 w-100 ring-1 ring-stone-800">{job.organization} | {job.position}</summary>
                <ul className="">
                  {job.description.map((desc) => <li className="p-1">{desc}</li>)}
                </ul>
               </details> 
              )
            }) 
          } */}
        </div>
      </section>
    </main>
  )
}

export default About;

{/* <div className="hidden sm:flex animate-rotate-planet absolute sm:float-right">
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
        </div>  */}