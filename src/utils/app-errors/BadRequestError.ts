import AppError from ".";
import { STATUS_CODES } from "../../types";

class BadRequestError extends AppError {
  constructor(message: string) {
    super("Bad Request", STATUS_CODES.BAD_REQUEST, message);
  }
}

export default BadRequestError;