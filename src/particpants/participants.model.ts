import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Participant {
  @Field()
  _id?: string;

  @Field()
  balance?: string;

  @Field()
  company?: string;

  @Field()
  email?: string;

  @Field()
  name?: string;

  @Field()
  phone?: string;

  @Field()
  picture?: string;

  @Field()
  purchases?: string;

  /**
   * *Unused fields
   */
  about: string;
  address: string;
  index: number;
  isActive: boolean;
  registered: string;
  tags: string[];
}

@ObjectType()
export class BuyingParticipants {
  @Field(() => [Participant])
  buyingParticipants: Participant[];

  @Field()
  totalPurchases: number;

  @Field()
  totalBalances: number;
}
