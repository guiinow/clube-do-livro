import { Client } from 'pg';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: () => {
      const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'bookclub',
        password: 'password',
        port: 5432, // or your PostgreSQL port number
      });
      client.connect();
      return client;
    },
  },
];