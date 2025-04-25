export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  CREATED = 201,
  SERVER_ERROR = 500,
}

export interface IHttpResponse<T> {
  statusCode: HttpStatusCode;
  data: T | string;
}

export interface IHttpRequest<B> {
  params?: any;
  headers?: any;
  body?: B;
}

export interface IController {
  handle(req: IHttpRequest<unknown>): Promise<IHttpResponse<unknown>>;
}
