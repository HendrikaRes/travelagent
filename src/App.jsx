import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TripBriefForm from './components/TripBriefForm'
import About from './components/About'
import Services from './components/Services'
import Destinations from './components/Destinations'
import Corporate from './components/Corporate'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import BriefModal from './components/BriefModal'
import { translations } from './translations'

export default function App() {
  const [lang, setLang] = useState('id')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [briefData, setBriefData] = useState(null)

  const t = translations[lang] || translations.id

  const handleOpenBrief = (data) => {
    setBriefData(data)
    setIsModalOpen(true)
  }

  const handleCloseBrief = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="font-sans text-textDark flex flex-col min-h-screen bg-bgLight">
      {/* Sticky Header / Navbar dengan Konsultasi WA & Switcher Bahasa ID/EN */}
      <Navbar lang={lang} setLang={setLang} t={t} />

      {/* Main Sections */}
      <main className="flex-grow flex flex-col">
        <Hero t={t} />
        <About t={t} />
        <Destinations t={t} />
        <Services t={t} />
        <TripBriefForm onOpenBrief={handleOpenBrief} t={t} />
        <Corporate t={t} />
      </main>

      {/* Footer */}
      <Footer t={t} />

      {/* Floating WhatsApp Contact Button */}
      <FloatingWhatsApp t={t} />

      {/* Brief Summary Modal */}
      <BriefModal
        isOpen={isModalOpen}
        briefData={briefData}
        onClose={handleCloseBrief}
        t={t}
      />
    </div>
  )
}
