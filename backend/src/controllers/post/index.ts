import { Router } from 'express';
import { Service } from 'typedi';
import { PostCtrl } from './post.ctrl';

@Service()
export class PostRoute {
  private router: Router;

  constructor(
    public postCtrl: PostCtrl
  ) {
    this.router = Router();
    this.setRouter();
  }

  private setRouter() {
    this.router.get('/', this.postCtrl.getPosts);
    this.router.post('/', this.postCtrl.writePost);
  }

  public getRouter() {
    return this.router;
  }
}