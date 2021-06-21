import GetStats from "./get-stats";

type IMakeSut = (functions?: any) => {
  sut: GetStats;
  getAppRepository: any;
};

const makeSut: IMakeSut = (functions = {}) => {
  const getAppRepository: any = () => [];

  const params = {
    getAppRepository,
    ...functions,
  };

  const sut = new GetStats(params);

  return {
    sut,
    getAppRepository,
  };
};

const makeResponseObject = (): any => {
  const json = jest.fn();
  const status = jest.fn().mockReturnValue({ json });

  return {
    status,
    json,
  };
};

describe("Get Stats Controller", () => {
  test("Should call with success", async () => {
    const { sut } = makeSut();
    const mockResponseObject = makeResponseObject();

    await sut.handle({} as any, mockResponseObject);
    expect(mockResponseObject.status).toHaveBeenCalledWith(200);
    expect(mockResponseObject.json).toHaveBeenCalledWith({
      marketSize: 0,
      topApps: [],
      chartData: [],
    });
  });

  test("Should call with error", async () => {
    const getAppRepository: any = () => {
      throw new Error("Error");
    };

    const { sut } = makeSut({ getAppRepository });
    const mockResponseObject = makeResponseObject();

    await sut.handle({} as any, mockResponseObject);
    expect(mockResponseObject.status).toHaveBeenCalledWith(500);
    expect(mockResponseObject.json).toHaveBeenCalledWith({ message: "Error" });
  });
});
