const { Pool } = require("pg");
const config = require("./config.json"); // Gantilah dengan path ke file konfigurasi Anda
const express = require("express"); // Mengimpor Express

const app = express(); // Menginisialisasi aplikasi Express

const pool = new Pool(config);

pool.query("SELECT * FROM film", (err, res) => {
  if (err) {
    console.error("Error executing query", err);
  } else {
    console.log("Query result:", res.rows);
  }

  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  pool.end(); // Tutup koneksi pool saat selesai
});
