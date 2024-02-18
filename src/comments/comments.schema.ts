import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommentType {
  @Field(type => ID, { nullable: true })
  id: any;

  @Field({ nullable: true })
  content?: string;

  @Field({ nullable: true })
  isSeen?: boolean;

  @Field({ nullable: true })
  isRead?: boolean;

  @Field({ nullable: true })
  isActive?: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

}
@InputType()
export class CommentInput {
  @Field()
  content: string;

  @Field(type => ID)
  task: any;
}



