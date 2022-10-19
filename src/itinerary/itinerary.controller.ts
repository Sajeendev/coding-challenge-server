import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ItineraryService } from './itinerary.service';
import { ItineraryModel } from './schemas/itinerary.schema';

@ApiTags('Itinerary')
@Controller('itinerary')
export class ItineraryController {
  constructor(private itineraryService: ItineraryService) {}

  /**
   * Get all itineraries
   */
  @Get()
  async getAllItinerary(): Promise<ItineraryModel[]> {
    return await this.itineraryService.findAll();
  }
}
