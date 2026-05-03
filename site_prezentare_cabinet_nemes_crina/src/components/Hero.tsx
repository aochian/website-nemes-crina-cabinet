type HeroProps = {
  imageUrl: string
}

export function Hero({ imageUrl }: HeroProps) {
  return (
    <section className="min-h-[calc(100vh-64px)] w-full overflow-hidden bg-white md:flex">
      {/* IMAGE */}
      <div className="relative h-[45vh] w-full md:h-auto md:w-1/2">
        <img
          src={imageUrl}
          alt="Psiholog"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent md:bg-gradient-to-r md:from-black/25 md:via-black/10 md:to-transparent" />
      </div>

      {/* TEXT */}
      <div className="flex w-full items-center justify-center px-6 py-12 md:w-1/2 md:px-12 lg:px-16">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">
            Cabinet individual de psihologie
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-stone-800 md:text-5xl lg:text-6xl">
            Bine ai venit.
          </h1>

          <p className="mt-6 text-base leading-8 text-stone-600 md:text-lg">
            Mai jos găsești detalii despre activitatea profesională, servicii și tehnicile folosite în consiliere.
          </p>
        </div>
      </div>
    </section>
  )
}