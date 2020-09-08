import Server from './server';
import config from '../config';

const { port } = config;
const { sslPort } = config;

try {
  const server = new Server();

  server.run(String(port), String(sslPort));
} catch (error) {
  console.error('서버 에러 발생');
  console.error(error);
}