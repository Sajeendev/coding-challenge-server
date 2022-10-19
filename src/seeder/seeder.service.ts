import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiResponseInterface } from '../interfaces/api-response.interface';
import { LocationEntity } from '../location/location.entity';
import { locationData } from './data/location-data';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(LocationEntity)
    private locationRepository: Repository<LocationEntity>,
  ) {}

  /**
   * Locations
   */
  async seedLocations(): Promise<ApiResponseInterface> {
    try {
      await this.locationRepository
        .createQueryBuilder()
        .insert()
        .into(LocationEntity)
        .values(await locationData())
        .execute();

      return {
        success: true,
        message: 'All locations data was inserted into db',
      };
    } catch (error) {
      throw new NotImplementedException(error);
    }
  }
}
