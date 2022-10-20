import { Query, Resolver } from '@nestjs/graphql';
import { Location } from './location.entity';
import { LocationService } from './location.service';

@Resolver(() => Location)
export class LocationResolver {
  constructor(private locationService: LocationService) {}

  /**
   * Query
   */
  @Query(() => [Location])
  async locations(): Promise<Location[]> {
    return await this.locationService.getAllLocations();
  }
}
