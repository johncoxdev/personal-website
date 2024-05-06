import { experience } from "@/components/Experience";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const About: React.FC = () => {
  return (
    <main id="about_page" className="bg-gradient-to-r from-blue-black from-5% to-off-black min-h-screen w-full">
      <section className='flex flex-col lg:flex-row items-center justify-center text-white font-exo sm:min-h-screen'>
        
        <div className="z-20 lg:pr-20 flex flex-col justify-center items-center">
          <img src="./Me.svg" alt="Me" className="relative"/>
          <div className="w-screen p-3 sm:p-0 sm:absolute justify-center items-center text-center sm:mt-[27rem] sm:w-96">
            <p className='text-3xl font-bold tracking-widest'>
              {"Hello, I'm John"}
            </p>
            <p className='text-lg font-thin'>
              {"I'm a computer science major, minoring in mathematics at the University of Houston. I have a love for software developing & astronomy. I'm programming by day and a star gazer at night."}
            </p>
          </div>

        </div> 
        <div className="z-20 mt-20 lg:pl-40">
          <Accordion type="single" collapsible className="w-screen p-3 sm:w-100 sm:p-0">
            {experience.map((job, ind) => {
              return (
                  <AccordionItem value={String(ind)}>
                    <AccordionTrigger>
                        <div className="font-julius">{job.organization} | {job.position}</div>
                        <div>{job.date}</div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc" key={Math.random()}>
                        {job.description.map((desc) => <li className="ml-6 mt-1">{desc}</li>)}
                      </ul>
                      <br></br>
                      <a href={job.url} target='_blank' className="group text-md float-right font-julius text-white transition duration-300 hover:text-light-orange">
                        {">"} {job.organization} Website
                      </a>
                    </AccordionContent>
                  </AccordionItem>
              )
            })}
      </Accordion>
        </div>
      </section>
    </main>
  )
}

export default About;