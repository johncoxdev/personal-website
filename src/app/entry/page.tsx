import FooterIcon from '@/components/FooterIcon'
import NebulaEffect from '@/components/NebulaEffect'
import NormalNavbar from '@/components/NormalNavbar'
import ImageSlider from '@/components/ImageSlider'
import { images } from '@/components/Images'
import React from 'react'


export default function Entry() {
    return (
        <main className="cursor-custom bg-stars bg-cover h-screen">
            <NebulaEffect />
            <div className='absolute w-full'>
                <NormalNavbar />
                <div className='flex flex-col items-center justify-center'>
                    <p className='flex items-center justify-center text-white font-michroma text-md pt-16 md:text-4xl'>Entry 12.28.22</p>
                    <div className='mt-10'>
                      <ImageSlider images={images['12-28-22']} />
                    </div>
                    <div className='flex flex-col mt-3 w-11/12 sm:w-4/12'>
                      <p className='font-exo text-white'>
                      I have always been in love with looking at the sky for as long as I can remember. In 5th grade, my mind was set on astronomy when my 5th grade teacher showed us a NASA shuttle launch. Ever since then, I have looked at the moon and stars that I was able to see within the light polluted Houston sky. <br></br>
                      Now it's 12.28.22, and I got my first telescope for Christmas, and my eyes are set for the moon. This is what I've been always wanting to do since I've been a young child and was something I was extremely excited to finally do. The telescope came with a cheap plastic phone mount, but I'm still happy with it as I can still take pictures of the things I love. This image is the only image that I saved, as I deleted the other since I was attempting to take "clear" images. <br></br>
                      My first image of the moon I took through a telescope that was mine.
                      </p>
                    </div>
                    <FooterIcon />
                </div>
            </div>
        </main>
    )
}