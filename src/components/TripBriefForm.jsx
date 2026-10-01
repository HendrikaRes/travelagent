import { useState } from 'react'
import { motion } from 'motion/react'

const DESTINATION_IMAGES = {
  Bali: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
  Yogyakarta: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80',
  'Labuan Bajo': 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80',
  'Raja Ampat': 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=800&q=80',
  'Lombok & Gili': 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=800&q=80',
  'Bromo & Malang': 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',
  Belitung: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  'Danau Toba & Medan': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'Lake Toba & Medan': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  Sumba: 'https://images.unsplash.com/photo-1678150913309-cbebdf17d804?auto=format&fit=crop&w=800&q=80',
  Bandung: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80',
  'Derawan & Berau': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
  Wakatobi: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
  'Banda Neira': 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
  'Padang & Bukittinggi': 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80',
}

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80'

export default function TripBriefForm({ onOpenBrief, t }) {
  const [jenisAcara, setJenisAcara] = useState('')
  const [kotaTujuan, setKotaTujuan] = useState('')
  const [tanggalPerjalanan, setTanggalPerjalanan] = useState('')
  const [jumlahPeserta, setJumlahPeserta] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onOpenBrief({
      jenisAcara: jenisAcara || t.form.notSelected,
      kotaTujuan: kotaTujuan || t.form.notSelected,
      tanggalPerjalanan: tanggalPerjalanan || t.form.notSelected,
      jumlahPeserta: jumlahPeserta || t.form.notSelected,
    })
  }

  return (
    <section id="rancang-trip" className="w-full bg-bgLight py-14 sm:py-16 md:py-20 border-t border-[#f0e2e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-white p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-soft border border-[#f0e2e4]"
        >
          {/* Form Brief (Kiri) */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 sm:space-y-6 w-full">
            <div>
              <span className="inline-block w-8 h-1 bg-primary rounded-full mb-2"></span>
              <h3 className="text-xl sm:text-2xl font-bold text-textDark">{t.form.title}</h3>
            </div>

            <div className="relative">
              <select
                id="jenisAcara"
                value={jenisAcara}
                onChange={(e) => setJenisAcara(e.target.value)}
                className="w-full appearance-none glass-input rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 text-textDark focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all text-sm sm:text-base cursor-pointer"
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
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 sm:px-6 text-[#6e5d5f]">
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
                className="w-full appearance-none glass-input rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 text-textDark focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all text-sm sm:text-base cursor-pointer"
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
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 sm:px-6 text-[#6e5d5f]">
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
                className="w-full appearance-none glass-input rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 text-textDark focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all text-sm sm:text-base cursor-pointer"
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
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 sm:px-6 text-[#6e5d5f]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Input Tanggal Perjalanan */}
            <div className="relative">
              <input
                type="date"
                id="tanggalPerjalanan"
                min={new Date().toISOString().split('T')[0]}
                value={tanggalPerjalanan}
                onChange={(e) => setTanggalPerjalanan(e.target.value)}
                className={`w-full appearance-none glass-input rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3.5 sm:py-4 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all text-sm sm:text-base cursor-pointer ${
                  tanggalPerjalanan ? 'text-textDark font-medium' : 'text-[#6e5d5f]'
                }`}
                title={t.form.dateLabel || 'Tanggal Keberangkatan'}
              />
              {!tanggalPerjalanan && (
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 sm:px-6 text-[#6e5d5f] text-sm sm:text-base bg-white/95 mr-14 rounded-xl">
                  {t.form.datePlaceholder || 'Pilih tanggal keberangkatan'}
                </span>
              )}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 sm:px-6 text-[#6e5d5f]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.015, y: -1 }}
              whileTap={{ scale: 0.985 }}
              transition={{ duration: 0.2 }}
              className="mt-2 w-full bg-primary hover:bg-primaryHover text-white font-medium rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 text-base sm:text-lg flex justify-between items-center group cursor-pointer"
            >
              <span>{t.form.submitBtn}</span>
              <motion.svg
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.button>
          </form>

          {/* Modern Minimalist Live Itinerary Pass (Kanan) */}
          <div className="hidden lg:flex flex-col justify-center items-center relative p-2">
            {/* Subtle Ambient Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-rose-50/40 to-primary/5 rounded-3xl blur-2xl -z-10 pointer-events-none" />

            {/* Main Minimalist Travel Card */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full max-w-sm bg-white rounded-3xl p-5 shadow-xl shadow-rose-950/5 border border-[#f0e2e4] relative overflow-hidden"
            >
              {/* Destination Image Preview */}
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5 group">
                <motion.img
                  key={kotaTujuan || 'default'}
                  initial={{ opacity: 0.75, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  src={
                    (kotaTujuan && DESTINATION_IMAGES[kotaTujuan]) || DEFAULT_IMAGE
                  }
                  alt={kotaTujuan || 'Destinasi Impian'}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs border border-white/50">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-3.5 inline-block" />
                  <span className="text-[10px] font-semibold text-textDark tracking-wide uppercase">
                    {t.form.previewBadge || 'Tapra Pass'}
                  </span>
                </div>

                {/* Destination & Event Badge at Bottom */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end text-white">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/80 font-medium">
                      {t.destinations?.title ? 'Destinasi' : 'Destination'}
                    </p>
                    <h4 className="text-lg font-bold leading-tight drop-shadow-xs">
                      {kotaTujuan || t.form.destPlaceholderTitle || 'Destinasi Impian'}
                    </h4>
                  </div>
                  <span className="text-xs bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/30 text-white font-medium">
                    {jenisAcara || t.form.customTrip || 'Kustom Trip'}
                  </span>
                </div>
              </div>

              {/* Detail Info Grid */}
              <div className="space-y-3.5">
                <div className="grid grid-cols-3 gap-2 bg-[#fdf9f9] p-3 rounded-2xl border border-[#f4e4e6]">
                  <div>
                    <p className="text-[10px] text-textLight font-medium">
                      {t.modal?.participants || 'Peserta'}
                    </p>
                    <p className="text-xs font-semibold text-textDark truncate">
                      {jumlahPeserta || 'Fleksibel'}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-textLight font-medium">
                      {t.modal?.date || 'Tanggal'}
                    </p>
                    <p className="text-xs font-semibold text-textDark truncate">
                      {tanggalPerjalanan || 'Fleksibel'}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-textLight font-medium">
                      Status
                    </p>
                    <p className="text-xs font-semibold text-primary truncate">
                      {t.form.readyToPlan || 'Siap'}
                    </p>
                  </div>
                </div>

                {/* Minimalist Feature List */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2.5 text-textDark">
                    <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="font-medium text-xs">
                      {t.form.feature1 || 'Itinerary Fleksibel Sesuai Ritme'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 text-textDark">
                    <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="font-medium text-xs">
                      {t.form.feature2 || 'Rekomendasi Hotel & Transport'}
                    </span>
                  </div>
                </div>

                {/* Card Footer Strip */}
                <div className="border-t border-[#f0e2e4] pt-3 flex items-center justify-between text-[11px] text-textLight">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {t.form.consultFree || 'Konsultasi Gratis via WA'}
                  </span>
                  <span className="font-medium text-primary">Tapra Trip Official</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Mini Badge */}
            <motion.div
              animate={{ y: [3, -3, 3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-3 -right-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-md border border-[#f0e2e4] flex items-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                ★
              </div>
              <div>
                <p className="text-[11px] font-bold text-textDark leading-tight">4.9 / 5.0 Rating</p>
                <p className="text-[9px] text-textLight">Pelayanan Terbaik</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
