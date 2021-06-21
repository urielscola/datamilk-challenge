import { IBaseModel } from "../../../@types";
import { IApp } from "../@types";

interface IAppFactory {
  App: IBaseModel;
}

export type IGetAppRepository = () => IApp[];

const getAppRepositoryFactory = ({ App }: IAppFactory): IGetAppRepository => {
  const getAppRepository: IGetAppRepository = () => App.list();
  return getAppRepository;
};

export default getAppRepositoryFactory;
