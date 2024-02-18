import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeviceType {
  @Field(type => ID, { nullable: true })
  id: any;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  descreption?: string;

  @Field({ nullable: true })
  token?: string;

  @Field({ nullable: true })
  platform?: string;

  @Field({ nullable: true })
  isUserOnlineHere?: boolean;

}
@InputType()
export class DeviceInput {
  @Field()
  name: string;

  @Field()
  descreption: string;

  @Field()
  token: string;

  @Field()
  platform: string;

  @Field()
  isUserOnlineHere?: boolean;
}



