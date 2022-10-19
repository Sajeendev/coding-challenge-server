import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('Itineraries')
@ObjectType()
@Unique([
  'carrier',
  'departureLocation',
  'arrivalLocation',
  'departureDate',
  'arrivalDate',
  'price',
])
export class Itinerary {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  carrier: string;

  @Column()
  @Field()
  departureLocation: string;

  @Column()
  @Field()
  arrivalLocation: string;

  @Column()
  @Field()
  departureDate: string;

  @Column()
  @Field()
  arrivalDate: string;

  @Column({ type: 'float' })
  @Field()
  price: number;
}
