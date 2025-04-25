export const OK = (data: any = "") => {
  return {
    statusCode: 200,
    data,
  };
};

export const Created = (data: any = "") => {
  return {
    statusCode: 201,
    data,
  };
};

export const BadRequest = (
  message: string = "Houve um problema com a sua requisição. Por favor, verifique os dados que você enviou e tente novamente"
) => {
  return {
    statusCode: 400,
    data: message,
  };
};

export const InternalServerError = (
  message: string = "Desculpe, houve um problema ao processar sua requisição. Tente novamente em alguns minutos."
) => {
  return {
    statusCode: 500,
    data: message,
  };
};
