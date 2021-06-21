import GetStats from "./get-stats";
import {
  makeAppControllerSut,
  makeRequestObject,
  makeResponseObject,
} from "../../../__mocks__/helpers";

describe("Get Stats Controller", () => {
  test("Should call with success", async () => {
    const { sut } = makeAppControllerSut(GetStats);

    const mockRequestObject = makeRequestObject();
    const mockResponseObject = makeResponseObject();

    await sut.handle(mockRequestObject, mockResponseObject);
    expect(mockResponseObject.status).toHaveBeenCalledWith(200);
    expect(mockResponseObject.json).toHaveBeenCalledWith({
      marketSize: 0,
      topApps: [],
      chartData: [],
    });
    expect(mockRequestObject.logger.info).toHaveBeenCalledTimes(2);
  });

  test("Should call with error", async () => {
    const getAppRepository: any = () => {
      throw new Error("Error");
    };

    const { sut } = makeAppControllerSut(GetStats, { getAppRepository });

    const mockRequestObject = makeRequestObject();
    const mockResponseObject = makeResponseObject();

    await sut.handle(mockRequestObject, mockResponseObject);
    expect(mockResponseObject.status).toHaveBeenCalledWith(500);
    expect(mockResponseObject.json).toHaveBeenCalledWith({ message: "Error" });
    expect(mockRequestObject.logger.info).toHaveBeenCalledTimes(1);
    expect(mockRequestObject.logger.error).toHaveBeenCalledTimes(1);
  });
});
