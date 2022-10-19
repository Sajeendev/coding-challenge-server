import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Itinerary } from './itinerary.entity';
import { ItineraryService } from './itinerary.service';

@ApiTags('Itinerary')
@Controller('itinerary')
export class ItineraryController {
  constructor(private itineraryService: ItineraryService) {}

  /**
   * Get all itineraries
   */
  @Get()
  async getAllItineraries(): Promise<Itinerary[]> {
    return await this.itineraryService.getAllItineraries();
  }
}
