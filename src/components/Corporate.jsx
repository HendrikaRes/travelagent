export default function Corporate({ t }) {
  return (
    <section id="corporate" className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center fade-in-up delay-300">
        <div className="inline-block mb-4 sm:mb-6 px-3.5 sm:px-4 py-1.5 rounded-full bg-gray-100 text-xs sm:text-sm font-semibold text-gray-700 tracking-wider uppercase">
          {t.corporate.badge}
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-textDark mb-4 sm:mb-6 leading-tight">
          {t.corporate.title}
        </h2>
        <p className="text-textLight mb-8 sm:mb-10 text-sm sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          {t.corporate.descPart1}{' '}
          <span className="font-semibold text-textDark">{t.corporate.descHighlight}</span>{' '}
          {t.corporate.descPart2}
        </p>
        <a
          href={`https://wa.me/6289527193277?text=${encodeURIComponent(t.corporate.waMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full sm:w-auto justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-textDark text-textDark hover:bg-textDark hover:text-white font-semibold rounded-full transition-all duration-300 group text-base sm:text-lg cursor-pointer active:scale-95"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2.5 sm:mr-3 group-hover:scale-110 transition-transform shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.614-.087-.112-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"></path>
          </svg>
          {t.corporate.btn}
        </a>
      </div>
    </section>
  )
}
