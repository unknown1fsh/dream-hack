const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Dream Hack Backend API Çalışıyor!');
});

app.listen(PORT, () => {
  console.log(`Backend sunucusu ${PORT} portunda çalışıyor.`);
});
