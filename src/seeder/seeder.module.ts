import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Itinerary } from '../itinerary/itinerary.entity';
import { ItinerarySchema } from '../itinerary/schemas/itinerary.schema';
import { Location } from '../location/location.entity';
import { SeederController } from './seeder.controller';
import { SeederService } from './seeder.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Location, Itinerary]),
    MongooseModule.forFeature([
      { name: Itinerary.name, schema: ItinerarySchema },
    ]),
  ],
  controllers: [SeederController],
  providers: [SeederService],
})
export class SeederModule {}
