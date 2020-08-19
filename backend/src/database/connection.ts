import 'reflect-metadata';
import "reflect-metadata";

import { Container } from 'typedi';
import { createConnection, Connection, useContainer } from 'typeorm';

async function connectDatabase() {
  try {

    useContainer(Container);

    const db: Connection = await createConnection();
    console.log('connect MySQL DB');
    return db;
  } catch (error) {
    throw new Error(error);
  }
};

export default connectDatabase;