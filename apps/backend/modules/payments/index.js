const express = require('express');
const router = express.Router();

// Ödeme başlat
router.post('/start', (req, res) => {
  // ...ödeme entegrasyonu...
  res.json({ message: 'Ödeme başlatıldı (örnek endpoint)' });
});

module.exports = router;
