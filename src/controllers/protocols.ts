export interface IHttpResponse<T> {
  statusCode: number;
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
