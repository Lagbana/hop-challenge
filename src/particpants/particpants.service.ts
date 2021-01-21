import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { BuyingParticipants, Participant } from './participants.model';
import * as Participants from '../participants.json';

@Injectable()
export class ParticpantsService {
  readonly #products: Map<string, string>;
  readonly #purchases: number[];

  constructor(private productsService: ProductsService) {
    this.#products = new Map<string, string>();
    this.#purchases = [];
  }

  /**
   * Gets an array of all event participants
   * @returns Array<{Participant}>
   */
  public getAllParticipants(): Participant[] {
    return Participants;
  }

  /**
   * Gets an object of buying partipants and their total balances and purchases
   * @returns Promise<{BuyingParticipants}>
   *
   */
  public async getBuyingParticpants(): Promise<BuyingParticipants> {
    const { data } = await this.productsService.getAllProducts();

    for (let item of data) {
      this.#products.set(item.title, item.variants[0].price);
    }

    // get all participants who bought a real product
    const buyingParticipantsFilter: Participant[] = Participants.filter(
      (person) => this.#products.has(person.purchases),
    );

    const buyingParticipants = buyingParticipantsFilter.map((person, index) => {
      const price = Number(this.#products.get(person.purchases));
      this.#purchases.push(price);

      const picture = this.getRandomPicture(index);
      return { ...person, picture };
    });

    const totalPurchases = this.getTotalPurchases(this.#purchases);
    const totalBalances = this.getTotalBalances(buyingParticipants);

    return {
      buyingParticipants,
      totalPurchases,
      totalBalances,
    };
  }

  /**
   * Calculates the total purchases at the event
   * @Param purchases: {Array<{number}>}
   * @returns Type<{Number}>
   */
  private getTotalPurchases(purchases: number[]): number {
    let totalPurchases: number = 0;
    for (let i of purchases) {
      totalPurchases += i;
    }
    return totalPurchases;
  }

  /**
   * Calculates the total balances of purchasing participants at the event
   * @Param participants: {Array<{Participant}>}
   * @returns Type<{Number}>
   */
  private getTotalBalances(participants: Participant[]): number {
    const totalBalances = participants.reduce((acc, cur) => {
      return acc + this.parseBalance(cur.balance);
    }, 0);
    return totalBalances;
  }

  /**
   * Returns a random image url string
   * @Param index: Type<{number}>
   * @returns Type<{string}>
   */
  private getRandomPicture(index: number): string {
    let genders: string[] = ['men', 'women'];
    let i = Math.round(Math.random());
    const gender = genders[i];
    return `https://randomuser.me/api/portraits/thumb/${gender}/${index}.jpg`;
  }

  /**
   * Parses a participant's balance string to a number
   * @Param balance: Type<{String}>
   * @returns Type<{Number}>
   */
  private parseBalance(balance: string): number {
    const parsedNum = Number(balance.replace(/[^0-9.-]+/g, ''));
    return parsedNum;
  }
}
