import { Router } from 'express';
import { Service } from 'typedi';
import { UploadCtrl } from './upload.ctrl';
import { uploader } from '../../lib/upload.lib';
import authMiddleWare from '../../middlewares/auth.middleware';

@Service()
export class UploadRoute {
  private router: Router;

  constructor(
    public uploadCtrl: UploadCtrl
  ) { 
    this.router = Router();
    this.setRouter();
   }

  private setRouter() {
    this.router.post('/img', authMiddleWare, uploader.array('image'), this.uploadCtrl.uploadImgs);
  } 

  public getRouter() {
    return this.router;
  }
}