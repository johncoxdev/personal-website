import ImageSlider from '@/components/ImageSlider'
import { images } from '@/components/Images'
import React from 'react'

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