<div align="center">

  <img src="src/assets/logo_lonjong.png" alt="Tapra Trip Logo" width="340"/>

  <p><strong>Wujudkan Liburan Impianmu — Dari Ide ke Pengalaman Nyata</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Bilingual-ID%20%7C%20EN-D81B60?style=for-the-badge" alt="Bilingual" />
    <img src="https://img.shields.io/badge/Status-Production%20Ready-25D366?style=for-the-badge" alt="Production Ready" />
  </p>

</div>

---

## 📖 Tentang Website Tapra Trip

**Tapra Trip** adalah website *landing page* modern untuk agensi perjalanan wisata (*travel agent*) eksklusif yang dirancang untuk membantu wisatawan merencanakan liburan impian dengan mudah, cepat, dan terpercaya.

Website ini memadukan estetika visual premium (*glassmorphism*, aksen tulisan tangan *Caveat*, dan palet warna elegan) dengan teknologi frontend terkini untuk memberikan pengalaman pengguna (*user experience*) yang interaktif, cepat, dan nyaman di semua jenis perangkat.

---

## ✨ Fitur-Fitur Utama

- 🌐 **Dukungan Dua Bahasa (Bilingual ID / EN)**
  - Pengguna dapat beralih bahasa antara **Bahasa Indonesia** dan **English** secara instan dengan satu kali klik. Seluruh konten website (Navbar, Hero, Form, Layanan, Destinasi, Corporate, Footer, hingga Modal) berubah secara reaktif.

- 📝 **Interactive Trip Planner (Form Brief Perjalanan)**
  - Form cerdas untuk memilih jenis acara (Liburan Keluarga, Honeymoon, Corporate Outing, Solo Travel, Open Trip), kota tujuan impian, dan estimasi jumlah peserta.
  - Terintegrasi dengan **Modal Brief** yang memungkinkan pengguna mengirim detail brief secara langsung ke **WhatsApp** tim Tapra Trip.

- 🏔️ **Eksplorasi Destinasi Populer**
  - Galeri visual destinasi eksotis Indonesia (Bali, Labuan Bajo, Sumba) dengan efek *hover zoom* dan *label reveal* yang adaptif untuk layar sentuh maupun desktop.

- 🛎️ **Layanan Lengkap Wisata**
  - Informasi kartu layanan terpadu mencakup Reservasi Hotel, Rental Kendaraan dengan driver profesional, dan Paket Open Trip.

- 🤝 **Layanan B2B & Corporate Gathering**
  - Section khusus untuk penanganan outing perusahaan, team building, dan pertemuan korporat dengan tombol konsultasi WhatsApp terdedikasi.

- 💬 **Floating WhatsApp CTA**
  - Tombol melayang (*floating button*) WhatsApp di sudut kanan bawah dengan efek animasi denyut (*pulse animation*) dan *tooltip* interaktif.

- 📱 **100% Responsif & Mobile-First**
  - Tampilan dirancang proporsional di seluruh ukuran layar: mulai dari smartphone layar kecil (320px–375px), tablet, laptop, hingga monitor desktop beresolusi tinggi.

---

## 🛠️ Tech Stack & Alat Pengembangan

| Teknologi | Versi | Deskripsi |
| :--- | :--- | :--- |
| **React** | `19.2.8` | Library UI utama dengan arsitektur berbasis komponen modular |
| **Vite** | `8.3.1` | Build tool generasi baru dengan HMR instan dan build super cepat |
| **Tailwind CSS** | `v4` | Framework CSS modern berbasis utility dengan konfigurasi `@theme` |
| **ESLint** | `10.10.0` | Linter kode untuk menjaga standar dan kualitas penulisan kode |
| **Google Fonts** | — | Font *Inter* (teks utama) dan *Caveat* (aksen tulisan tangan) |

---

## 📁 Struktur Direktori Proyek

```text
travelagent/
├── public/
│   ├── favicon.png             # Favicon tab browser (PNG)
│   ├── logokecilatas.png       # Logo kecil tab atas
│   └── icons.svg               # Asset SVG publik
├── src/
│   ├── assets/
│   │   ├── hero.png            # Asset gambar hero
│   │   ├── logo_lonjong.png    # Logo utama (lonjong/oval)
│   │   └── logokecilatas.png   # Logo icon
│   ├── components/
│   │   ├── Navbar.jsx          # Header navigasi & toggle ID/EN
│   │   ├── Hero.jsx            # Section banner utama & tagline
│   │   ├── TripBriefForm.jsx   # Form rancang perjalanan & line art
│   │   ├── About.jsx           # Section Tentang Kami & statistik
│   │   ├── Services.jsx        # Kartu layanan wisata
│   │   ├── Destinations.jsx    # Showcase destinasi wisata
│   │   ├── Corporate.jsx       # Section B2B / Corporate gathering
│   │   ├── Footer.jsx          # Footer & informasi kontak
│   │   ├── FloatingWhatsApp.jsx# Tombol floating chat WhatsApp
│   │   └── BriefModal.jsx      # Modal ringkasan brief & share WA
│   ├── translations.js         # Kamus bahasa bilingual (ID & EN)
│   ├── App.jsx                 # Komponen induk & state manajemen
│   ├── index.css               # Styling global & Tailwind theme
│   └── main.jsx                # Entry point aplikasi React
├── index.html                  # File HTML utama & link font
├── package.json                # Dependensi dan script project
├── vite.config.js              # Konfigurasi Vite & Tailwind plugin
└── README.md                   # Dokumentasi proyek
```

---

## 🎨 Palet Warna & Identitas Desain

| Nama Warna | Kode Hex | Penggunaan |
| :--- | :--- | :--- |
| **Primary (Magenta)** | `#D81B60` | Warna aksen utama, tombol CTA, highlight aktif |
| **Primary Hover** | `#C2185B` | Efek hover tombol dan interaksi |
| **Navbar Background** | `#FBFBF5` | Warna latar belakang navbar agar serasi dengan logo |
| **Background Light** | `#F9FAFB` | Latar belakang halaman bersih dan sejuk |
| **Text Dark** | `#1F2937` | Warna tipografi judul dan teks utama |
| **Text Light** | `#6B7280` | Warna tipografi deskripsi dan informasi pendukung |
| **WhatsApp Green** | `#25D366` | Tombol dan aksen resmi WhatsApp |

---

## 🚀 Cara Menjalankan Proyek

### 1. Prasyarat
Pastikan Anda telah menginstal **Node.js** (versi 18 ke atas) dan **npm** di komputer Anda.

### 2. Instalasi Dependensi
Buka terminal di direktori proyek dan jalankan:
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Dev)
```bash
npm run dev
```
Buka browser pada alamat yang tertera (biasanya `http://localhost:5173`).

### 4. Build untuk Produksi
```bash
npm run build
```
Hasil build akan berada di folder `dist/` dan siap di-*deploy* ke hosting (Vercel, Netlify, Cloudflare Pages, atau VPS).

### 5. Menjalankan Linting
```bash
npm run lint
```

---

## 📄 Lisensi & Hak Cipta
Hak Cipta &copy; 2026 **Tapra Trip**. All rights reserved.
