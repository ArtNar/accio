import { NextApiRequest } from 'next';

import { BadRequestError } from '../errors/BadRequestError';
import { API_METHODS, NextFunction } from '../types';

import { ServerResponse } from './withResponse';

export type WithDataType<T> = {
  data: T;
};

export function withData<T>(
  next: NextFunction<NextApiRequest & WithDataType<T>, ServerResponse>
) {
  return async function withDataNext(req: NextApiRequest, res: ServerResponse) {
    switch (req.method) {
      case API_METHODS.POST:
      case API_METHODS.PUT: {
        const newReq = req as NextApiRequest & WithDataType<T>;

        let model = newReq.body;
        if (!model) {
          return res.reject(new BadRequestError('Empty Body'));
        }

        if (model && typeof model === 'string') {
          try {
            model = JSON.parse(model);
          } catch (err: any) {
            return res.reject(
              new BadRequestError(`Unable parse input Json -> ${err.message}`)
            );
          }
        }

        if (typeof model !== 'object') {
          return res.reject(new BadRequestError('Bad Body'));
        }

        newReq.data = model;
        await next(newReq, res);
        break;
      }
      case API_METHODS.GET:
      case API_METHODS.DELETE: {
        const newReq = req as NextApiRequest & WithDataType<T>;
        newReq.data = req.query as T;

        await next(newReq, res);
        break;
      }
      default: {
        return res.reject(
          new BadRequestError(`Unsupported HTTP Method ${req.method}`)
        );
      }
    }
  };
}
