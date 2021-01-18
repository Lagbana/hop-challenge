import { Resolver, Query } from '@nestjs/graphql';
import { Participant, BuyingParticipants } from './participants.model';
import { ParticpantsService } from './particpants.service';

@Resolver()
export class ParticpantsResolver {
  constructor(private readonly particpantsService: ParticpantsService) {}

  // Todo: ADD JSDOC COMMENTS
  @Query(() => [Participant])
  getAllParticpants(): Participant[] {
    const participants = this.particpantsService.getAllParticipants();
    return participants;
  }

  // Todo: ADD JSDOC COMMENTS
  @Query(() => BuyingParticipants)
  async getBuyingParticpants(): Promise<BuyingParticipants> {
    const buyingParticipants = await this.particpantsService.getBuyingParticpants();
    return buyingParticipants;
  }
}
