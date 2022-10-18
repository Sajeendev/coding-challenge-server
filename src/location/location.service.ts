import { Injectable } from '@nestjs/common';
import { LocationEntity } from './location.entity';

@Injectable()
export class LocationService {
  /**
   * Get all locations
   */
  async findAll(): Promise<LocationEntity[]> {
    const location = new LocationEntity();
    location.id = 1;
    location.name = 'Madrid';

    return [location];
  }
}
