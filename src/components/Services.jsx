import { motion } from 'motion/react'

export default function Services({ t }) {
  const services = [
    {
      title: t.services.hotelTitle,
      description: t.services.hotelDesc,
      btnText: t.services.hotelBtn,
      waMessage: t.services.hotelWaMessage,
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:text-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: t.services.carTitle,
      description: t.services.carDesc,
      btnText: t.services.carBtn,
      waMessage: t.services.carWaMessage,
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:text-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
    {
      title: t.services.tripTitle,
      description: t.services.tripDesc,
      btnText: t.services.tripBtn,
      waMessage: t.services.tripWaMessage,
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:text-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="layanan" className="w-full bg-bgLight py-14 sm:py-16 md:py-20 border-t border-[#f0e2e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textDark mb-3 sm:mb-4">{t.services.title}</h2>
          <p className="text-textLight text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-16">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#f0e2e4] hover:border-primary/40 hover:shadow-hover transition-all duration-300 text-left sm:text-center flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-0 sm:mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-300 shadow-xs">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-textDark mb-2 sm:mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-textLight text-xs sm:text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Tombol WhatsApp */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/6289527193277?text=${encodeURIComponent(service.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-2xl bg-primary hover:bg-primaryHover text-white font-medium text-xs sm:text-sm shadow-sm shadow-primary/20 hover:shadow-md hover:shadow-primary/30 transition-all duration-300 cursor-pointer"
              >
                <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.614-.087-.112-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"></path>
                </svg>
                <span>{service.btnText}</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

