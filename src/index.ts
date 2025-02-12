import * as fs from 'fs';
import * as path from 'path';

// Fungsi untuk menghasilkan kata random
function generateRandomWord(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'val';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Fungsi untuk menulis hasil ke file
function saveToFile(filename: string, content: string) {
  const filePath = path.resolve(__dirname, filename);
  fs.appendFileSync(filePath, content + '\n');
}

// Menangani argumen command-line
const args = process.argv.slice(2);
let outputFile: string | null = null;

// Jika ada argumen -l, ambil nama file setelahnya
if (args.includes('-l')) {
  const index = args.indexOf('-l');
  outputFile = args[index + 1] || 'output.txt'; // Default ke 'output.txt' jika tidak ada nama file
}

// Set untuk memastikan kata yang di-generate tidak duplikat
const generatedWords = new Set<string>();

// Fungsi untuk mendapatkan kata random yang belum pernah di-generate sebelumnya
function getUniqueRandomWord(): string {
  let randomWord: string;
  do {
    randomWord = generateRandomWord();
  } while (generatedWords.has(randomWord)); // Periksa apakah kata sudah ada
  generatedWords.add(randomWord); // Tambahkan kata baru ke set
  return randomWord;
}

const interval = setInterval(() => {
  const randomWord = getUniqueRandomWord(); // Mendapatkan kata yang unik
  console.log(randomWord); // Menampilkan kata yang di-generate di terminal

  // Jika ada file yang ditentukan, simpan kata ke file
  if (outputFile) {
    saveToFile(outputFile, randomWord);
  }
}, 100);  // Menghasilkan kata setiap 100 milidetik

// Menangani event CTRL+C (SIGINT)
process.on('SIGINT', () => {
  // Menampilkan pesan bahwa data telah disimpan
  if (outputFile) {
    console.log(`\nData telah disimpan ke dalam file: ${path.resolve(__dirname, outputFile)}`);
  }
  // Hentikan interval setelah user menekan CTRL+C
  clearInterval(interval);
  process.exit();
});
