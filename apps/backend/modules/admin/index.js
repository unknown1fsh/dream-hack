const express = require('express');
const router = express.Router();

// Admin paneli ana endpoint
router.get('/', (req, res) => {
  res.json({ message: 'Admin paneli (örnek endpoint)' });
});

module.exports = router;
