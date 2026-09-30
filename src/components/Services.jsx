export default function Services({ t }) {
  const services = [
    {
      title: t.services.hotelTitle,
      description: t.services.hotelDesc,
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-textDark group-hover:text-white transition-colors"
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
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-textDark group-hover:text-white transition-colors"
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
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-textDark group-hover:text-white transition-colors"
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
    <section id="layanan" className="w-full bg-white py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up delay-200">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textDark mb-3 sm:mb-4">{t.services.title}</h2>
        <p className="text-textLight text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-16">
          {t.services.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-bgLight border border-gray-100 hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 text-left sm:text-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-0 sm:mx-auto rounded-full bg-white shadow-xs flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-textDark mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-textLight text-xs sm:text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
