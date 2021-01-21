import { Injectable, HttpService } from '@nestjs/common';
import { Product } from './products.model';
import { ApiResonse } from './products.interface';
import { UtilsService } from '../utils/utils.service';
import { NetworkError } from '../utils/utils.interface';
import * as Participants from '../participants.json';

@Injectable()
export class ProductsService {
  constructor(
    private httpService: HttpService,
    private utilsService: UtilsService,
  ) {
    this.fetchData = this.fetchData.bind(this);
  }

  /**
   * Fetches the products from external API
   * @returns Promise<{Product[] | NetworkError}>
   */
  private async fetchData(): Promise<Product[] | NetworkError> {
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

  /**
   * Gets an array of all products
   * @returns Promise<{ApiResonse}>
   */
  public async getAllProducts(): Promise<ApiResonse> {
    const fetchOrRetry = this.utilsService.fetchOrRetry;
    const callResponse = await fetchOrRetry(this.fetchData);
    const result: ApiResonse = {
      error: [],
      data: [],
    };

    if (typeof callResponse === 'string') {
      //TODO: Send error to Sentry or other error service
      console.error(callResponse);

      result.error = [callResponse];
      return result;
    }
    result.data = callResponse;
    return result;
  }

  /**
   * Gets an array of purchased products
   * @returns Promise<{Product[]}>
   */
  public async getPurchasedProducts(): Promise<Product[]> {
    const participantPurchases = new Set<string>();

    for (let person of Participants) {
      participantPurchases.add(person.purchases);
    }

    const { data } = await this.getAllProducts();
    const purchasedProducts = data.filter((item) =>
      participantPurchases.has(item.title),
    );

    return purchasedProducts;
  }
}
