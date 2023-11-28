"use client"; 
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
        className="text-5xl text-light-orange mr-4 select-none"
      />

      <div className="select-none">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <a href={image.src} target="_blank" key={image.id} className="justify-center">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="animate-fadeIn select-none w-32 h-auto md:w-64"
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
        className="cursor-custom text-5xl text-light-orange ml-4 select-none"
      />
    </div>
  );
}