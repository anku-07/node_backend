class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = datat;
    this.message = message;
    this.success = statusCode < 400;
  }
}