import { motion } from 'motion/react'

export default function Corporate({ t }) {
  return (
    <section id="corporate" className="w-full bg-bgLight py-16 sm:py-20 md:py-24 border-t border-[#f0e2e4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative p-8 sm:p-12 md:p-16 bg-white rounded-3xl border border-[#f0e2e4] shadow-soft text-center"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-rose-50/40 to-primary/5 rounded-3xl blur-2xl -z-10 pointer-events-none" />

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-textDark mb-4 sm:mb-6 leading-tight">
            {t.corporate.title}
          </h2>
          <p className="text-textLight mb-8 sm:mb-10 text-sm sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {t.corporate.descPart1}{' '}
            <span className="font-semibold text-primary">{t.corporate.descHighlight}</span>{' '}
            {t.corporate.descPart2}
          </p>
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            href={`https://wa.me/6289527193277?text=${encodeURIComponent(t.corporate.waMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center px-7 sm:px-9 py-4 bg-primary hover:bg-primaryHover text-white font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 group text-base sm:text-lg cursor-pointer"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2.5 sm:mr-3 group-hover:scale-110 transition-transform shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.614-.087-.112-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"></path>
            </svg>
            {t.corporate.btn}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

