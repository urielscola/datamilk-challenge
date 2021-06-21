export const makeResponseObject = (): any => {
  const json = jest.fn();
  const send = jest.fn();
  const status = jest.fn().mockReturnValue({ json, send });

  return {
    status,
    json,
    send,
  };
};

export const makeRequestObject = (): any => {
  const info = jest.fn();
  const error = jest.fn();
  const warn = jest.fn();

  const logger = { info, error, warn };

  return { logger };
};

type IMakeAppControllerSut = (
  Controller: any,
  functions?: any
) => {
  sut: typeof Controller;
  getAppRepository: any;
};

export const makeAppControllerSut: IMakeAppControllerSut = (
  Controller: any,
  functions = {}
) => {
  const getAppRepository: any = () => [];

  const params = {
    getAppRepository,
    ...functions,
  };

  const sut = new Controller(params);

  return {
    sut,
    getAppRepository,
  };
};
