import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Photo } from 'src/medias/photos/photos.model';
import { User } from '../users/users.model';

export type CompanyDocument = Company & mongoose.Document;

@Schema()
export class Company {
  @Prop()
  number?: string;

  @Prop()
  name?: string;

  @Prop()
  email?: string;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } })
  creator: User;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Photo' }] })
  photos: Photo[];

  @Prop()
  startingDate?: Date;

  @Prop()
  latitude?: string;

  @Prop()
  longitude?: string;

  @Prop()
  city?: string;

  @Prop()
  zip?: string;

  @Prop()
  adress?: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);