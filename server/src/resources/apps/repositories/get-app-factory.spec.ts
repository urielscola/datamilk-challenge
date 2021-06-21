import { IBaseModel } from "../../../@types";
import getAppRepositoryFactory from "./get-app-factory";

const app = {
  pos: 1,
  id: "399857015",
  name: "Planet Fitness Workouts",
  released: "2010-11-04T01:40:59Z",
  downloads: 600000,
  revenue: 30000,
  image: "https:[...].jpg",
  rating: 3.9,
  url: "[...]",
  rank_history: { "2021-01-28": 1 },
};

const ModelMock: IBaseModel = {
  list: jest.fn().mockReturnValue([app]),
};

describe("Get app Repository", () => {
  test("Should call the data provider injected", () => {
    const getAppRepository = getAppRepositoryFactory({ App: ModelMock });
    const apps = getAppRepository();

    expect(ModelMock.list).toHaveBeenCalled();
    expect(apps.length).toBe(1);
    expect(apps[0].id).toBe(app.id);
  });
});
