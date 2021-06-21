import { IBaseModel } from "../../../@types";
import { IGetAppRepository } from "../@types";

interface IAppFactory {
  App: IBaseModel;
}

const getAppRepositoryFactory = ({ App }: IAppFactory): IGetAppRepository => {
  const getAppRepository: IGetAppRepository = () => App.list();
  return getAppRepository;
};

export default getAppRepositoryFactory;
