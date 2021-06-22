import axios, { AxiosResponse, AxiosError } from 'axios';

const instance = axios.create();
export const defaultHeaders = { 'Content-Type': 'application/json' };

const successResponse = ({ data }: AxiosResponse) => data;
const errorResponse = (err: AxiosError) => {
  throw err;
};

instance.interceptors.response.use(successResponse, errorResponse);

export default instance;
