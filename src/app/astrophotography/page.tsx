import FooterIcon from '@/components/FooterIcon'
import NebulaEffect from '@/components/NebulaEffect'
import NormalNavbar from '@/components/NormalNavbar'
import ImageSlider from '@/components/ImageSlider'

import Link from 'next/link'

interface DateCardProps {
  key: number;
  children: React.ReactNode;
}

const DateCard = (props: DateCardProps) => {
  return (
    <li className='rounded-lg bg-gradient-to-b from-purple via-transparent to-dark-babyblue hover:scale-105'>
      {props.children}
    </li>
  )

}

export default function Projects() {
    const img = [
        {
            id: "1",
            src: "./3-26-23/img1.png",
            alt: "image 1"
        },
        {
            id: "2",
            src: "./3-26-23/img2.png",
            alt: "image 2"
        },
        {
            id: "3",
            src: "./3-26-23/img3.png",
            alt: "image 3"
        },
        {
            id: "4",
            src: "./3-26-23/img4.png",
            alt: "image 4"
        },
        {
            id: "5",
            src: "./3-26-23/img5.png",
            alt: "image 5"
        },
        {
            id: "6",
            src: "./3-26-23/img6.png",
            alt: "image 6"
        },

    ]
    return (
        
        <main className="cursor-custom bg-stars bg-cover h-screen">
            <ImageSlider images={img} />
            {/* <NebulaEffect />
            <div className='absolute w-full'>
                <NormalNavbar />
                <div className='flex flex-col items-center justify-center'>
                    <p className='flex items-center justify-center text-white font-michroma text-lg underline underline-offset-8 pt-16 md:text-4xl'>ASTROPHOTOGRAPHY</p>
                    <section>
                        <div>
                            
                        </div>
                    </section>
                    <FooterIcon />
                </div>
            </div> */}
        </main>
    )
}