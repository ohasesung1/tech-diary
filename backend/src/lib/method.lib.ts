import { v4 as uuid4 } from 'uuid';

// 파일 이름 생성 시 사용하는 uuid 생성 함수
export const generatedId = () => {
  let id: string = uuid4();
  const token = id.split('-');

  id = token[2] + token[1] + token[0] + token[3] + token[4];

  return id;
};