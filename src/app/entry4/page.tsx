import FooterIcon from '@/components/FooterIcon'
import NebulaEffect from '@/components/NebulaEffect'
import NormalNavbar from '@/components/NormalNavbar'
import ImageSlider from '@/components/ImageSlider'
import { images } from '@/components/Images'
import React from 'react'


export default function Entry4() {
    return (
        <main className="cursor-custom bg-stars bg-cover h-screen">
            <NebulaEffect />
            <div className='absolute w-full'>
                <NormalNavbar />
                <div className='flex flex-col items-center justify-center'>
                    <p className='flex items-center justify-center text-white font-michroma text-md pt-16 md:text-4xl'>Entry 3.4.23</p>
                    <div className='mt-10'>
                      <ImageSlider images={images["3-4-23"]} />
                    </div>
                    <div className='flex flex-col mt-3 w-11/12 sm:w-4/12'>
                      <p className='font-exo text-white'>
                        There isnt much I remember about this particular time. I remember driving home, and seeing the moon clearly during the daylight, and wanted to capture pictures of it before it got. It was going to be something different I hadnt been able to do. I took out my telescope and pointed it towards the moon. There was two main issues that I noticed right away, 1. There was a tree in the way, which you may see a hint of brown with of the image. 2. It was daylight which meant the telescope was taking in much more light compared to the night sky. I didnt consider, for #2, and in return made the moon look faded. Although you could make out the moon really well with the naked eye, it did not translate as well though my phone. It was something I learned, and now take into consideration when looking at objects when it not completely night.    
                      </p>
                    </div>
                    <FooterIcon />
                </div>
            </div>
        </main>
    )
}