export class Message {

  public message: string;

  public code: number;

  public status: number = 200;

  constructor(message?: string) {
    this.message = message;
  }

  public withStatus(status: number): Message {
    this.status = status;
    return this;
  }

  public withCode(code: number): Message {
    this.code = code;
    return this;
  }
}
