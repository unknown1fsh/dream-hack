// PostgreSQL bağlantısı için temel yapı
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // Değiştirin
  host: 'localhost',
  database: 'dream_hack',
  password: 'password', // Değiştirin
  port: 5432,
});

module.exports = pool;
