import { Router } from 'express';
import { AuthCtrl } from './auth.ctrl';
import { Service } from 'typedi';


@Service()
export class AuthRoute {
  private router: Router;

  constructor(
    public authCtrl: AuthCtrl,
  ) {
    this.router = Router();
    this.setRouter();
  }

  public setRouter() {
    this.router.post('/login', this.authCtrl.login);
  }

  public getRouter() {
    return this.router;
  }
}
