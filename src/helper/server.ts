import * as health from 'express-healthcheck';
import * as express from 'express';
import * as bodyParse from 'body-parser';

import { notFound, requestErrorHandler } from './';

export function server(port: number = 3000, routes: any): void {
    const app = express();

    app.use('/health', health());
    app.use(bodyParse.json());

    for (const route of routes) {
        app.use(route.path, route.module);
    }

    app.use(notFound);
    app.use(requestErrorHandler);

    console.info(`Starting server on port ${port}`);
    app.listen(port);
}