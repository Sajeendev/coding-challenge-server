import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItineraryController } from './itinerary.controller';
import { ItineraryService } from './itinerary.service';
import { Itinerary, ItinerarySchema } from './schemas/itinerary.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Itinerary.name, schema: ItinerarySchema },
    ]),
  ],
  providers: [ItineraryService],
  controllers: [ItineraryController],
})
export class ItineraryModule {}
