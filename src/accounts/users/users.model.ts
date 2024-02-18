import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Photo } from 'src/medias/photos/photos.model';
import { Company } from '../companies/companies.model';

export type UserDocument = User & mongoose.Document;

@Schema()
export class User {
  @Prop()
  firstName?: string;

  @Prop()
  lastName?: string;

  @Prop()
  email?: string;

  @Prop()
  password?: string;

  @Prop({ type: String, default: "user", enum: ["user", "admin", "company"] })
  roles?: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Photo' }] })
  photos: Photo[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Company' }] })
  companies: Company[];
}

export const UserSchema = SchemaFactory.createForClass(User);