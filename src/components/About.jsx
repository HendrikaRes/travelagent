export default function About({ t }) {
  return (
    <section id="tentang" className="w-full bg-white py-16 sm:py-20 md:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Kolom Kiri: Teks Narasi & Statistik */}
          <div className="lg:col-span-7 fade-in-up delay-100">
            <div className="inline-block mb-3 sm:mb-4 px-3.5 sm:px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold tracking-wider uppercase">
              {t.about.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-textDark mb-5 sm:mb-6 leading-tight">
              {t.about.title}
            </h2>
            <div className="space-y-4 text-textLight text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              <p>{t.about.desc1}</p>
              <p>{t.about.desc2}</p>
            </div>

            {/* Statistik / Key Highlights */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              <div className="p-3.5 sm:p-5 rounded-2xl bg-bgLight border border-gray-100 text-center sm:text-left transition-all hover:shadow-soft">
                <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary">
                  {t.about.stat1Number}
                </span>
                <span className="block text-[11px] sm:text-xs md:text-sm font-medium text-textLight mt-1">
                  {t.about.stat1Label}
                </span>
              </div>
              <div className="p-3.5 sm:p-5 rounded-2xl bg-bgLight border border-gray-100 text-center sm:text-left transition-all hover:shadow-soft">
                <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary">
                  {t.about.stat2Number}
                </span>
                <span className="block text-[11px] sm:text-xs md:text-sm font-medium text-textLight mt-1">
                  {t.about.stat2Label}
                </span>
              </div>
              <div className="p-3.5 sm:p-5 rounded-2xl bg-bgLight border border-gray-100 text-center sm:text-left transition-all hover:shadow-soft">
                <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary">
                  {t.about.stat3Number}
                </span>
                <span className="block text-[11px] sm:text-xs md:text-sm font-medium text-textLight mt-1">
                  {t.about.stat3Label}
                </span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Gambar & Kartu Aksen Mengambang */}
          <div className="lg:col-span-5 relative fade-in-up delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-soft border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80"
                alt="Tentang Tapra Trip"
                className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Floating Badge Aksen */}
            <div className="absolute -bottom-5 sm:-bottom-6 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3.5 max-w-[280px] sm:max-w-xs">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-script text-xl sm:text-2xl text-primary font-bold leading-tight">
                  {t.about.highlightTag}
                </p>
                <p className="text-[11px] sm:text-xs text-textLight">Tapra Trip Experience</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
