import { HTTP_STATUS_CODES } from '../constants';

import { BaseError } from './BaseError';

export class NotAllowedError extends BaseError {
  constructor(
    message: string,
    statusCode = HTTP_STATUS_CODES.METHOD_NOT_ALLOWED,
    description = '`Method not allowed`.',
    isOperational = true
  ) {
    super(
      `[MethodNotAllowed] ${message}`,
      statusCode,
      isOperational,
      description
    );
  }
}
