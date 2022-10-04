import { HTTP_STATUS_CODES } from '../constants';

import { BaseError } from './BaseError';

export class BadRequestError extends BaseError {
  constructor(
    message: string,
    statusCode = HTTP_STATUS_CODES.BAD_REQUEST,
    description = 'Not found.',
    isOperational = true
  ) {
    super(`[BadRequest] ${message}`, statusCode, isOperational, description);
  }
}
