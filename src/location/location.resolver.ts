import { Query, Resolver } from '@nestjs/graphql';
import { LocationEntity } from './location.entity';
import { LocationService } from './location.service';

@Resolver(() => LocationEntity)
export class LocationResolver {
  constructor(private locationService: LocationService) {}

  @Query(() => [LocationEntity])
  async locations(): Promise<LocationEntity[]> {
    return await this.locationService.findAll();
  }
}
