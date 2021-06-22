import { readFileSync } from "fs";
import { resolve } from "path";
import { IBaseModel } from "../@types";
import { IApp } from "../resources/apps/@types";

interface IListResponse {
  data: [IApp];
}

const App: IBaseModel = {
  list: () => {
    const input = readFileSync(
      resolve(__dirname, "..", "..", "data", process.env.INPUT_FILE as string),
      "utf8"
    );
    const { data }: IListResponse = JSON.parse(input);
    return data;
  },
};

export default App;
