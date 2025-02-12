"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// Fungsi untuk menghasilkan kata random
function generateRandomWord() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'val';
    for (let i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
// Fungsi untuk menulis hasil ke file
function saveToFile(filename, content) {
    const filePath = path.resolve(__dirname, filename);
    fs.appendFileSync(filePath, content + '\n');
}
// Menangani argumen command-line
const args = process.argv.slice(2);
let outputFile = null;
// Jika ada argumen -l, ambil nama file setelahnya
if (args.includes('-l')) {
    const index = args.indexOf('-l');
    outputFile = args[index + 1] || 'output.txt'; // Default ke 'output.txt' jika tidak ada nama file
}
// Set untuk memastikan kata yang di-generate tidak duplikat
const generatedWords = new Set();
// Fungsi untuk mendapatkan kata random yang belum pernah di-generate sebelumnya
function getUniqueRandomWord() {
    let randomWord;
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
}, 100); // Menghasilkan kata setiap 100 milidetik
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
