import axios, {AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse} from 'axios';
import { AppRoute, BASE_URL, REQUEST_TIMEOUT } from '../common/const';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
import { processErrorHandle } from './process-error-handle';
import { offersLoading } from '../store/action';
import { store } from '../store';

type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        //browserHistory как реализовать?
        const detailMessage = (error.response.data);
        // store.dispatch(offersLoading(false)); // сделать отдельный статус в редьюсере
        processErrorHandle(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};
