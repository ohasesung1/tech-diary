import express, { Express } from 'express';
import HTTP from 'http';
import HTTPS from 'https';
import path from 'path';
import cors from 'cors';
import serveStatic from 'serve-static';
import RootRouter from './controllers';
import connectDB from './database/connection';
import Container from 'typedi';
import fs from 'fs';


class Server {
  public app: Express; // app 타입 선언
  public server: HTTP.Server; // server 타입 선언

  constructor() {
    this.app = express(); // app 데이터 set
    this.server = HTTP.createServer(this.app); // server create
  }

  // controller router use
  private setRouter() {
    this.app.use('/api', Container.get(RootRouter).getRouter());
  }

  // middleWare set
  private setMiddleWare() {
    this.app.use(cors());
    this.app.use('/static', serveStatic(path.join(__dirname, 'public')));
    this.app.use(express.json());
  }
  
  // server start
  public async run(port: string, sslPost: string) {
    // DB connection
    await connectDB();

    const option = {
      ca: fs.readFileSync('/etc/letsencrypt/live/happy-ohaeseong.com/fullchain.pem'),
      key: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/happy-ohaeseong.com/privkey.pem'), 'utf8').toString(),
      cert: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/happy-ohaeseong.com/cert.pem'), 'utf8').toString(),
    }

    // controller router 및 middleware set  함수 실행
    this.setMiddleWare();
    this.setRouter();

    try {
      this.server.listen(port, () => {
        console.log(`tech-diary Server is listening started on port ${port}`);
      });
    } catch (error) {
      console.log(error);
    }

    try {
      HTTPS.createServer(option, this.app).listen(sslPost, () => {
        console.log(`[HTTPS] tech-blog Server is started on port ${sslPost}`);
      });
    } catch (error) {
      console.log('[HTTPS] HTTPS 오류가 발생하였습니다. HTTPS 서버는 실행되지 않습니다.');
    }
  }
}

export default Server;