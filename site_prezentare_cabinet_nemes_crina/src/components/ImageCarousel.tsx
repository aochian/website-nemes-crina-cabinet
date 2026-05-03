import { useEffect, useState } from 'react'

type CarouselProps = {
  images: string[]
}

export function ImageCarousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // autoplay
  useEffect(() => {
    const interval = setInterval(next, 4000)
    return () => clearInterval(interval)
  }, [index])

  return (
    <div className="relative w-full overflow-hidden rounded-3xl">
      
      {/* SLIDES */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="h-[300px] w-full flex-shrink-0 object-cover md:h-[700px]"
          />
        ))}
      </div>

      {/* BUTTONS */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow hover:bg-white"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow hover:bg-white"
      >
        ›
      </button>

      {/* DOTS */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 cursor-pointer rounded-full ${
              i === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}