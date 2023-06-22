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
    <div className="flex flex-row justify-center items-center">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="cursor-custom text-5xl text-dark-babyblue mr-4"
      />

      <div className="w-40 h-64 md:w-72 md:h-96">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
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
        className="cursor-custom text-5xl text-dark-babyblue ml-4"
      />
    </div>
  );
}