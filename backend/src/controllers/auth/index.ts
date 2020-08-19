import { Router } from 'express';
import { AuthCtrl } from './auth.ctrl';
import { Service } from 'typedi';


@Service()
export class AuthRoute {
  // 변수 router 선언
  private router: Router;

  // 의존성 주입을 위한 객체 선언
  constructor(
    public authCtrl: AuthCtrl,
  ) {
    // Router 함수 값 선언
    this.router = Router();
    // setRouter 실행
    this.setRouter();
  }

  // authCtrl의 함수들을 각각 요청 경로에 따라 route 시켜주는 함수
  public setRouter() {
    this.router.post('/login', this.authCtrl.login);
  }

  // authRouter 값 리턴 함수 (외부에서 router  접근이 가능 하도록 만든 함수)
  public getRouter() {
    return this.router;
  }
}
