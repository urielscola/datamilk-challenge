import { ok, serverError } from "./http-responses";

describe("http-responses", () => {
  test("Should call ok", () => {
    const response = ok({ foo: "bar" });
    expect(response).toMatchObject({
      body: {
        foo: "bar",
      },
      status: 200,
    });
  });

  test("Should call serverError", () => {
    const response = serverError({ message: "Internal error" });
    expect(response).toMatchObject({
      body: {
        message: "Internal error",
      },
      status: 500,
    });
  });
});
