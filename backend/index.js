const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');


const app = express();
const port = process.env.PORT || 3001;
const host = '127.0.0.1';

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.get('/', (req, res) => {
  res.json({ message: 'Quiz API' });
});

app.listen(port, host, () => {
  console.log(`Server aktif http://${host}:${port}`);
}); 