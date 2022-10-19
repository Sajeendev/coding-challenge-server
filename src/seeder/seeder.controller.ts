import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponseInterface } from '../interfaces/api-response.interface';
import { SeederService } from './seeder.service';

@ApiTags('Seeder')
@Controller('seeder')
export class SeederController {
  constructor(private seederService: SeederService) {}

  /**
   * Seed locations
   */
  @Post('/seed-locations')
  async seedLocations(): Promise<ApiResponseInterface> {
    return await this.seederService.seedLocations();
  }
}
