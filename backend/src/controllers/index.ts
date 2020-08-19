import { Router } from 'express';
import { Container, Service } from 'typedi';

import { PostRoute } from './post';

@Service() 
class RootRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.setRouter();
  }

  private setRouter() {
    this.router.use('/post', Container.get(PostRoute).getRouter());
  }

  public getRouter() {
    return this.router;
  }
}

export default RootRouter;