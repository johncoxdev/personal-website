"use client"; 
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface ImageData {
  id: string;
  src: string;
  alt: string;
}

interface CarouselProps {
  images: ImageData[];
}

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function ImageSlider({ images }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <AiOutlineLeft
          onClick={handlePrevSlide}
          className="justify-center items-center cursor-custom text-4xl text-dark-babyblue"
        />

        <div className="w-40 h-60">
          <Swipe
            onSwipeLeft={handleNextSlide}
            onSwipeRight={handlePrevSlide}
            className=""
            // className="z-10 w-full h-full lg:w-56 lg:h-96"
          >
            {images.map((image, index) => {
              if (index === currentSlide) {
                return (
                  <a href={image.src} target="_blank" >
                      <img
                        key={image.id}
                        src={image.src}
                        alt={image.alt}
                        className="animate-fadeIn"
                      />
                  </a>
                );
              }
              return null;
            })}
          </Swipe>  
        </div>


        <AiOutlineRight
          onClick={handleNextSlide}
          className="justify-center items-center cursor-custom text-4xl text-dark-babyblue"
        />
      </div>
    </div>
  );
}



// {/* <div className="w-full h-[50vh] overflow-hidden scale-50">
//         {/* <div className="w-full h-[50vh] flex overflow-hidden relative m-auto"> */}
//           <Swipe
//             onSwipeLeft={handleNextSlide}
//             onSwipeRight={handlePrevSlide}
//             className=""
//             // className="z-10 w-full h-full lg:w-56 lg:h-96"
//           >  
//             {images.map((image, index) => {
//               if (index === currentSlide) {
//                 return (
//                   <a href={image.src} target="_blank" >
//                       <img
//                         key={image.id}
//                         src={image.src}
//                         alt={image.alt}
//                         className="animate-fadeIn"
//                       />
//                   </a>
//                 );
//               }
//               return null;
//             })}
//           </Swipe>
//         </div>
//       </div>

//       <div className="">
//       {/* <div className="relative flex justify-center p-2"> */}
//         {images.map((_, index) => {
//           return (
//             <div
//               className={
//                 index === currentSlide
//                   ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
//                   : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
//               }
//               key={index}
//               onClick={() => {
//                 setCurrentSlide(index);
//               }}
//             />
//           );
//         })}
//       </div>
//     </div> */}