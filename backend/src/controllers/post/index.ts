import { Router } from 'express';
import { Service } from 'typedi';
import { PostCtrl } from './post.ctrl';
import authMiddleWare from '../../middlewares/auth.middleware';

@Service()
export class PostRoute {
  // 변수 router 선언
  private router: Router;

  // 의존성 주입을 위한 객체 선언
  constructor(
    public postCtrl: PostCtrl,
  ) {
    // Router 함수 값 선언
    this.router = Router();
    // setRouter 실행
    this.setRouter();
  }

  // postCtrl의 함수들을 각각 요청 경로에 따라 route 시켜주는 함수
  private setRouter() {
    this.router.get('/', this.postCtrl.getPosts);
    this.router.get('/:id', this.postCtrl.getPostById);
    this.router.post('/',authMiddleWare, this.postCtrl.writePost);
    this.router.put('/', this.postCtrl.updatePost);
    this.router.delete('/', this.postCtrl.deletePost);
  }

  // postRouter 값 리턴 함수 (외부에서 router  접근이 가능 하도록 만든 함수)
  public getRouter() {
    return this.router;
  }
}