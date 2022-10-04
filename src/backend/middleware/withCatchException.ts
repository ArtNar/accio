import { NextApiRequest } from 'next';

import { BaseError } from '../errors/BaseError';
import { InternalServerError } from '../errors/InternalServerError';
import { NextFunction } from '../types';

import { ServerResponse } from './withResponse';

async function handleError(
  error: Error,
  req: NextApiRequest,
  res: ServerResponse
) {
  if (error instanceof BaseError) {
    await res.reject(error);
    return;
  }

  await res.reject(new InternalServerError(error.message));
}

export function withCatchException(
  next: NextFunction<NextApiRequest, ServerResponse>
) {
  return async function withCatchExceptionNext(
    req: NextApiRequest,
    res: ServerResponse
  ) {
    try {
      await next(req, res);
    } catch (error: any) {
      try {
        await handleError(error, req, res);
      } catch (errorInHandler) {
        console.error(
          errorInHandler,
          `Unable handle error -> ${JSON.stringify(errorInHandler)}`
        );
      }
    }
  };
}
