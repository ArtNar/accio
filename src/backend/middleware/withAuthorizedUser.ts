import { NextApiRequest } from 'next';

import { UnauthorizedError } from '../errors/UnauthorizedError';
import { NextFunction } from '../types';

import { ServerResponse } from './withResponse';
import { WithSessionType } from './withSession';

export default function withAuthorizedUser(
  next: NextFunction<NextApiRequest, ServerResponse>
) {
  return async function withAuthorizedUserNext(
    req: NextApiRequest & WithSessionType,
    res: ServerResponse
  ) {
    if (!req.session.user) {
      const error = new UnauthorizedError();
      return await res.reject(error);
    }

    await next(req, res);
  };
}
