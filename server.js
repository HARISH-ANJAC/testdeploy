import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});