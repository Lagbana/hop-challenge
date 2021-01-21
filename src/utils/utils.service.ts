import { Injectable } from '@nestjs/common';
import { Func } from './utils.interface';

@Injectable()
export class UtilsService {
  constructor() {
    this.fetchOrRetry = this.fetchOrRetry.bind(this);
  }

  /**
   * Retries the API call n times if it doesn't succeed the first time.
   *
   * @param {function} fn
   * @param {Number} [retries=3]
   * @returns {Promise}
  */
  fetchOrRetry(
    fn: Func,
    retries: number = 3,
    err: string = '',
  ): Promise<string> | ReturnType<typeof fn> {
    if (retries === 0) {
      return Promise.reject(err);
    }
    return fn().catch((err: string) => this.fetchOrRetry(fn, retries - 1, err));
  }
}
