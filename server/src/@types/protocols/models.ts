export interface IBaseModel {
  list: () => any;
  get?: () => any;
  create?: () => any;
  update?: () => any;
  delete?: () => any;
}
