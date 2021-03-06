import GetPretty from "./get-pretty";
import {
  makeAppControllerSut,
  makeRequestObject,
  makeResponseObject,
} from "../../../__mocks__/helpers";

describe("Get Pretty Controller", () => {
  test("Should call with success", async () => {
    const { sut } = makeAppControllerSut(GetPretty);
    const mockRequestObject = makeRequestObject();
    const mockResponseObject = makeResponseObject();

    await sut.handle(mockRequestObject, mockResponseObject);
    expect(mockResponseObject.status).toHaveBeenCalledWith(200);
    expect(mockResponseObject.send).toHaveBeenCalled();
    expect(mockRequestObject.logger.info).toHaveBeenCalledTimes(2);
  });
});
