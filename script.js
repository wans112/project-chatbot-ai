// Ambil elemen tombol kirim, input pengguna, dan tampilan chat dari DOM
const sendButton = document.querySelector('.sendButton'); // Tombol kirim
const userInput = document.querySelector('.userInput');   // Input pesan pengguna
const chatDisplay = document.querySelector('.chatDisplay') // Area tampilan chat

// Fungsi async untuk mengambil balasan dari API Gemini
async function getBotReplyFromAPI(userMessage) {
    const apiKey = 'API-KEY'; // Ganti dengan API key Gemini kamu
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`; // Endpoint API

    // Kirim permintaan POST ke API dengan pesan pengguna
    const response = await fetch(endpoint, {
        method: 'POST', // Metode HTTP POST
        headers: {
            'Content-Type': 'application/json' // Tipe konten JSON
        },
        body: JSON.stringify({
            contents: [
                { parts: [{ text: userMessage }] } // Isi pesan pengguna
            ]
        })
    });

    const data = await response.json(); // Parse respons JSON
    // Ambil balasan dari AI Gemini, jika tidak ada balasan tampilkan pesan default
    return data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0].text
        ? data.candidates[0].content.parts[0].text.trim()
        : 'Maaf, tidak ada balasan dari AI.';
}

// Fungsi untuk memformat teks balasan dari AI
function formatText(text) {
    // Ubah * di awal baris jadi -, **teks** jadi bold, dan newline jadi <br>
    return text
        .replace(/^\* /gm, '- ')                // * di awal baris jadi -
        .replace(/\*\*([^\*]+)\*\*/g, '<b>$1</b>') // **teks** jadi bold
        .replace(/\n/g, '<br>');                // newline jadi <br>
}

// Fungsi untuk mengirim pesan ke chatbox
function sendMassageToChatbox() {
    const message = userInput.value.trim(); // Ambil dan trim input pengguna
    if (message) { // Jika pesan tidak kosong
        const msgDiv = document.createElement('div'); // Buat elemen div baru
        msgDiv.textContent = message; // Isi div dengan pesan pengguna
        msgDiv.className = 'userMessage'; // Tambahkan class userMessage
        chatDisplay.appendChild(msgDiv); // Tambahkan ke tampilan chat
        userInput.value = ''; // Kosongkan input setelah mengirim
        chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll ke bawah

        // Tampilkan placeholder '...' sebelum balasan AI muncul
        setTimeout(async () => {
            const botDiv = document.createElement('div'); // Buat div untuk balasan bot
            botDiv.className = 'botMessage'; // Tambahkan class botMessage
            botDiv.textContent = '...'; // Placeholder loading
            chatDisplay.appendChild(botDiv); // Tambahkan ke tampilan chat
            chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll ke bawah

            // Ambil balasan dari API
            try {
                let reply = await getBotReplyFromAPI(message); // Dapatkan balasan dari AI
                reply = formatText(reply); // Format balasan
                botDiv.innerHTML = reply;  // Tampilkan balasan dengan HTML
            } catch (e) {
                botDiv.textContent = 'Maaf, terjadi kesalahan pada server AI.'; // Tampilkan pesan error
            }
            chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll ke bawah
        }, 500); // Tunda 500ms sebelum menampilkan balasan bot
    }
}

// Tambahkan event listener pada tombol kirim untuk menjalankan fungsi kirim pesan
sendButton.addEventListener('click', sendMassageToChatbox);

// Tambahkan event listener pada input untuk mendeteksi tombol Enter
userInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') sendMassageToChatbox(); // Jika Enter ditekan, kirim pesan
});