import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DateSchema } from './date.schema';

export type ItineraryDocument = Itinerary & Document;

@Schema({ collection: 'itineraries' })
export class Itinerary {
  @Prop()
  id: string;

  @Prop()
  carrier: string;

  @Prop()
  departureLocation: string;

  @Prop()
  arrivalLocation: string;

  @Prop()
  price: number;

  @Prop()
  arrivalDate: DateSchema;

  @Prop()
  departureDate: DateSchema;
}

export const ItinerarySchema = SchemaFactory.createForClass(Itinerary);
