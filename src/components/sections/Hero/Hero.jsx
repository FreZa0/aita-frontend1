export function Hero() {
  return (
    <main className="mt-16 sm:mt-24 md:mt-32 text-center py-10 sm:py-16 md:py-20 px-4 bg-red mb-8 sm:mb-12 md:mb-16">
      <div className="grid grid-cols-1 gap-4 justify-items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mark text-black mb-4 px-4">
          Мы не фабрика, а мастерская смыслов.
        </h1>
        <div className="flex items-center justify-center">
          <img
            src="Group 1.png"
            className="h-12 sm:h-16 md:h-20 w-auto"
            alt="Decoration"
          />
        </div>
      </div>
    </main>
  )
}

