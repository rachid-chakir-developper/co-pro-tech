import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PhotoType {
  @Field(type => ID, { nullable: true })
  id: any;

  @Field({ nullable: true })
  filename?: string;

  @Field({ nullable: true })
  mimetype?: string;

  @Field({ nullable: true })
  path?: string;

  @Field({ nullable: true })
  isForProfile?: boolean;

  @Field({ nullable: true })
  isForCover?: boolean;

  @Field({ nullable: true })
  isActive?: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

}
@InputType()
export class PhotoInput {
  @Field()
  photo: string;//Upload

  @Field()
  isForProfile?: boolean;

  @Field()
  isForCover?: boolean;
}



