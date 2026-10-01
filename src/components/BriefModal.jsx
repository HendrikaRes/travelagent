export default function BriefModal({ isOpen, briefData, onClose, t }) {
  if (!isOpen) return null

  const waText = encodeURIComponent(
    `${t.modal.waGreeting}\n` +
      `- ${t.modal.eventType}: ${briefData?.jenisAcara || '-'}\n` +
      `- ${t.modal.destination}: ${briefData?.kotaTujuan || '-'}\n` +
      `- ${t.modal.date}: ${briefData?.tanggalPerjalanan || '-'}\n` +
      `- ${t.modal.participants}: ${briefData?.jumlahPeserta || '-'}\n\n` +
      `${t.modal.waHelp}`
  )

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity cursor-pointer"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all animate-fadeIn border border-[#f0e2e4]">
        {/* Header */}
        <div className="bg-primary/10 px-6 py-5 flex justify-between items-center border-b border-primary/20">
          <h3 className="text-lg font-bold text-primary" id="modal-title">
            {t.modal.title}
          </h3>
          <button
            onClick={onClose}
            className="text-[#6e5d5f] hover:text-primary transition-colors p-1 rounded-lg cursor-pointer"
            aria-label="Tutup"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <p className="text-sm text-textLight mb-6">
            {t.modal.desc}
          </p>

          <div className="space-y-4 bg-bgLight p-5 rounded-2xl border border-[#f0e2e4]">
            <div className="flex justify-between items-center border-b border-[#f0e2e4] pb-3">
              <span className="text-sm text-textLight font-medium">{t.modal.eventType}</span>
              <span className="text-sm font-bold text-textDark">{briefData?.jenisAcara || '-'}</span>
            </div>
            <div className="flex justify-between items-center border-b border-[#f0e2e4] pb-3">
              <span className="text-sm text-textLight font-medium">{t.modal.destination}</span>
              <span className="text-sm font-bold text-textDark">{briefData?.kotaTujuan || '-'}</span>
            </div>
            <div className="flex justify-between items-center border-b border-[#f0e2e4] pb-3">
              <span className="text-sm text-textLight font-medium">{t.modal.date}</span>
              <span className="text-sm font-bold text-textDark">{briefData?.tanggalPerjalanan || '-'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-textLight font-medium">{t.modal.participants}</span>
              <span className="text-sm font-bold text-textDark">{briefData?.jumlahPeserta || '-'}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#fff9fa] px-6 py-4 flex flex-col sm:flex-row-reverse gap-3 rounded-b-3xl border-t border-[#f0e2e4]">
          <a
            href={`https://wa.me/6289527193277?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full justify-center items-center rounded-xl bg-[#25D366] hover:bg-[#20ba59] px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors text-center"
          >
            {t.modal.sendWa}
          </a>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex w-full justify-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-primaryHover transition-colors cursor-pointer"
          >
            {t.modal.okBtn}
          </button>
        </div>
      </div>
    </div>
  )
}
