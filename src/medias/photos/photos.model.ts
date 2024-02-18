import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type PhotoDocument = Photo & mongoose.Document;

@Schema()
export class Photo {
  @Prop()
  filename?: string;

  @Prop()
  mimetype?: string;

  @Prop()
  path?: string;

  @Prop({ type: Boolean, required: false, default: false })
  isForProfile?: boolean;

  @Prop({ type: Boolean, required: false, default: false })
  isForCover?: boolean;

  @Prop({ type: Boolean, required: false, default: true })
  isActive?: boolean;

  @Prop()
  createdAt?: Date;
}

export const PhotoSchema = SchemaFactory.createForClass(Photo);