import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LocationEntity } from './location.entity';
import { LocationService } from './location.service';

@ApiTags('Locations')
@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  /**
   * Public get all locations
   */
  @Get()
  async getLocations(): Promise<LocationEntity[]> {
    return await this.locationService.findAll();
  }
}
