import { NextApiRequest } from 'next';

import { NextFunction } from '../types';

import { ServerResponse } from './withResponse';

export type WithDBType = {
  DB: any; //DbClient;
};

export const withDB = (
  next: NextFunction<NextApiRequest & WithDBType, ServerResponse>
) => {
  return async function withDBNext(req: NextApiRequest, res: ServerResponse) {
    const nextReq = req as NextApiRequest & WithDBType;

    const db = {}; //new DbClient(req.context, configWithSecrets.DB);

    nextReq.DB = db;

    try {
      await next(nextReq, res);
    } finally {
      // db.Dispose();
    }
  };
};
