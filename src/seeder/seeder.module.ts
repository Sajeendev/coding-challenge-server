import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationEntity } from '../location/location.entity';
import { SeederController } from './seeder.controller';
import { SeederService } from './seeder.service';

@Module({
  imports: [TypeOrmModule.forFeature([LocationEntity])],
  controllers: [SeederController],
  providers: [SeederService],
})
export class SeederModule {}
