import http from 'http';
import app from './app';

const port = parseInt(process.env.PORT, 10) || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
