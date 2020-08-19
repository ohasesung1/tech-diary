import { AuthRequest } from "../typings";
import { NextFunction, Response } from "express";
import * as tokenLib from "../lib/token.lib";

// 토큰 검사를 위한 authMiddleware
async function authMiddleWare(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.headers['token'];

  // 토큰이 없거나 잘못된 유형일 경우
  if (!token || Array.isArray(token)) {
    res.status(400).json({
      status: 400,
      message: '접근이 불가능 합니다.',
    });

    return;
  }

  try {
    // 토큰 검증
    const decoded = await tokenLib.verifyToken(token);

    // 검증 실패 했을 경우
    if (!decoded) {
      res.status(401).json({
        status: 401,
        message: '잘못된 권한 입니다.',
      });
  
      return;
    }
  } catch (error) {
    // 에러 검색후 status, message 값 받기
    let [status, message] = tokenLib.searchTokenError(error);
    
    // status 타입 변경
    status = status as number;
    
    res.status(status).json({
      status,
      message,
    });

    return;
  }

  // 다음 함수 실행
  next();
};

export default authMiddleWare;