import { HTTP_STATUS_CODES } from '../constants';

import { BaseError } from './BaseError';

export class ForbiddenError extends BaseError {
  constructor(
    message: string,
    statusCode = HTTP_STATUS_CODES.FORBIDDEN,
    description = 'Forbidden.',
    isOperational = true
  ) {
    super(`[Forbidden] ${message}`, statusCode, isOperational, description);
  }
}
