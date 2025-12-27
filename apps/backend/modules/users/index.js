const express = require('express');
const router = express.Router();

// Kullanıcı kayıt
router.post('/register', (req, res) => {
  // ...kayıt işlemleri...
  res.json({ message: 'Kullanıcı kaydı başarılı (örnek endpoint)' });
});

// Kullanıcı giriş
router.post('/login', (req, res) => {
  // ...giriş işlemleri...
  res.json({ message: 'Kullanıcı girişi başarılı (örnek endpoint)' });
});

module.exports = router;
