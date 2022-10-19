import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Itinerary } from './itinerary.entity';

@Injectable()
export class ItineraryService {
  constructor(
    @InjectRepository(Itinerary)
    private itineraryRepository: Repository<Itinerary>,
  ) {}

  /**
   * Get all itineraries
   */
  async getAllItineraries(): Promise<Itinerary[]> {
    try {
      return await this.itineraryRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }
}
