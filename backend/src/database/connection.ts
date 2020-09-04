import 'reflect-metadata';

import { Container } from 'typedi';
import { createConnection, Connection, useContainer } from 'typeorm';

// DB연결
async function connectDatabase() {
  try {

    // typeOrm과 typedi를 함께 사용해주는 방법으로 useContainer를 사용한다.
    useContainer(Container);

    const db: Connection = await createConnection();
    console.log('connect MySQL DB');
    return db;
  } catch (error) {
    throw new Error(error);
  }
};

export default connectDatabase;