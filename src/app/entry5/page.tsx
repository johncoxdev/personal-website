import FooterIcon from '@/components/FooterIcon'
import NebulaEffect from '@/components/NebulaEffect'
import NormalNavbar from '@/components/NormalNavbar'
import ImageSlider from '@/components/ImageSlider'
import { images } from '@/components/Images'
import React from 'react'


export default function Entry5() {
    return (
        <main className="cursor-custom bg-stars bg-cover h-screen">
            <NebulaEffect />
            <div className='absolute w-full'>
                <NormalNavbar />
                <div className='flex flex-col items-center justify-center'>
                    <p className='flex items-center justify-center text-white font-michroma text-md pt-16 md:text-4xl'>Entry 3.25.23</p>
                    <div className='mt-10'>
                      <ImageSlider images={images["3-25-23"]} />
                    </div>
                    <div className='flex flex-col mt-3 w-11/12 sm:w-4/12'>
                      <p className='font-exo text-white'>
                      I was supposed to be born on my dads birthday, March 24th, so they named me my dads name which made me a Jr. Every year, my family heads towards Matagorda, Texas for my dads birthday. We have been going over there for over decade, and its something we look forward to every single year. This year was probably the best one when we went to Matagorda. We celebrated my dads birthday that Friday, and Saturday night… it was a clear night. I had brought my telescope, and the Bortles light level was at a 4. Much better compared to Houstons 8 or 9 light level (the max level). <br></br>
                      I took out my telescope and the first thing I pointed at was the moon. I took as many pictures as I could, and then my telescope pointed to a new target. Something I had never done before, and I was excited to see for the first time. I pointed it towards the Orion Nebula. This was probably the best thing I had ever seen. In the phone you could only mark out one bright star due to the movement of the telescope & the earth. When you looked through the eye piece, you could see a faint blurriness of color from the nebula. As faint as it was, it was still a wonderful thing to see. <br></br>
                      After taking images, I focused the sky to myself without my phone and looked at many stars, looked back at the moon, and of course looked at the planets that were out that night. I spent so much time outside as the mosquitoes ravaged. 
                      </p>
                    </div>
                    <FooterIcon />
                </div>
            </div>
        </main>
    )
}