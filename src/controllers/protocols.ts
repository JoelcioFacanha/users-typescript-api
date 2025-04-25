export interface IHttpResponse<T> {
  statusCode: number;
  data: T | string;
}

export interface IHttpRequest<B> {
  params?: any;
  headers?: any;
  body?: B;
}
