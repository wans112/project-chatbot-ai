# Chatbot AI Sederhana dengan Gemini API

Repositori ini berisi aplikasi chatbot berbasis web yang menggunakan API Gemini (Google Generative Language) untuk menghasilkan balasan otomatis berdasarkan input dari pengguna. Chatbot ini didesain sederhana dengan tampilan modern dan mudah digunakan untuk keperluan pembelajaran atau demo integrasi AI pada web.

## Fitur Utama
- **Chatbot interaktif**: Pengguna dapat mengetik pesan dan mendapatkan balasan otomatis dari AI.
- **Integrasi API Gemini**: Menggunakan layanan AI Gemini dari Google untuk menghasilkan respons cerdas.
- **UI responsif**: Desain modern yang nyaman di desktop maupun mobile.
- **Formatting jawaban**: Mendukung format bold dan list sederhana pada balasan AI.

## Struktur Proyek
- `index.html` — Halaman utama yang menampilkan UI chat.
- `style.css` — Styling modern untuk tampilan chatbox.
- `script.js` — Logika frontend, pengelolaan input, serta integrasi dengan API Gemini.

## Cara Menjalankan

1. **Clone repo ini**  
   ```
   git clone https://github.com/wans112/project-chatbot-ai.git
   cd project-chatbot-ai
   ```

2. **Dapatkan API Key Gemini**  
   Daftar dan ambil API Key Gemini dari [Google Generative Language API](https://ai.google.dev/).

3. **Edit `script.js`**  
   Ganti `'API-KEY'` pada bagian berikut dengan API key milik Anda:
   ```js
   const apiKey = 'API-KEY'; // Ganti dengan API key Gemini kamu
   ```

4. **Buka `index.html` di browser**  
   Cukup klik dua kali atau buka file `index.html` dengan browser favorit Anda.

5. **Mulai chat**  
   Ketik pesan pada kolom input dan klik `Send` atau tekan Enter.

## Contoh Penggunaan
- Ketik: `Hai, siapa kamu?`
- Bot akan membalas otomatis menggunakan AI Gemini.

## Catatan
- Proyek ini **hanya untuk keperluan pembelajaran** dan tidak menyimpan data chat.
- Pastikan koneksi internet aktif karena membutuhkan akses ke API Gemini.
- Jangan membagikan API Key Anda secara publik.

## Lisensi
MIT License

---

**Kontribusi dan saran sangat terbuka!**
