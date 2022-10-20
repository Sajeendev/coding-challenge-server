import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Itinerary } from './itinerary.entity';
import { ItineraryService } from './itinerary.service';

@Resolver()
export class ItineraryResolver {
  constructor(private itineraryService: ItineraryService) {}

  /**
   * Get itineraries
   */
  @Query(() => [Itinerary])
  async itineraries(): Promise<Itinerary[]> {
    return await this.itineraryService.getAllItineraries();
  }

  /**
   * Get itinerary by id
   */
  @Query(() => Itinerary)
  async getItineraryById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Itinerary> {
    return await this.itineraryService.getItineraryById(id);
  }
}
