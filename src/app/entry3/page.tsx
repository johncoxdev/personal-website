import FooterIcon from '@/components/FooterIcon'
import NebulaEffect from '@/components/NebulaEffect'
import NormalNavbar from '@/components/NormalNavbar'
import ImageSlider from '@/components/ImageSlider'
import { images } from '@/components/Images'
import React from 'react'


export default function Entry3() {
    return (
        <main className="cursor-custom bg-stars bg-cover h-screen">
            <NebulaEffect />
            <div className='absolute w-full'>
                <NormalNavbar />
                <div className='flex flex-col items-center justify-center'>
                    <p className='flex items-center justify-center text-white font-michroma text-md pt-16 md:text-4xl'>Entry 2.4.23</p>
                    <div className='mt-10'>
                      <ImageSlider images={images["2-4-23"]} />
                    </div>
                    <div className='flex flex-col mt-3 w-11/12 sm:w-4/12'>
                      <p className='font-exo text-white'>
                        Once again, another full moon. I will never stop looking at this wonderful thing. Every time I kept taking out my telescope, I was learning new things about how to take images through the eyepiece, and getting that “perfect” shot, or at least what I considered perfect. This was the first time getting a video of the timelapse of the moon moving (transformed into a gif). To this day I get countless videos of my views of the moon, and although they may not come out the best. I still keep them within my Google Drive and look at them.   
                      </p>
                    </div>
                    <FooterIcon />
                </div>
            </div>
        </main>
    )
}