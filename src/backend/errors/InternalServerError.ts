import { HTTP_STATUS_CODES } from '../constants';

import { BaseError } from './BaseError';

export class InternalServerError extends BaseError {
  constructor(
    message: string,
    statusCode = HTTP_STATUS_CODES.INTERNAL_SERVER,
    description = 'Internal.',
    isOperational = true
  ) {
    super(`[Internal] ${message}`, statusCode, isOperational, description);
  }
}
