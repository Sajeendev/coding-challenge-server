import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationEntity } from './location.entity';
import { LocationResolver } from './location.resolver';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LocationEntity])],
  providers: [LocationResolver, LocationService],
  controllers: [LocationController],
})
export class LocationModule {}
