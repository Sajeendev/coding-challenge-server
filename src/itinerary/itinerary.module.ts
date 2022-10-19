import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItineraryController } from './itinerary.controller';
import { Itinerary } from './itinerary.entity';
import { ItineraryService } from './itinerary.service';
import { ItineraryResolver } from './itinerary.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Itinerary])],
  providers: [ItineraryService, ItineraryResolver],
  controllers: [ItineraryController],
})
export class ItineraryModule {}
