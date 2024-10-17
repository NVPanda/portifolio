import express from 'express';
import path from 'path';
import homeRouter from './routes/home';
import aboutRouter from './routes/about';
import contactRouter from './routes/contact';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
