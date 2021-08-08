import axios, { AxiosResponse } from 'axios';
import { CategoryType, DataModelType, DepthType, PizzaType, ResponseModelType, SizeType } from '../types';
import { AppStateType } from '../state/app.state/app.state';
import { urlEnum } from '../state/app.state/state.const';

export type ItemResponseType = PizzaType | CategoryType | DepthType | SizeType;

export interface ApiType {
  fetch: (url: urlEnum | string) => Promise<AxiosResponse>;
  fetchAllData: (urls: string[]) => Promise<ResponseModelType>;
}

export const api: ApiType = {
  fetch: async (url: urlEnum | string) => {
    const BASE_URL = `${process.env.NEXT_PUBLIC_API_HOST}/api`;

    try {
      const response: AxiosResponse = await axios
        .get<ItemResponseType[]>(`${BASE_URL}/${url}/`)
        .then((res) => new Promise((resolve) => setTimeout(() => resolve(res), 2)));

      return response as AxiosResponse;
    } catch (e) {
      console.log(e.response);
      return e.response;
    }
  },

  fetchAllData: async (urls: string[]) => {
    const response: Promise<AxiosResponse<DataModelType | ''>>[] = urls.map((url) => api.fetch(url));

    try {
      return <AppStateType>await Promise.all(response)
        .then((res) => {
          return res.reduce((arr, current, i) => {
            if (current.data === '') {
              return { ...arr, [urls[i]]: [] };
            }

            return {
              ...arr,
              [urls[i]]: JSON.parse(JSON.stringify(current.data)),
            };
          }, {});
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e.response);
      return e.response;
    }
  },
};
