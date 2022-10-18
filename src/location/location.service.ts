import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/createLocation.dto';
import { LocationEntity } from './location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationEntity)
    private locationRepository: Repository<LocationEntity>,
  ) {}

  /**
   * Get all locations
   */
  async findAll(): Promise<LocationEntity[]> {
    try {
      return await this.locationRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Create location
   */
  async createLocation(
    createLocationDto: CreateLocationDto,
  ): Promise<LocationEntity> {
    try {
      const location = this.locationRepository.create(createLocationDto);
      return await this.locationRepository.save(location);
    } catch (error) {
      console.log(error);
    }
  }
}
