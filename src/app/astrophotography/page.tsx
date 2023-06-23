import FooterIcon from '@/components/FooterIcon'
import NebulaEffect from '@/components/NebulaEffect'
import NormalNavbar from '@/components/NormalNavbar'
import ImageSlider from '@/components/ImageSlider'
import { entries } from '@/components/Entries'
import Link from 'next/link'
import { images } from '@/components/Images'
import React from 'react'


interface DateCardProps {
  key: number;
  children: React.ReactNode;
}

const DateCard = (props: DateCardProps) => {
  return (
    <li className='rounded-lg bg-gradient-to-b from-purple via-transparent to-dark-babyblue hover:scale-105 transition-all duration-500 ease-out'>
      {props.children}
    </li>
  )
}

export default function Astrophotography() {
    return (
        <main className="cursor-custom bg-stars bg-cover h-screen">
            <NebulaEffect />
            <div className='absolute w-full'>
                <NormalNavbar />
                <div className='flex flex-col items-center justify-center'>
                    <p className='flex items-center justify-center text-white font-michroma text-md underline underline-offset-8 pt-16 md:text-4xl'>ASTROPHOTOGRAPHY</p>
                    <div className='mt-10'>
                      <ImageSlider images={images['showcase']} />
                    </div>
                    <div className='flex flex-col'>
                      <p className='mt-2 font-exo font-semibold text-white text-2xl'>Entries:</p>
                        <ul className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                          {
                            entries.map((entries, ind) => {
                              return (
                                <DateCard key={ind}>
                                  <div className='flex flex-col justify-center items-center mx-7 my-4 md:mx-10 md:my-6'>
                                    <Link href={entries.dirpath}>
                                      <span className='font-exo text-white text-lg font-semibold'>{entries.date}</span>
                                    </Link>
                                  </div>
                                </DateCard>
                              )
                            })
                          }
                        </ul>
                    </div>
                    <FooterIcon />
                </div>
            </div>
        </main>
    )
}