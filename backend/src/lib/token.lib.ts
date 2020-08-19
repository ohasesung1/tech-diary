import jwt from 'jsonwebtoken';
import config from '../../config';

const { jwtSecret } = config;

export const createToken = (memberId: string) => {
  const payload = {
    memberId,
  };

  const option = { expiresIn: '5 days', issuer: 'tech-diary.com', subject: 'token' };

  try {
    return jwt.sign(payload, jwtSecret, option);
  } catch (error) {
    throw error;
  }
};

export const createRefreshToken = (memberId: string) => {
  const payload = {
    memberId,
  };

  const option = { expiresIn: '7 days', issuer: 'tech-diary.com', subject: 'token' };

  try {
    return jwt.sign(payload, jwtSecret, option);
  } catch (error) {
    throw error;
  }
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const decodedToken = (token: string) => {
  try {
    return jwt.decode(token);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const searchTokenError = (error: Error) => {
  let status = null;
  let message = null;

  switch (error.message) {
    case 'jwt must be provided':
      status = 400;
      message = '토큰이 전송되지 않았습니다';
      break;
    case 'jwt malformed':
    case 'invalid token':
    case 'invalid signature':
      status = 401;
      message = '위조된 토큰입니다';
      break;
    case 'jwt expired':
      status = 410;
      message = '토큰이 만료되었습니다';
      break;
    default:
      console.log(error.message);
      status = 500;
      message = '다시 시도해 주세요';
      break;
  }

  return [status, message];
};