import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/createLocation.dto';
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
  async findAll(): Promise<Location[]> {
    try {
      return await this.locationRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  /**
   * Create location
   */
  async createLocation(
    createLocationDto: CreateLocationDto,
  ): Promise<Location> {
    try {
      const location = this.locationRepository.create(createLocationDto);
      return await this.locationRepository.save(location);
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }
}
