import { IApp, IAppWithCount } from 'constants/models';
import http, { defaultHeaders } from './http';

const url = process.env.REACT_APP_API_URL as string;

export interface IGetStatsResponse {
  marketSize: number;
  topApps: IAppWithCount[];
  chartData: IApp[];
}

export const getStats = async (): Promise<IGetStatsResponse> => {
  const response: IGetStatsResponse = await http.get(`${url}/apps/stats`, {
    headers: defaultHeaders,
  });

  return response;
};
