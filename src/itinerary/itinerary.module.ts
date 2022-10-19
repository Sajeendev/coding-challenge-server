import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItineraryController } from './itinerary.controller';
import { ItineraryService } from './itinerary.service';
import { ItineraryModel, ItinerarySchema } from './schemas/itinerary.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ItineraryModel.name, schema: ItinerarySchema },
    ]),
  ],
  providers: [ItineraryService],
  controllers: [ItineraryController],
})
export class ItineraryModule {}
