import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import logoLonjong from '../assets/logo_lonjong.png'

export default function Navbar({ lang, setLang, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#', label: t.nav.home, key: 'home' },
    { href: '#tentang', label: t.nav.tentang, key: 'tentang' },
    { href: '#destinasi', label: t.nav.destinasi, key: 'destinasi' },
    { href: '#layanan', label: t.nav.layanan, key: 'layanan' },
    { href: '#corporate', label: t.nav.corporate, key: 'corporate' },
  ]

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(218,97,104,0.07)] border-b border-[#f0e2e4]'
          : 'bg-white/90 backdrop-blur-sm border-b border-[#f5eaec]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 sm:h-20">
          
          {/* Left: Bahasa ID/EN + Menu Navigasi (Desktop & Tablet) */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-7">
            {/* Switcher Bahasa ID / EN dengan Slider Halus */}
            <div className="relative inline-flex items-center rounded-full bg-[#f8eff0] p-0.5 border border-[#ecd7da]">
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`relative z-10 px-2.5 py-1 text-xs font-bold rounded-full transition-colors cursor-pointer select-none ${
                  lang === 'id' ? 'text-white' : 'text-[#6e5d5f] hover:text-textDark'
                }`}
                title="Bahasa Indonesia"
              >
                {lang === 'id' && (
                  <motion.span
                    layoutId="desktopActiveLangPill"
                    className="absolute inset-0 rounded-full bg-primary shadow-xs -z-1"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`relative z-10 px-2.5 py-1 text-xs font-bold rounded-full transition-colors cursor-pointer select-none ${
                  lang === 'en' ? 'text-white' : 'text-[#6e5d5f] hover:text-textDark'
                }`}
                title="English"
              >
                {lang === 'en' && (
                  <motion.span
                    layoutId="desktopActiveLangPill"
                    className="absolute inset-0 rounded-full bg-primary shadow-xs -z-1"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                EN
              </button>
            </div>

            {/* Separator Divider */}
            <div className="h-5 w-px bg-[#ebd5d8]"></div>

            {/* Navigation Links dengan Garis Hover Dinamis */}
            <nav className="flex space-x-5 lg:space-x-7">
              {navLinks.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  whileHover={{ y: -1.5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className={`relative group py-1 text-sm font-medium transition-colors ${
                    item.key === 'home'
                      ? 'text-primary font-semibold'
                      : 'text-textDark/80 hover:text-primary'
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                      item.key === 'home'
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Mobile Left Controls (Animated Burger + Lang Switcher) */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              type="button"
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-textDark hover:text-primary focus:outline-none p-2 rounded-xl border border-[#f0e2e4] bg-white transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className="w-5 h-0.5 bg-current rounded-full origin-center"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="w-5 h-0.5 bg-current rounded-full"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className="w-5 h-0.5 bg-current rounded-full origin-center"
                />
              </div>
            </motion.button>

            {/* Language Toggle Mobile */}
            <div className="relative inline-flex items-center rounded-full bg-[#f8eff0] p-0.5 border border-[#ecd7da]">
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`relative z-10 px-2 py-0.5 text-[11px] font-bold rounded-full transition-colors ${
                  lang === 'id' ? 'text-white' : 'text-[#6e5d5f]'
                }`}
              >
                {lang === 'id' && (
                  <motion.span
                    layoutId="mobileActiveLangPill"
                    className="absolute inset-0 rounded-full bg-primary shadow-xs -z-1"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`relative z-10 px-2 py-0.5 text-[11px] font-bold rounded-full transition-colors ${
                  lang === 'en' ? 'text-white' : 'text-[#6e5d5f]'
                }`}
              >
                {lang === 'en' && (
                  <motion.span
                    layoutId="mobileActiveLangPill"
                    className="absolute inset-0 rounded-full bg-primary shadow-xs -z-1"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                EN
              </button>
            </div>
          </div>

          {/* Right: Logo Responsif dengan Sentuhan Hover Lembut */}
          <div className="flex-shrink-0 flex items-center h-full">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="inline-flex items-center h-full my-0 py-0 cursor-pointer"
            >
              <img
                src={logoLonjong}
                alt="Tapra Trip"
                className="h-11 sm:h-13 md:h-16 lg:h-[70px] w-auto max-w-[130px] sm:max-w-none object-contain my-0 py-0 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(218,97,104,0.06)] hover:drop-shadow-[0_4px_12px_rgba(218,97,104,0.18)]"
              />
            </motion.a>
          </div>

        </div>
      </div>

      {/* Mobile Drawer dengan Transisi Halus AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden bg-white/98 backdrop-blur-md border-b border-[#f0e2e4] shadow-lg"
          >
            <div className="px-4 pt-3 pb-5 space-y-1">
              {navLinks.map((item, idx) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.035, duration: 0.2 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3.5 py-2.5 rounded-xl text-base transition-colors ${
                    item.key === 'home'
                      ? 'font-semibold text-primary bg-[#fef2f3]'
                      : 'font-medium text-textDark hover:text-primary hover:bg-[#fef2f3] active:bg-[#fde6e8]'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

