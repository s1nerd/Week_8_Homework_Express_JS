const express = require("express");
const app = express();

// Rute beranda
app.get("/", (req, res) => {
  res.send("Selamat datang di beranda");
});

// Rute tentang kami
app.get("/about", (req, res) => {
  res.send("Halaman tentang kami");
});

// Rute kontak
app.get("/contact", (req, res) => {
  res.send("Halaman kontak");
});

// Mendengarkan pada port tertentu
const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
