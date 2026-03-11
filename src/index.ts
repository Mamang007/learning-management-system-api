import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'LMS API is running' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
