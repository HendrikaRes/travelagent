import { useState } from 'react'
import logoLonjong from '../assets/logo_lonjong.png'

export default function Navbar({ lang, setLang, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fbfbf5]/95 backdrop-blur-lg border-b border-[#ecece0] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 sm:h-20">
          
          {/* Left: Bahasa ID/EN + Menu Navigasi (Desktop & Tablet) */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-7">
            {/* Switcher Bahasa ID / EN */}
            <div className="inline-flex items-center rounded-full bg-black/5 p-0.5 border border-black/10">
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  lang === 'id'
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-gray-600 hover:text-textDark'
                }`}
                title="Bahasa Indonesia"
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-gray-600 hover:text-textDark'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Separator Divider */}
            <div className="h-5 w-px bg-[#e0e0d2]"></div>

            {/* Navigation Links */}
            <nav className="flex space-x-5 lg:space-x-7">
              <a href="#" className="text-sm font-medium text-primary transition-colors">
                {t.nav.home}
              </a>
              <a
                href="#tentang"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {t.nav.tentang}
              </a>
              <a
                href="#destinasi"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {t.nav.destinasi}
              </a>
              <a
                href="#layanan"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {t.nav.layanan}
              </a>
              <a
                href="#corporate"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {t.nav.corporate}
              </a>
            </nav>
          </div>

          {/* Mobile Left Controls (Burger + Lang) */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none p-1.5 sm:p-2 rounded-xl border border-[#ecece0] bg-white/70 active:scale-95 transition-transform"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Language Toggle Mobile */}
            <div className="inline-flex items-center rounded-full bg-black/5 p-0.5 border border-black/10">
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full transition-all ${
                  lang === 'id' ? 'bg-primary text-white shadow-xs' : 'text-gray-600'
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full transition-all ${
                  lang === 'en' ? 'bg-primary text-white shadow-xs' : 'text-gray-600'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Right: Logo Responsif */}
          <div className="flex-shrink-0 flex items-center h-full">
            <a href="#" className="hover:opacity-85 transition-opacity inline-flex items-center h-full my-0 py-0">
              <img
                src={logoLonjong}
                alt="Tapra Trip"
                className="h-11 sm:h-13 md:h-16 lg:h-[70px] w-auto max-w-[130px] sm:max-w-none object-contain my-0 py-0"
              />
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbfbf5]/98 backdrop-blur-md border-b border-[#ecece0] px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-lg">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-xl text-base font-medium text-primary hover:bg-[#f0f0e4] active:bg-[#e8e8dc] transition-colors"
          >
            {t.nav.home}
          </a>
          <a
            href="#tentang"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-xl text-base font-medium text-gray-700 hover:text-primary hover:bg-[#f0f0e4] active:bg-[#e8e8dc] transition-colors"
          >
            {t.nav.tentang}
          </a>
          <a
            href="#destinasi"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-xl text-base font-medium text-gray-700 hover:text-primary hover:bg-[#f0f0e4] active:bg-[#e8e8dc] transition-colors"
          >
            {t.nav.destinasi}
          </a>
          <a
            href="#layanan"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-xl text-base font-medium text-gray-700 hover:text-primary hover:bg-[#f0f0e4] active:bg-[#e8e8dc] transition-colors"
          >
            {t.nav.layanan}
          </a>
          <a
            href="#corporate"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-xl text-base font-medium text-gray-700 hover:text-primary hover:bg-[#f0f0e4] active:bg-[#e8e8dc] transition-colors"
          >
            {t.nav.corporate}
          </a>
        </div>
      )}
    </header>
  )
}
