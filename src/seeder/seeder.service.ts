import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiResponseInterface } from '../interfaces/api-response.interface';
import { Itinerary } from '../itinerary/itinerary.entity';
import { Location } from '../location/location.entity';
import { itineraryData } from './data/itinerary-data';
import { locationData } from './data/location-data';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,

    @InjectRepository(Itinerary)
    private itineraryRepository: Repository<Itinerary>,
  ) {}

  /**
   * Locations
   */
  async seedLocations(): Promise<ApiResponseInterface> {
    try {
      await this.locationRepository
        .createQueryBuilder()
        .insert()
        .into(Location)
        .values(await locationData())
        .execute();

      return {
        success: true,
        message: 'All locations data was inserted into db',
      };
    } catch (error) {
      if (error?.code === 'SQLITE_CONSTRAINT') {
        throw new ConflictException('Conflict: Data already exists');
      }
      throw new InternalServerErrorException(error);
    }
  }

  /**
   * Itineraries
   */
  async seedItineraries(): Promise<ApiResponseInterface> {
    try {
      await this.itineraryRepository
        .createQueryBuilder()
        .insert()
        .into(Itinerary)
        .values(await itineraryData())
        .execute();

      return {
        success: true,
        message: 'All itineraries data was inserted into db',
      };
    } catch (error) {
      if (error?.code === 'SQLITE_CONSTRAINT') {
        throw new ConflictException('Conflict: Data already exists');
      }
      throw new InternalServerErrorException(error);
    }
  }
}
