import GetTopRanked from "./get-top-ranked";
import {
  makeAppControllerSut,
  makeRequestObject,
  makeResponseObject,
} from "../../../__mocks__/helpers";

describe("Get Top Ranked Controller", () => {
  test("Should call with success", async () => {
    const { sut } = makeAppControllerSut(GetTopRanked);
    const mockRequestObject = makeRequestObject();
    const mockResponseObject = makeResponseObject();

    await sut.handle(mockRequestObject, mockResponseObject);
    expect(mockResponseObject.status).toHaveBeenCalledWith(200);
    expect(mockResponseObject.json).toHaveBeenCalledTimes(1);
    expect(mockRequestObject.logger.info).toHaveBeenCalledTimes(2);
  });
});
