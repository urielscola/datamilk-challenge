import GetPretty from "./get-pretty";

type IMakeSut = (functions?: any) => {
  sut: GetPretty;
  getAppRepository: any;
};

const makeSut: IMakeSut = (functions = {}) => {
  const getAppRepository: any = () => [];

  const params = {
    getAppRepository,
    ...functions,
  };

  const sut = new GetPretty(params);

  return {
    sut,
    getAppRepository,
  };
};

const makeResponseObject = (): any => {
  const json = jest.fn();
  const send = jest.fn();
  const status = jest.fn().mockReturnValue({ json, send });

  return {
    status,
    json,
    send,
  };
};

describe("Get Pretty Controller", () => {
  test("Should call with success", async () => {
    const { sut } = makeSut();
    const mockResponseObject = makeResponseObject();

    await sut.handle({} as any, mockResponseObject);
    expect(mockResponseObject.status).toHaveBeenCalledWith(200);
    expect(mockResponseObject.send).toHaveBeenCalled();
  });
});
