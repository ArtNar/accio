export class BaseError extends Error {
  statusCode;
  isOperational;

  constructor(
    message = '',
    statusCode: number,
    isOperational = true,
    description: string
  ) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);
    this.message = message;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this);
  }
}
