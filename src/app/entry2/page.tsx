import FooterIcon from '@/components/FooterIcon'
import NebulaEffect from '@/components/NebulaEffect'
import NormalNavbar from '@/components/NormalNavbar'
import ImageSlider from '@/components/ImageSlider'
import { images } from '@/components/Images'
import React from 'react'


export default function Entry2() {
    return (
        <main className="cursor-custom bg-stars bg-cover h-screen">
            <NebulaEffect />
            <div className='absolute w-full'>
                <NormalNavbar />
                <div className='flex flex-col items-center justify-center'>
                    <p className='flex items-center justify-center text-white font-michroma text-md pt-16 md:text-4xl'>Entry 1.6.23</p>
                    <div className='mt-10'>
                      <ImageSlider images={images["1-6-23"]} />
                    </div>
                    <div className='flex flex-col mt-3 w-11/12 sm:w-4/12'>
                      <p className='font-exo text-white'>
                        As I write these entries, its hard to remember what I actually did these nights looking at the sky. I remember this night I was exploring much more on various optics that I had for my telescope and wanted to take pictures of them using them. Hence why in this collage there is various zooms of the moon. I had found that the 0.25mm optic was great taking an image of the moon in its entirety. Apparently, this was the first full moon of 2023, and I couldn't miss out on that either. Which I'm grateful I didn't.  
                      </p>
                    </div>
                    <FooterIcon />
                </div>
            </div>
        </main>
    )
}