import { Router } from 'express';
import { Service } from 'typedi';
import { PostCtrl } from './post.ctrl';
import authMiddleWare from '../../middlewares/auth.middleware';

@Service()
export class PostRoute {
  private router: Router;

  constructor(
    public postCtrl: PostCtrl,
  ) {
    this.router = Router();
    this.setRouter();
  }

  private setRouter() {
    this.router.get('/', this.postCtrl.getPosts);
    this.router.post('/',authMiddleWare, this.postCtrl.writePost);
    this.router.put('/', this.postCtrl.updatePost);
    this.router.delete('/', this.postCtrl.deletePost);
  }

  public getRouter() {
    return this.router;
  }
}