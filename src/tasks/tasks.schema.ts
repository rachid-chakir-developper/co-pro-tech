import { Field, Float, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { UserType } from 'src/accounts/users/users.schema';

@ObjectType()
export class TaskType {
  @Field(type => ID, { nullable: true })
  id: any;

  @Field({ nullable: true })
  number?: string;

  @Field({ nullable: true })
  name?: string;

  @Field(type => UserType)
  creator?: UserType[];

  @Field({ nullable: true })
  startingDate?: Date;

  @Field({ nullable: true })
  endingDate?: Date;

  @Field(type => Float)
  estimatedBudget?: any;

  @Field({ nullable: true })
  latitude?: string;

  @Field({ nullable: true })
  longitude?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  zip?: string;

  @Field({ nullable: true })
  adress?: string;

  @Field({ nullable: true })
  priority?: string;

  @Field({ nullable: true })
  descreption?: string;

  @Field({ nullable: true })
  isActive?: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

}
@InputType()
export class TaskInput {

    @Field({ nullable: true })
    number?: string;
  
    @Field({ nullable: true })
    name?: string;
  
    @Field({ nullable: true })
    startingDate?: Date;
  
    @Field({ nullable: true })
    endingDate?: Date;
}



