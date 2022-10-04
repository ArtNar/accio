import { HTTP_STATUS_CODES } from '../constants';

import { BaseError } from './BaseError';

export class UnauthorizedError extends BaseError {
  constructor(
    message = 'Unauthorized Request',
    statusCode = HTTP_STATUS_CODES.UNAUTHORIZED,
    description = 'Not authorized.',
    isOperational = true
  ) {
    super(`[Unauthorized] ${message}`, statusCode, isOperational, description);
  }
}
