import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { BuyingParticipants, Participant } from './participants.model';
import * as Participants from '../participants.json';

@Injectable()
export class ParticpantsService {
  readonly #genders: string[];
  readonly #i: number;
  readonly #products: Map<string, string>;
  readonly #purchases: number[];

  constructor(private productsService: ProductsService) {
    this.#genders = ['men', 'women'];
    this.#i = Math.floor(Math.random() * 2);
    this.#products = new Map<string, string>();
    this.#purchases = [];
  }

  // Todo: ADD JSDOC COMMENTS
  public getAllParticipants(): Participant[] {
    return Participants;
  }

  // Todo: ADD JSDOC COMMENTS
  public async getBuyingParticpants(): Promise<BuyingParticipants> {
    const { data } = await this.productsService.getAllProducts();

    for (let item of data) {
      this.#products.set(item.title, item.variants[0].price);
    }

    // get all participants who bought a real product
    const buyingParticipants: Participant[] = Participants.filter(
      (person, index) => {
        if (this.#products.has(person.purchases)) {
          // push purchased prices
          const price = Number(this.#products.get(person.purchases));
          this.#purchases.push(price);

          const picture = this.getRandomPicture(index);
          return { ...person, picture };
        }
        return false;
      },
    );

    const totalPurchases = this.getTotalPurchases(this.#purchases);
    const totalBalances = this.getTotalBalances(buyingParticipants);

    return {
      buyingParticipants,
      totalPurchases,
      totalBalances,
    };
  }

  // Todo: Assumption is that we are looking for total left over balance
  // Todo: Add JSDOC COMMENTS
  private getTotalPurchases(purchases: number[]): number {
    let totalPurchases: number = 0;
    for (let i of purchases) {
      totalPurchases += i;
    }

    return totalPurchases;
  }

  // Todo: Add JSDOC COMMENTS
  private getTotalBalances(participants: Participant[]): number {
    const totalBalances = participants.reduce((acc, cur) => {
      return acc + this.parseBalance(cur.balance);
    }, 0);
    console.log(totalBalances);
    return totalBalances;
  }

  // Todo: Add JSDOC COMMENTS
  private getRandomPicture(index: number): string {
    const gender = this.#genders[this.#i];
    const picture = `https://randomuser.me/api/portraits/thumb/${gender}/${index}.jpg`;
    return picture;
  }

  // Todo: Add JSDOC COMMENTS
  private parseBalance(balance: string): number {
    const parsedNum = Number(balance.replace(/[^0-9.-]+/g, ''));
    return parsedNum;
  }
}
