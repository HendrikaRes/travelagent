import { motion } from 'motion/react'

export default function Destinations({ t }) {
  const destinations = [
    {
      name: 'Bali',
      tag: t.destinations.baliTag,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Labuan Bajo',
      tag: t.destinations.bajoTag,
      image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Sumba',
      tag: t.destinations.sumbaTag,
      image: 'https://images.unsplash.com/photo-1678150913309-cbebdf17d804?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <section id="destinasi" className="w-full bg-white py-14 sm:py-16 md:py-20 border-t border-[#f0e2e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textDark mb-2 sm:mb-3">
              {t.destinations.title}
            </h2>
            <p className="text-textLight text-sm sm:text-base">{t.destinations.subtitle}</p>
          </div>
          <a
            href="#destinasi"
            className="inline-flex items-center text-primary text-sm sm:text-base font-semibold hover:text-primaryHover transition-colors group"
          >
            {t.destinations.viewAll}
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="dest-card relative h-64 sm:h-72 md:h-80 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group shadow-soft hover:shadow-hover border border-transparent hover:border-primary/40 transition-all duration-300"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="dest-img absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-5 sm:p-7 md:p-8 w-full">
                <p className="text-[#ffaeb3] font-script text-2xl sm:text-3xl mb-1 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transform sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-300 drop-shadow-md">
                  {dest.tag}
                </p>
                <h3 className="text-white text-xl sm:text-2xl font-bold">{dest.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

