import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { RegisterInput } from '../users/users.schema';

@ObjectType()
export class CompanyType {
  @Field(type => ID, { nullable: true })
  id: any;

  @Field({ nullable: true })
  number?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;
}
@InputType()
export class CompanyInput {
  @Field()
  number: string;

  @Field()
  name: string;

  @Field()
  email: string;
}

@InputType()
export class CompanyRegisterInput {
    @Field(type => CompanyInput)
    companyInput: CompanyInput;

    @Field(type => RegisterInput)
    userAdminInput: RegisterInput;
}


