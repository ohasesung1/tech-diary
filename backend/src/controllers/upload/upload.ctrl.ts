import { Service } from "typedi";
import { Response } from 'express';
import { AuthRequest } from "../../typings";
import config from '../../../config';

@Service()
export class UploadCtrl {
  constructor() { }

  public uploadImgs = async (req: AuthRequest, res: Response) => {
    const { files } = req;
    const imgs = [];

    if (files.length <= 0) {
      res.status(400).json({
        status: 400,
        message: '저장될 이미지가 없습니다.'
      });

      return;
    }

    try {
      const { replace } = config;

      for (const[_, file] of Object.entries(files)) {
        const fileAddress = `http://${replace}/static/img/${file.filename}`;

        imgs.push({ fileAddress });
      }

      res.status(200).json({
        status: 200,
        message: '이미지 저장 성공.',
        data: {
          imgs,
        },
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        status: 500,
        message: '서버 에러.'
      });
    }
  }
}