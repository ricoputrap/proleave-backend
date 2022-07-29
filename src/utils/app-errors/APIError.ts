import AppError from ".";
import { STATUS_CODES } from "../../types";

class APIError extends AppError {
  constructor(message: string) {
    super("Internal Server Error", STATUS_CODES.INTERNAL_SERVER, message);
  }
}

export default APIError;