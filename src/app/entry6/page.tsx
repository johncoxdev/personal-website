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
                    <p className='flex items-center justify-center text-white font-michroma text-md pt-16 md:text-4xl'>Entry 6.2.23</p>
                    <div className='mt-10'>
                      <ImageSlider images={images["6-2-23"]} />
                    </div>
                    <div className='flex flex-col mt-3 w-11/12 sm:w-4/12'>
                      <p className='font-exo text-white'>
                        The school year was over, after being stressed out for weeks over finals. It was finally over, and I had so much time on my hands to look at the sky and do what I loved once again. I only looked at the moon this night, and I remember loving every second of it once again. This time, I had a new thing I wanted to tackle. Editing the photos just as every other astrophotographer does. In the last image, the slightly more orange moon, is the only image I edited to attempt to make it “better”. Although I loved the image originally, the newly edited image was something new to love. <br></br>
                        My mind was still on March 25th and wanting to look at stars, constellations, nebulas, and planets. Ever since March 25th I set my goal to continue to dive into the career I want to do (Data Science) and continue with my loving hobby of astronomy/astrophotography. Although I may be an amateur one, Ill always continue to get better equipment to bring the beauty of space to my screen and others. 
                      </p>
                    </div>
                    <FooterIcon />
                </div>
            </div>
        </main>
    )
}