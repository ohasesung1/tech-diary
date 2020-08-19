import Server from './server';
import config from '../config';

const { port } = config;

try {
  const server = new Server();

  server.run(String(port));
} catch (error) {
  console.error('서버 에러 발생');
  console.error(error);
}