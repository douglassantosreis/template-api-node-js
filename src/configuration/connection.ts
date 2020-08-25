import 'reflect-metadata';
import { createConnection } from 'typeorm';

export async function connect(list: any[]): Promise<void> {
    await createConnection({
        type: 'postgres',
        host: process.env.DS_HOST,
        port: Number(process.env.DS_PORT),
        username: process.env.DS_USER,
        password: process.env.DS_PASSWORD,
        database: process.env.DS_NAME,
        entities: list,
        synchronize: false,
        logging: true,
    })
        .catch(console.error);
}
