/* eslint-disable import/no-named-as-default */
import http from 'http';
import Debug from 'debug';
// eslint-disable-next-line import/no-named-as-default-member
import app from './app';

const debug = Debug('http');
const port = parseInt(process.env.PORT, 10) || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  debug(`Server is running on port ${port}`);
});
