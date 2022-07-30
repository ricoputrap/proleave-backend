class AppError extends Error {
  private statusCode: number;

  constructor(name: string, statusCode: number, message: string) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.message = message;
  }

  public getErrorResponse(): any {
    return {
      statusCode: this.statusCode,
      name: this.name,
      message: this.message,
      stack: this.stack
    }
  }
}

export default AppError;