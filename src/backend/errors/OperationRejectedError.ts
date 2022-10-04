import { HTTP_STATUS_CODES } from '../constants';

import { BaseError } from './BaseError';

export class OperationRejectedError extends BaseError {
  constructor(
    message: string,
    statusCode = HTTP_STATUS_CODES.OPERATION_REJECTED,
    description = 'Rejected.',
    isOperational = true
  ) {
    super(
      `[OperationRejected] ${message}`,
      statusCode,
      isOperational,
      description
    );
  }
}
