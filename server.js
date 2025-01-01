import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';


const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'API test with nodemon!' });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});
}).catch((error) => {
  console.log(error);
});