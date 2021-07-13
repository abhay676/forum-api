export class CustomError extends Error {
  status;
  value;
  message;
  location;
  constructor(status, value, message, location) {
    super();
    this.statusCode = status;
    this.value = value;
    this.message = message;
    this.location = location;
  }
}
