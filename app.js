import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import userRoute from './api/v1/routes/users';
import accountRoute from './api/v1/routes/accounts';

const app = express();

const port = parseInt(process.env.PORT, 10) || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello darkness my old friend!');
});
app.use('/', userRoute);
app.use('/', accountRoute);

app.use('*', (req, res) => {
  res.status(400).send({ message: 'Bazinga! Wrong route' });
});

app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    err: {
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
