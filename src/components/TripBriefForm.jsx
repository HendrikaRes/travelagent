import { useState } from 'react'

export default function TripBriefForm({ onOpenBrief, t }) {
  const [jenisAcara, setJenisAcara] = useState('')
  const [kotaTujuan, setKotaTujuan] = useState('')
  const [jumlahPeserta, setJumlahPeserta] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onOpenBrief({
      jenisAcara: jenisAcara || t.form.notSelected,
      kotaTujuan: kotaTujuan || t.form.notSelected,
      jumlahPeserta: jumlahPeserta || t.form.notSelected,
    })
  }

  return (
    <section className="w-full bg-bgLight py-8 sm:py-12 relative -mt-12 sm:-mt-16 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-white/70 backdrop-blur-xl p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-soft border border-white/80">
          {/* Form Brief (Kiri) */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 sm:space-y-6 fade-in-up delay-100 w-full">
            <h3 className="text-xl sm:text-2xl font-bold text-textDark mb-1 sm:mb-2">{t.form.title}</h3>

            <div className="relative">
              <select
                id="jenisAcara"
                value={jenisAcara}
                onChange={(e) => setJenisAcara(e.target.value)}
                className="w-full appearance-none glass-input rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 text-textDark focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm sm:text-base cursor-pointer"
              >
                <option value="" disabled>
                  {t.form.eventPlaceholder}
                </option>
                {t.form.events.map((ev, i) => (
                  <option key={i} value={ev}>
                    {ev}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 sm:px-6 text-gray-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <select
                id="kotaTujuan"
                value={kotaTujuan}
                onChange={(e) => setKotaTujuan(e.target.value)}
                className="w-full appearance-none glass-input rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 text-textDark focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm sm:text-base cursor-pointer"
              >
                <option value="" disabled>
                  {t.form.destPlaceholder}
                </option>
                {t.form.dests.map((dest, i) => (
                  <option key={i} value={dest}>
                    {dest}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 sm:px-6 text-gray-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <select
                id="jumlahPeserta"
                value={jumlahPeserta}
                onChange={(e) => setJumlahPeserta(e.target.value)}
                className="w-full appearance-none glass-input rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 text-textDark focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm sm:text-base cursor-pointer"
              >
                <option value="" disabled>
                  {t.form.participantsPlaceholder}
                </option>
                {t.form.participants.map((part, i) => (
                  <option key={i} value={part}>
                    {part}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 sm:px-6 text-gray-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-primary hover:bg-primaryHover active:scale-98 text-white font-medium rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 text-base sm:text-lg flex justify-between items-center group cursor-pointer"
            >
              <span>{t.form.submitBtn}</span>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </form>

          {/* Ilustrasi (Kanan) */}
          <div className="hidden lg:flex justify-center items-center fade-in-up delay-200">
            <svg
              className="w-full max-w-sm h-auto opacity-80 hover:opacity-100 transition-opacity"
              viewBox="0 0 400 450"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Sun & Mountains */}
              <g className="line-art">
                <path d="M200 40 L200 20" />
                <path d="M160 50 L145 35" />
                <path d="M240 50 L255 35" />
                <path d="M125 80 L105 70" />
                <path d="M275 80 L295 70" />
                <path d="M100 120 L80 120" />
                <path d="M300 120 L320 120" />
                <path d="M120 140 A 80 80 0 0 1 280 140" />
                <path d="M60 200 L140 110 L200 160 L260 90 L340 200" />
                <path d="M140 110 L160 150 L120 180" />
                <path d="M260 90 L240 140 L280 170" />
                <path d="M50 220 Q 100 190 150 220 T 250 220 T 350 220" />
                <path d="M70 240 Q 120 210 170 240 T 270 240 T 330 240" />
              </g>

              {/* Hand & Compass */}
              <g className="line-art" transform="translate(0, 50)">
                <path d="M80 320 Q 150 350 200 350 Q 250 350 320 380" />
                <path d="M100 300 Q 150 330 200 330" />
                <path d="M110 340 Q 150 360 220 360 Q 260 360 300 410" />
                <circle cx="210" cy="280" r="40" />
                <circle cx="210" cy="280" r="30" />
                <path d="M210 240 L210 235" />
                <path d="M210 250 L220 280 L210 310 L200 280 Z" stroke="#D81B60" fill="none" />
                <path d="M180 280 L210 270 L240 280 L210 290 Z" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
