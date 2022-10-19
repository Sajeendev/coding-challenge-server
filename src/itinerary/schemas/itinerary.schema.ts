import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DateModel } from './date.model';

export type ItineraryDocument = ItineraryModel & Document;

@Schema({ collection: 'itineraries' })
export class ItineraryModel {
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
  arrivalDate: DateModel;

  @Prop()
  departureDate: DateModel;
}

export const ItinerarySchema = SchemaFactory.createForClass(ItineraryModel);
