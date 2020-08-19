import express, { Express } from 'express';
import HTTP from 'http';
import path from 'path';
import cors from 'cors';
import RootRouter from './controllers';
import connectDB from './database/connection';
import Container from 'typedi';

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
    this.app.use(express.json());
  }
  
  // server start
  public async run(port: string) {
    // DB connection
    await connectDB();

    // controller router 및 middleware set  함수 실행
    this.setMiddleWare();
    this.setRouter();

    this.server.listen(port, () => {
      console.log(`tech-diary Server is listening started on port ${port}`);
    });
  }
}

export default Server;