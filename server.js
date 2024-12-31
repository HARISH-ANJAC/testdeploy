import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'API test with nodemon!' });
});

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});