import { Router, NextFunction, Response, Request } from 'express';
import { GetBaseline } from '../service';

export const baselineRouter = Router({ mergeParams: true });

baselineRouter.get('/baseline', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await GetBaseline();
        return res.status(200).json(result);
    } catch (err) {
        return next(err);
    }
});