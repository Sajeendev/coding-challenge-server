import { Query, Resolver } from '@nestjs/graphql';
import { Itinerary } from './itinerary.entity';
import { ItineraryService } from './itinerary.service';

@Resolver()
export class ItineraryResolver {
  constructor(private itineraryService: ItineraryService) {}

  /**
   * Query
   */
  @Query(() => [Itinerary])
  async itineraries(): Promise<Itinerary[]> {
    return await this.itineraryService.getAllItineraries();
  }
}
