import { NextApiRequest } from 'next';

import { UnauthorizedError } from '../errors/UnauthorizedError';
import { NextFunction } from '../types';

import { ServerResponse } from './withResponse';
import { WithSessionType } from './withSession';

export default function withAuthorizedUser(
  next: NextFunction<NextApiRequest, ServerResponse>
) {
  return async function WithAuthorizedUser(
    req: NextApiRequest & WithSessionType,
    res: ServerResponse
  ) {
    if (!req.session.user) {
      return await res.reject(new UnauthorizedError());
    }

    await next(req, res);
  };
}
