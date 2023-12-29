import { PreviousIcon } from "./Icons/PreviousIcon"
import { NextIcon } from "./Icons/NextIcon"
import { useState } from "react"

type ImageSliderProps = {
  imageUrls: string[]
}

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  function handleNextClick() {
    if (currentImageIndex === imageUrls.length - 1) {
      setCurrentImageIndex(0)
      return
    }

    setCurrentImageIndex(prevState => prevState + 1)
  }

  function handlePreviousClick() {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(imageUrls.length - 1)
      return
    }

    setCurrentImageIndex(prevState => prevState - 1)
  }

  return (
    <section className="relative">
      <div className="h-[20rem]">
        <img 
          className="size-full object-cover object-top"
          src={imageUrls[currentImageIndex]} 
          alt="" 
        /> 
      </div>
      <button 
        onClick={handlePreviousClick}
        className="absolute top-1/2 left-4 -translate-y-1/2
        bg-white/70 p-1 rounded-full flex justify-center items-center">
        <PreviousIcon />
      </button>
      <button
        onClick={handleNextClick} 
        className="absolute top-1/2 right-4 -translate-y-1/2
        bg-white/70 p-1 rounded-full flex justify-center items-center">
        <NextIcon />
      </button>
    </section>
  )
}