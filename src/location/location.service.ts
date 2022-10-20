import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  /**
   * Get all locations
   */
  async getAllLocations(): Promise<Location[]> {
    try {
      return await this.locationRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }
}
