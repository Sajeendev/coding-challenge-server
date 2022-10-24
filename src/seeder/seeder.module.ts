import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Itinerary } from '../itinerary/itinerary.entity';
import { Location } from '../location/location.entity';
import { SeederController } from './seeder.controller';
import { SeederService } from './seeder.service';

@Module({
  imports: [TypeOrmModule.forFeature([Location, Itinerary])],
  controllers: [SeederController],
  providers: [SeederService],
})
export class SeederModule {}
