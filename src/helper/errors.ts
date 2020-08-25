import { NextFunction, Request, Response } from 'express';

import { Message } from './';

export function notFound(req: Request, res: Response, next: NextFunction): any {
    return res.status(404).json('Nenhum rota encontrada');
}

export function parser(err: any, req: Request, res: Response, next: NextFunction): any {
    if (err.isJoi) {
        if (process.env.NODE_ENV === 'development') {
            console.log(req.body);
            console.log(err.message);
        }

        return res.status(400).json({
            ...err,
            message: 'Dados inválidos'
        });
    }

    next(err);
}

export const requestErrorHandler = (err: any, req: Request, res: Response, next: NextFunction): any => {
    console.error(err);

    if (typeof err === 'string') {
        err = new Error(err);
    }

    if (err instanceof Message) {
        return res.status(err.status).send({
            code: err.code,
            message: err.message,
        });
    }

    const statusCode = err.status || err.statusCode || 500;

    const response = {
        code: 999,
        message: err.message,
    };

    return res.status(statusCode).send(response);
};
