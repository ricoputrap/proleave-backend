import APIError from "./APIError";
import BadRequestError from "./BadRequestError";
import NotFoundError from "./NotFoundError";
import UnauthizedError from "./UnauthorizedError";
import ValidationError from "./ValidationError";

class AppError extends Error {
  private statusCode: number;

  constructor(name: string, statusCode: number, message: string) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.message = message;
  }

  public getErrorResponse() {
    return {
      statusCode: this.statusCode,
      name: this.name,
      message: this.message,
      stack: this.stack
    }
  }
}

export default AppError
export {
  APIError,
  BadRequestError,
  ValidationError,
  UnauthizedError,
  NotFoundError
}