import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CommentType } from 'src/comments/comments.schema';
import { PhotoInput, PhotoType } from './photos/photos.schema';

@ObjectType()
export class MediaType {
  @Field(type => ID, { nullable: true })
  id: any;

  @Field(type => PhotoType)
  photo?: PhotoType;

  @Field(type => [CommentType])
  comments?: CommentType[];

  @Field({ nullable: true })
  latitude?: string;

  @Field({ nullable: true })
  longitude?: string;

  @Field({ nullable: true })
  isActive?: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

}
@InputType()
export class MediaInput {
    @Field(type => [PhotoInput])
    photo?: PhotoInput;

    @Field({ nullable: true })
    latitude?: string;
  
    @Field({ nullable: true })
    longitude?: string;
}



