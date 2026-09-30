export default function Hero({ t }) {
  return (
    <section className="relative w-full min-h-[460px] sm:min-h-[520px] md:min-h-[600px] h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
          alt="Pemandangan Danau Tenang"
          className="w-full h-full object-cover object-center transform scale-105 duration-[20s] ease-linear"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-bgLight"></div>
      </div>

      {/* Hero Text Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto fade-in-up mt-[-4%] sm:mt-[-2%] md:mt-[-5%]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg tracking-tight">
          {t.hero.titleLine1}
          <br className="hidden sm:inline" /> {t.hero.titleLine2}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8 font-light drop-shadow-md max-w-2xl mx-auto px-2">
          {t.hero.subtitle}
        </p>
        <p className="font-script text-3xl sm:text-4xl md:text-5xl text-white opacity-95 drop-shadow-md mt-4 sm:mt-6">
          {t.hero.handwriting}
        </p>
      </div>
    </section>
  )
}
