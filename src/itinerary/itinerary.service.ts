import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
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

  /**
   * Get itinerary by id
   */
  async getItineraryById(id: number): Promise<Itinerary> {
    const itinerary = await this.itineraryRepository.findOne({
      where: { id },
    });

    if (!itinerary) {
      throw new NotFoundException('No itinerary found');
    }

    try {
      return itinerary;
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }
}
