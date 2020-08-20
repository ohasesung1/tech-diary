import { v4 as uuid4 } from 'uuid';

export const generatedId = () => {
  let id: string = uuid4();
  const token = id.split('-');

  id = token[2] + token[1] + token[0] + token[3] + token[4];

  return id;
};