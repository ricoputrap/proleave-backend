import AppError from "./AppError";
import { STATUS_CODES } from "../../types";

class UnauthizedError extends AppError {
  constructor(message: string) {
    super("Unauthorized", STATUS_CODES.UNAUTHORIZED, message);
  }
}

export default UnauthizedError;