import { HttpStatusCode } from "./protocols";

export const OK = (data: any = "") => {
  return {
    statusCode: HttpStatusCode.OK,
    data,
  };
};

export const Created = (data: any = "") => {
  return {
    statusCode: HttpStatusCode.CREATED,
    data,
  };
};

export const BadRequest = (
  message: string = "Houve um problema com a sua requisição. Por favor, verifique os dados que você enviou e tente novamente"
) => {
  return {
    statusCode: HttpStatusCode.BAD_REQUEST,
    data: message,
  };
};

export const InternalServerError = (
  message: string = "Desculpe, houve um problema ao processar sua requisição. Tente novamente em alguns minutos."
) => {
  return {
    statusCode: HttpStatusCode.SERVER_ERROR,
    data: message,
  };
};
