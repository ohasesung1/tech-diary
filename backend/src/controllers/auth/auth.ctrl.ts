import { Response } from 'express';
import { Service } from "typedi";
import { AuthService } from "../../services/auth.service";
import { AuthRequest } from "../../typings";
import * as Validate from '../../lib/validate';
import * as tokenLib from '../../lib/token.lib';

@Service()
export class AuthCtrl {
  constructor(
    private authService: AuthService,
  ) { }

  // 사용자 로그인 함수
  public login = async (req: AuthRequest, res: Response) => {
    const { body } = req;

    try {
      await Validate.loginValidate(body);
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: '요청 오류!',
      });

      return;
    }

    try {
      const { memberId, pw } = body;

      const member = await this.authService.login(memberId, pw);

      if (!member) {
        res.status(404).json({
          status: 404,
          message: '가입 되지 않는 회원!',
        });
  
        return;
      }

      const token = await tokenLib.createToken(memberId);
      const refreshToken = await tokenLib.createRefreshToken(memberId);

      res.status(200).json({
        status: 200,
        message: '로그인 성공!',
        data: {
          token,
          refreshToken,
        }
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        status: 500,
        message: '서버 에러',
      });
    }
  };
}