import { motion } from 'motion/react'

export default function Hero({ t }) {
  return (
    <section className="relative w-full min-h-[480px] sm:min-h-[540px] md:min-h-[620px] h-[68vh] md:h-[78vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Slow Breathing Zoom Motion */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
          alt="Pemandangan Danau Tenang"
          animate={{ scale: [1.02, 1.08, 1.02] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-bgLight"></div>
        {/* Soft Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Text Content with Staggered Entrance */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto mt-[-4%] sm:mt-[-2%] md:mt-[-4%]">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg tracking-tight"
        >
          {t.hero.titleLine1}
          <br className="hidden sm:inline" /> {t.hero.titleLine2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-base sm:text-lg md:text-xl text-gray-100 mb-5 sm:mb-7 font-light drop-shadow-md max-w-2xl mx-auto px-2"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 0.95, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="font-script text-3xl sm:text-4xl md:text-5xl text-white opacity-95 drop-shadow-md"
        >
          {t.hero.handwriting}
        </motion.p>
      </div>

      {/* Subtle Animated Scroll Indicator */}
      <motion.a
        href="#tentang"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.8 }}
        className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors cursor-pointer group"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-white/40 group-hover:border-white/80 transition-colors flex justify-center pt-1.5"
        >
          <span className="w-1 h-2 rounded-full bg-white/80 animate-pulse" />
        </motion.div>
      </motion.a>
    </section>
  )
}

