import { readFileSync } from "fs";
import { join } from "path";
import { IBaseModel } from "../@types";
import { IApp } from "../resources/apps/@types";

interface IListResponse {
  data: [IApp];
}

const App: IBaseModel = {
  list: () => {
    const input = readFileSync(join(__dirname, "input.json"), "utf8");
    const { data }: IListResponse = JSON.parse(input);
    return data;
  },
};

export default App;
