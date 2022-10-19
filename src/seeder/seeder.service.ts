import {
  ConflictException,
  Injectable,
  NotImplementedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { format } from 'date-fns';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { ApiResponseInterface } from '../interfaces/api-response.interface';
import { Itinerary } from '../itinerary/itinerary.entity';
import { ItineraryDocument } from '../itinerary/schemas/itinerary.schema';
import { Location } from '../location/location.entity';
import { locationData } from './data/location-data';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,

    @InjectRepository(Itinerary)
    private itineraryRepository: Repository<Itinerary>,

    @InjectModel(Itinerary.name)
    private itineraryModel: Model<ItineraryDocument>,
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
      throw new NotImplementedException(error);
    }
  }

  /**
   * Itineraries
   */
  async seedItinerary(): Promise<ApiResponseInterface> {
    try {
      const itineraries = await this.itineraryModel.find();

      const refactoredItineraries = [];
      itineraries.map((itinerary) => {
        const item = {
          carrier: itinerary.carrier,
          departureLocation: itinerary.departureLocation,
          arrivalLocation: itinerary.arrivalLocation,
          price: itinerary.price,
          arrivalDate: format(
            new Date(
              itinerary.arrivalDate.year,
              itinerary.arrivalDate.month,
              itinerary.arrivalDate.dayOfMonth,
            ),
            'yyyy-MM-dd',
          ),
          departureDate: format(
            new Date(
              itinerary.departureDate.year,
              itinerary.departureDate.month,
              itinerary.departureDate.dayOfMonth,
            ),
            'yyyy-MM-dd',
          ),
        };
        refactoredItineraries.push(item);
      });

      await this.itineraryRepository
        .createQueryBuilder()
        .insert()
        .into(Itinerary)
        .values(refactoredItineraries)
        .execute();

      return {
        success: true,
        message: 'All locations data was inserted into db',
      };
    } catch (error) {
      if (error?.code === 'SQLITE_CONSTRAINT') {
        throw new ConflictException('Conflict: Data already exists');
      }
      throw new NotImplementedException(error);
    }
  }
}
