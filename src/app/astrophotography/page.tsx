import ImageSlider from '@/components/ImageSlider'
import { images } from '@/components/Images'
import React from 'react'


interface DateCardProps {
  key: number;
  children: React.ReactNode;
}

const DateCard = (props: DateCardProps) => {
  return (
    <li className='rounded-lg bg-gradient-to-b from-dark-blue to-off-black hover:scale-105 transition-all duration-500 ease-out'>
      {props.children}
    </li>
  )
}



const Astrophotography: React.FC = () => {
  return (
    <main id="astrophotography_page" className='className="bg-gradient-to-r from-blue-black from-5% to-off-black min-h-screen"'>
      <div className='relative z-30 flex flex-col items-center justify-center min-h-screen'>
        <ImageSlider images={images['showcase']} />
        <div className='flex items-center justify-center'>
            <span className='font-exo text-white text-sm'>
            Equipment: <br /> - Orion 130ST <br /> - Iphone 14 Pro Max  <br /> - Eyepiece 0.06, 0.10, 0.25 
          </span>
        </div>
      </div>
    </main>
  )
}

export default Astrophotography;