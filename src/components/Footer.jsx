export default function Footer({ t }) {
  return (
    <footer className="relative bg-gradient-to-b from-[#fff6f7] via-[#faebed] to-[#f8e6e8] border-t border-[#ebd3d6] pt-12 sm:pt-16 pb-8 overflow-hidden">
      {/* Subtle Soft Ambient Light at Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-28 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Col 1: Profil Perusahaan */}
          <div className="sm:col-span-2 md:col-span-5 pr-0 md:pr-10">
            <a href="#" className="inline-block text-2xl font-bold tracking-widest text-textDark mb-4 sm:mb-6">
              TAPRA<span className="text-primary">TRIP</span>
            </a>
            <p className="text-textLight text-xs sm:text-sm leading-relaxed max-w-md">
              {t.footer.about}
            </p>
          </div>

          {/* Col 2: Hubungi Kami */}
          <div className="sm:col-span-1 md:col-span-4">
            <h4 className="text-xs sm:text-sm font-bold text-textDark mb-4 sm:mb-6 uppercase tracking-wider">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-textLight">
              <li className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2.5 sm:mr-3 mt-0.5 text-primary/80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  {t.footer.addressLine1}
                  <br />
                  {t.footer.addressLine2}
                </span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2.5 sm:mr-3 text-primary/80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:hello@tapratrip.com" className="hover:text-primary transition-colors">
                  hello@tapratrip.com
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2.5 sm:mr-3 text-primary/80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="https://wa.me/6289527193277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  +62 895-2719-3277
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigasi Cepat */}
          <div className="sm:col-span-1 md:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold text-textDark mb-4 sm:mb-6 uppercase tracking-wider">
              {t.footer.companyTitle}
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-textLight">
              <li>
                <a href="#tentang" className="hover:text-primary transition-colors">
                  {t.footer.aboutUs}
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-primary transition-colors">
                  {t.footer.ourServices}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t.footer.terms}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t.footer.privacy}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer bar */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-[#ebd3d6] gap-4">
          <p className="text-xs sm:text-sm text-[#7e6c6f] text-center sm:text-left">
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3 text-[#6e5d5f]">
            <a href="#" className="w-8 h-8 rounded-full bg-white/90 border border-[#ebd3d6] flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-xs" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/90 border border-[#ebd3d6] flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-xs" aria-label="Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
