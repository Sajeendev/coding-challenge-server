import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { format } from 'date-fns';
import { Model } from 'mongoose';
import { Itinerary, ItineraryDocument } from './schemas/itinerary.schema';

@Injectable()
export class ItineraryService {
  constructor(
    @InjectModel(Itinerary.name)
    private itineraryModel: Model<ItineraryDocument>,
  ) {}

  /**
   * Find all
   */
  async findAll(): Promise<Itinerary[]> {
    const itineraries = await this.itineraryModel.find();

    const data = [];
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
      data.push(item);
    });

    return data;
  }
}
