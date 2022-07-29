import AppError from ".";
import { STATUS_CODES } from "../../types";

class ValidationError extends AppError {
  constructor(message: string) {
    super("Validation Error", STATUS_CODES.BAD_REQUEST, message);
  }
}

export default ValidationError;