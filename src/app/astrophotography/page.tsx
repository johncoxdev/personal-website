import FooterIcon from '@/components/FooterIcon'
import NebulaEffect from '@/components/NebulaEffect'
import NormalNavbar from '@/components/NormalNavbar'
import ImageSlider from '@/components/ImageSlider'
import Link from 'next/link'

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
    {
        id: "8",
        src: "./3-26-23/img8.png",
        alt: "image 8"
    },
    {
        id: "8",
        src: "./3-26-23/img8.png",
        alt: "image 8"
    },
]

export default function Astrophotography() {
    return (
        <main className="cursor-custom bg-stars bg-cover h-screen">
            <NebulaEffect />
            <div className='absolute w-full'>
                <NormalNavbar />
                <div className='flex flex-col items-center justify-center'>
                    <p className='flex items-center justify-center text-white font-michroma text-lg underline underline-offset-8 pt-16 md:text-4xl'>ASTROPHOTOGRAPHY</p>
                    <div className='mt-10'>
                        <ImageSlider images={img} />
                    </div>
                    <div className='md:mt-6'>
                        <ul className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                          <li className='rounded-lg bg-gradient-to-b from-purple via-transparent to-dark-babyblue hover:scale-105 transition-all duration-500 ease-out'>
                            <div className='flex flex-col justify-center items-center mx-8 my-4 md:mx-10 md:my-6'>
                              <Link href={"/entry"}>
                                <span className='font-exo text-white text-lg font-semibold'>3.26.23</span>
                              </Link>
                            </div>
                          </li>
                          <li className='rounded-lg bg-gradient-to-b from-purple via-transparent to-dark-babyblue hover:scale-105 transition-all duration-500 ease-out'>
                            <div className='flex flex-col justify-center items-center md:mx-10 md:my-6'>
                              <Link href={"/entry"}>
                                <span className='font-exo text-white text-lg font-semibold'>3-26-23</span>
                              </Link>
                            </div>
                          </li>
                          <li className='rounded-lg bg-gradient-to-b from-purple via-transparent to-dark-babyblue hover:scale-105 transition-all duration-500 ease-out'>
                            <div className='flex flex-col justify-center items-center md:mx-10 md:my-6'>
                              <Link href={"/entry"}>
                                <span className='font-exo text-white text-lg font-semibold'>3-26-23</span>
                              </Link>
                            </div>
                          </li>
                          <li className='rounded-lg bg-gradient-to-b from-purple via-transparent to-dark-babyblue hover:scale-105 transition-all duration-500 ease-out'>
                            <div className='flex flex-col justify-center items-center md:mx-10 md:my-6'>
                              <Link href={"/entry"}>
                                <span className='font-exo text-white text-lg font-semibold'>3-26-23</span>
                              </Link>
                            </div>
                          </li>
                          <li className='rounded-lg bg-gradient-to-b from-purple via-transparent to-dark-babyblue hover:scale-105 transition-all duration-500 ease-out'>
                            <div className='flex flex-col justify-center items-center md:mx-10 md:my-6'>
                              <Link href={"/entry"}>
                                <span className='font-exo text-white text-lg font-semibold'>3-26-23</span>
                              </Link>
                            </div>
                          </li>
                        </ul>
                    </div>
                    <FooterIcon />
                </div>
            </div>
        </main>
    )
}