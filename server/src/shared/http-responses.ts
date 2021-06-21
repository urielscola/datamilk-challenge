interface IHttpResponse {
  status: number;
  body: any;
}

export const serverError = (data: any): IHttpResponse => ({
  status: 500,
  body: data,
});

export const ok = (data: any): IHttpResponse => ({
  status: 200,
  body: data,
});
