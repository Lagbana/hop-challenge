import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Product } from './products.model';
import { ApiResonse } from './products.interface';
import { UtilsService } from '../utils/utils.service';
import { NetworkError } from '../utils/utils.interface';

@Injectable()
export class ProductsService {
  constructor(
    private httpService: HttpService,
    private utilsService: UtilsService,
  ) {
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData(): Promise<Product | NetworkError> {
    const response = await this.httpService
      .get('https://ca.desknibbles.com/products.json?limit=250')
      .toPromise();

    return new Promise(function (resolve, reject) {
      try {
        if (response.status >= 200 || response.status <= 299) {
          resolve(response.data.products);
        } else {
          throw new Error('Network Error: Unable to fetch data');
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  async getProducts() {
    const fetchOrRetry = this.utilsService.fetchOrRetry;
    const callResponse = await fetchOrRetry(this.fetchData);
    const result: ApiResonse = {
      error: [],
      data: [],
    };

    if (typeof callResponse === 'string') {
      //TODO: Send error to Sentry
      console.error(callResponse);

      result.error = [callResponse];
      return result;
    } else {
      result.data = callResponse;
      return result;
    }
  }
}
