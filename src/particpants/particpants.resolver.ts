import { Resolver, Query } from '@nestjs/graphql';
import { Participant, BuyingParticipants } from './participants.model';
import { ParticpantsService } from './particpants.service';

@Resolver()
export class ParticpantsResolver {
  constructor(private readonly particpantsService: ParticpantsService) {}

  /**
   * Returns all array of all event participants
   * @endPoint {getAllParticpants}
   * @returns Promise<Array<{Participant}>>
   */
  @Query(() => [Participant])
  getAllParticpants(): Participant[] {
    const participants = this.particpantsService.getAllParticipants();
    return participants;
  }

  /**
   * Returns an object of buying partipants and their total balances and purchases
   * @endPoint {getBuyingParticpants}
   * @returns Promise<{BuyingParticipants}>
   */
  @Query(() => BuyingParticipants)
  async getBuyingParticpants(): Promise<BuyingParticipants> {
    const buyingParticipants = await this.particpantsService.getBuyingParticpants();
    return buyingParticipants;
  }
}
