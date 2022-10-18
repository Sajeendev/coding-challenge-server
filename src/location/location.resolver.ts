import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLocationDto } from './dto/createLocation.dto';
import { LocationEntity } from './location.entity';
import { LocationService } from './location.service';

@Resolver((of) => LocationEntity)
export class LocationResolver {
  constructor(private locationService: LocationService) {}

  /**
   * Query
   */
  @Query((returns) => [LocationEntity])
  async locations(): Promise<LocationEntity[]> {
    return await this.locationService.findAll();
  }

  /**
   * Mutation
   */
  @Mutation((returns) => LocationEntity)
  async createLocation(
    @Args('createLocationDto') createLocationDto: CreateLocationDto,
  ): Promise<LocationEntity> {
    return await this.locationService.createLocation(createLocationDto);
  }
}
