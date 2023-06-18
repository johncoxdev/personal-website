import FooterIcon from '@/components/FooterIcon'
import NebulaEffect from '@/components/NebulaEffect'
import NormalNavbar from '@/components/NormalNavbar'

export default function About() {
  return (
    <main className="cursor-custom bg-cover bg-stars min-h-screen">
      <NebulaEffect />
      <div className='absolute w-full'>
        <NormalNavbar />
        <div className='flex flex-col items-center justify-center'>
          <p className='flex items-center justify-center text-white font-michroma text-4xl underline underline-offset-8 pt-16'>ABOUT</p>
          {/* Start of the description */}
          <div className='md:flex justify-center'>
            <div className='w-56 h-16 pt-24 pr-4 '>
              <p className='font-exo font-extralight text-white text-2xl tracking-widestxl'>Hi, I'm John.</p>
              <p className='font-exo font-thin text-white text-md'>I am a student at the University of Houston. I have a love for web development & data science. During the day, I'm hard at work programming, and at night I stare at the night sky looking at the stars and beyond.</p>
            </div>
            <img className='invisible md:visible' src="/line_sep.svg"></img>           
            <div className='pt-2'>
              <ul>
                <li className='my-11'>
                  <p className='font-exo font-medium text-white text-md'>Logistics Executive - CodeRED</p>
                  <p className='font-exo font-thin text-white text-md'>February 2022 - Present</p>
                </li>
                <li className='my-11'>
                  <p className='font-exo font-medium text-white text-md'>Director of Socials - CougarCS</p>
                  <p className='font-exo font-thin text-white text-md'>December 2022 - Present</p>
                </li>
                <li className='my-11'>
                  <p className='font-exo font-medium text-white text-md'>Web Dev Committee - CougarCS</p>
                  <p className='font-exo font-thin text-white text-md'>December 2022 - January 2023</p>
                </li>
                <li className='my-11'>
                  <p className='font-exo font-medium text-white text-md'>TeamLead - code[coogs]</p>
                  <p className='font-exo font-thin text-white text-md'>August 2022 - January 2023</p>
                </li>
              </ul>
            </div>
            {/* End of the description */}
          </div>
            <FooterIcon/>
        </div>
      </div>
    </main>
  )
}