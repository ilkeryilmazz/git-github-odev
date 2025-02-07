require('dotenv').config()
const express = require('express');
const cors = require('cors');
const quizRoutes = require('./routes/quizRoutes');

const app = express();
const port = process.env.PORT || 3001;
const host = '127.0.0.1';

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Quiz API' });
});

app.use('/api/quiz', quizRoutes);

app.listen(port, host, () => {
  console.log(`Server aktif http://${host}:${port}`);
}); 