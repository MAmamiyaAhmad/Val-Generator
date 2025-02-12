# Val - Random Word Generator

Val adalah aplikasi yang menghasilkan kata acak setiap interval tertentu. Kata yang dihasilkan terdiri dari awalan `val` diikuti oleh 8 karakter acak (huruf besar, huruf kecil, dan angka). Program ini dapat terus berjalan dan menghasilkan kata hingga Anda menghentikannya dengan menekan `CTRL + C`. Kata yang dihasilkan juga bisa disimpan ke dalam file dengan menggunakan perintah yang tepat.

## Fitur

- Menghasilkan kata acak dengan awalan `val` dan diikuti oleh 8 karakter acak.
- Menampilkan kata yang dihasilkan di terminal.
- Menyimpan kata yang dihasilkan ke dalam file.
- Menghindari duplikat kata (kata yang dihasilkan tidak akan pernah terulang).
- Menghentikan program dengan menekan `CTRL + C`, dan menampilkan pesan bahwa data telah disimpan ke file (jika opsi penyimpanan digunakan).

## Persyaratan

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 12 atau lebih tinggi).

## Instalasi

1. **Clone repositori ini**:
   ```bash
   git clone <URL_REPO>
   ```

2. **Masuk ke dalam direktori proyek**:
   ```bash
   cd Val
   ```

3. **Instalasi dependensi**:
   ```bash
   npm install
   ```

## Penggunaan

### 1. Menjalankan Program untuk Menghasilkan Kata (Hanya di Terminal)

Untuk menjalankan program yang menghasilkan kata acak dan menampilkannya di terminal, gunakan perintah:

```bash
npm run generate
```

Program akan terus menghasilkan kata acak dan menampilkannya di terminal hingga Anda menghentikannya dengan menekan `CTRL + C`.

### 2. Menjalankan Program dan Menyimpan Kata ke dalam File

Jika Anda ingin menyimpan kata yang dihasilkan ke dalam file, gunakan opsi `-l` diikuti dengan nama file yang diinginkan. Contoh:

```bash
npm run generate -l output.txt
```

Perintah ini akan menyimpan setiap kata yang dihasilkan ke dalam file `output.txt`. Jika file tersebut belum ada, program akan otomatis membuatnya. Jika file sudah ada, kata-kata baru akan ditambahkan ke dalam file tersebut.

### 3. Menghentikan Program

Untuk menghentikan program, tekan `CTRL + C` di terminal. Program akan berhenti dan jika Anda menggunakan opsi `-l`, akan ada pesan yang menunjukkan bahwa data telah disimpan ke dalam file:

```
Data telah disimpan ke dalam file: /path/to/your/project/output.txt
```

### 4. Menjalankan Program Secara Langsung dengan Node.js

Jika Anda tidak menggunakan skrip npm dan ingin menjalankan program langsung dengan Node.js, Anda dapat menggunakan perintah:

```bash
node dist/index.js generate
```

Atau untuk menyimpan ke dalam file:

```bash
node dist/index.js generate -l output.txt
```

## Struktur Proyek

```
Val/
├── dist/              # Kode JavaScript hasil kompilasi TypeScript
│   └── index.js       # File utama yang dijalankan
├── src/               # Kode sumber TypeScript
│   └── index.ts       # Kode sumber utama untuk menghasilkan kata
├── bin/               # File untuk mengeksekusi generate (hanya untuk sistem berbasis Unix)
│   └── generate       # Skrip untuk menjalankan aplikasi
├── package.json       # File konfigurasi npm dan dependensi proyek
├── tsconfig.json      # Konfigurasi TypeScript
├── README.md          # Dokumentasi proyek ini
└── output.txt         # (Opsional) File tempat menyimpan kata acak (akan dibuat otomatis jika tidak ada)
```

## Catatan

- **Jika Anda menekan `CTRL + C`**: Program akan berhenti dan jika menggunakan opsi `-l` (untuk menyimpan ke file), pesan yang memberi tahu bahwa data telah disimpan ke dalam file akan ditampilkan.
- **File output**: Jika Anda menentukan file untuk menyimpan hasil, program akan menambahkan setiap kata yang dihasilkan ke dalam file tersebut, menjaga kata-kata tetap unik.

## Masalah yang Diketahui

Saat ini, program hanya berjalan pada sistem yang mendukung Node.js. Beberapa fitur mungkin memerlukan perbaikan untuk bekerja dengan baik di lingkungan yang berbeda.
