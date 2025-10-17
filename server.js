import express from 'express';
import sum from './sum.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/home', (req, res) => {
  res.json(
    {
      message : "Welcome to the Home Page"
    }
  )
});

app.get('/add/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const result = sum(parseInt(a), parseInt(b));

  res.json(
    {
      sum: result
    }
  )
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});