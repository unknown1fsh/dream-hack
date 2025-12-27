const express = require('express');
const router = express.Router();

// Kullanıcı yönetimi
router.use('/users', require('./modules/users'));
// Ödeme işlemleri
router.use('/payments', require('./modules/payments'));
// Admin paneli
router.use('/admin', require('./modules/admin'));

module.exports = router;
