import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Location } from './location.entity';
import { LocationService } from './location.service';

@ApiTags('Location')
@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  /**
   * Public get all locations
   */
  @Get()
  async getLocations(): Promise<Location[]> {
    return await this.locationService.getAllLocations();
  }
}
