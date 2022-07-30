import AppError from "./AppError";
import { STATUS_CODES } from "../../types";

class NotFoundError extends AppError {
  constructor(message: string) {
    super("Error Not Found", STATUS_CODES.NOT_FOUND, message);
  }
}

export default NotFoundError;