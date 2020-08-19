import express, { Express } from 'express';
import HTTP from 'http';
import path from 'path';
import cors from 'cors';
import connectDB from './database/connection';

class Server {
  public app: Express;
  public server: HTTP.Server;

  constructor() {
    this.app = express();
    this.server = HTTP.createServer(this.app);
  }

  private setRouter() {
    // this.app.use('/api');
  }

  private setMiddleWare() {
    this.app.use(cors());
    this.app.use(express.json());
  }
  
  public async run(port: string) {
    await connectDB();

    this.setMiddleWare();
    this.setRouter();

    this.server.listen(port, () => {
      console.log(`tech-diary Server is listening started on port ${port}`);
    });
  }
}

export default Server;