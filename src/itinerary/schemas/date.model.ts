import { Prop } from '@nestjs/mongoose';

export class DateModel {
  @Prop()
  year: number;
  @Prop()
  month: number;
  @Prop()
  dayOfMonth: number;
  @Prop()
  hourOfDay: number;
  @Prop()
  minute: number;
  @Prop()
  second: number;
}
