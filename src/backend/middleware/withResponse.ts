import { NextApiRequest, NextApiResponse } from 'next';

import { HTTP_STATUS_CODES } from '../constants';
import { BadRequestError } from '../errors/BadRequestError';
import { NextFunction } from '../types';

type RejectErrorType = BadRequestError;

export class ServerResponse {
  private res;

  constructor(res: NextApiResponse) {
    this.res = res;
  }

  public async resolve(value: any) {
    return await this.res.status(HTTP_STATUS_CODES.OK).json(value);
  }

  public async reject(error: RejectErrorType, value?: any) {
    return await this.res
      .status(error.statusCode)
      .json(value ?? { error: error.message });
  }
}

export function withResponse(
  next: NextFunction<NextApiRequest, ServerResponse>
) {
  return async function withResponseNext(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const newResponse = new ServerResponse(res);

    await next(req, newResponse);
  };
}
