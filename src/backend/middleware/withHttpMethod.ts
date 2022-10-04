import { NextApiRequest } from 'next';

import { NotAllowedError } from '../errors/NotAllowedError';
import { NextFunction } from '../types';

import { ServerResponse } from './withResponse';

export function withHttpMethod(method: string[]) {
  return function withHttpMethodNext(
    next: NextFunction<NextApiRequest, ServerResponse>
  ) {
    return async function withHttpMethodNextNext(
      req: NextApiRequest,
      res: ServerResponse
    ) {
      if (!req.method || !method.includes(req.method)) {
        await res.reject(
          new NotAllowedError(`Method ${req.method} not allowed`)
        );
        return;
      }
      await next(req, res);
    };
  };
}
