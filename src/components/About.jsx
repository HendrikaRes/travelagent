import { motion } from 'motion/react'

export default function About({ t }) {
  return (
    <section id="tentang" className="w-full bg-white py-16 sm:py-20 md:py-24 border-t border-[#f0e2e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Kolom Kiri: Teks Narasi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-textDark mb-5 sm:mb-6 leading-tight">
              {t.about.title}
            </h2>
            <div className="space-y-4 text-textLight text-sm sm:text-base leading-relaxed">
              <p>{t.about.desc1}</p>
              <p>{t.about.desc2}</p>
            </div>

            {/* Jalur Titik-Titik Perjalanan Beranimasi (Titik Awal ke Bendera Tujuan) */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#fff9fa] via-white to-[#fff6f7] border border-[#f0e2e4] shadow-soft relative overflow-hidden group"
            >
              {/* Header Info */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping inline-block" />
                <span className="w-2 h-2 rounded-full bg-primary -ml-4 inline-block" />
                <span className="text-xs sm:text-sm font-bold text-textDark">
                  {t.about.journeyTitle || 'Alur Perjalanan Impian'}
                </span>
              </div>

              {/* SVG Jalur Titik-Titik Jalan Beranimasi */}
              <div className="w-full overflow-hidden pt-1">
                <svg
                  className="w-full h-auto max-h-36 sm:max-h-40"
                  viewBox="0 0 540 125"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Jalur Panduan Samar di Belakang */}
                  <path
                    d="M 55 58 C 145 18, 205 98, 290 54 C 365 18, 415 92, 475 58"
                    stroke="#f0d5d8"
                    strokeWidth="2.5"
                    strokeDasharray="3 4"
                    fill="none"
                  />

                  {/* Titik-Titik Jalan yang Bergerak/Berjalan Mulus dari Titik Awal ke Bendera Tujuan */}
                  <motion.path
                    d="M 55 58 C 145 18, 205 98, 290 54 C 365 18, 415 92, 475 58"
                    stroke="#da6168"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeDasharray="6 8"
                    fill="none"
                    animate={{ strokeDashoffset: [28, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
                  />

                  {/* Pesawat Kertas Mini Melayang di Jalur */}
                  <motion.g
                    animate={{
                      x: [0, 8, 0],
                      y: [-2, 2, -2],
                      rotate: [-2, 2, -2],
                    }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                    transform="translate(180, 24)"
                  >
                    <path
                      d="M 0 0 L 15 5 L 5 9 L 3 15 Z"
                      fill="#da6168"
                      stroke="#ffffff"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </motion.g>

                  {/* 1. TITIK AWAL */}
                  <g>
                    {/* Lingkaran denyut luar */}
                    <motion.circle
                      cx="55"
                      cy="58"
                      r="14"
                      fill="#da6168"
                      fillOpacity="0.15"
                      animate={{ scale: [0.8, 1.35, 0.8], opacity: [0.7, 0.1, 0.7] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ transformOrigin: '55px 58px' }}
                    />
                    <circle cx="55" cy="58" r="8" fill="#ffffff" stroke="#da6168" strokeWidth="2.5" />
                    <circle cx="55" cy="58" r="3.5" fill="#da6168" />

                    {/* Teks Label Titik Awal */}
                    <text x="55" y="93" textAnchor="middle" fontSize="11" fontWeight="700" fill="#231819" fontFamily="sans-serif">
                      {t.about.startPoint || 'Titik Awal'}
                    </text>
                    <text x="55" y="107" textAnchor="middle" fontSize="9" fontWeight="500" fill="#6e5d5f" fontFamily="sans-serif">
                      {t.about.startPointSub || 'Ide & Rencana'}
                    </text>
                  </g>

                  {/* 2. CHECKPOINT TENGAH (Rancang Itinerary) */}
                  <g>
                    <circle cx="290" cy="54" r="5" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
                    <circle cx="290" cy="54" r="2" fill="#f59e0b" />
                    <text x="290" y="36" textAnchor="middle" fontSize="10" fontWeight="600" fill="#b45309" fontFamily="sans-serif">
                      {t.about.midPoint || 'Rancang Itinerary'}
                    </text>
                  </g>

                  {/* 3. TITIK AKHIR DENGAN BENDERA TUJUAN */}
                  <g>
                    {/* Bayangan/Pijakan Tiang Bendera */}
                    <ellipse cx="475" cy="60" rx="10" ry="3.5" fill="#da6168" fillOpacity="0.25" />

                    {/* Tiang Bendera */}
                    <line x1="475" y1="60" x2="475" y2="15" stroke="#231819" strokeWidth="2.2" strokeLinecap="round" />
                    {/* Bola Emas di Ujung Tiang */}
                    <circle cx="475" cy="14" r="2.8" fill="#f59e0b" />

                    {/* Bendera Tujuan Beranimasi Kibaran Halus */}
                    <motion.g
                      animate={{
                        skewY: [-3, 3, -3],
                        rotate: [-2, 2, -2],
                      }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ transformOrigin: '475px 18px' }}
                    >
                      {/* Kain Bendera Merah Muda Tapra */}
                      <path
                        d="M 475 16 L 515 24 L 504 30 L 515 36 L 475 36 Z"
                        fill="#da6168"
                        stroke="#b63840"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      {/* Bintang putih di dalam bendera */}
                      <path
                        d="M 488 23 L 489.5 25.5 L 492.5 26 L 490 28 L 491 31 L 488 29.5 L 485 31 L 486 28 L 483.5 26 L 486.5 25.5 Z"
                        fill="#ffffff"
                      />
                    </motion.g>

                    {/* Bintang Kilau di Sekitar Bendera */}
                    <motion.path
                      animate={{ scale: [0.7, 1.25, 0.7], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                      transform="translate(520, 10)"
                      d="M 0 -4 L 1 -1 L 4 0 L 1 1 L 0 4 L -1 1 L -4 0 L -1 -1 Z"
                      fill="#f59e0b"
                    />

                    {/* Teks Label Bendera Tujuan */}
                    <text x="475" y="93" textAnchor="middle" fontSize="11" fontWeight="700" fill="#da6168" fontFamily="sans-serif">
                      {t.about.destPoint || 'Bendera Tujuan'}
                    </text>
                    <text x="475" y="107" textAnchor="middle" fontSize="9" fontWeight="500" fill="#6e5d5f" fontFamily="sans-serif">
                      {t.about.destPointSub || 'Destinasi Impian'}
                    </text>
                  </g>
                </svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Kolom Kanan: Gambar & Kartu Aksen Mengambang */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden shadow-soft border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80"
                alt="Keindahan Wisata Indonesia - Gunung Bromo"
                className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Floating Badge Aksen dengan Gerakan Halus */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 sm:-bottom-6 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl shadow-xl border border-[#f0e2e4]"
            >
              <p className="font-script text-xl sm:text-2xl text-primary font-bold leading-tight">
                {t.about.highlightTag}
              </p>
              <p className="text-[11px] sm:text-xs text-textLight mt-0.5">Tapra Trip Experience</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}


