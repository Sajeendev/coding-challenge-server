import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LocationEntity {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
