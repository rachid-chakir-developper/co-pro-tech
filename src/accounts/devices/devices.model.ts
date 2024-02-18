import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../users/users.model';

export type DeviceDocument = Device & mongoose.Document;

@Schema()
export class Device {
  @Prop()
  name?: string;

  @Prop()
  descreption?: string;

  @Prop({ type: String , required: true, unique: true})
  token?: string;

  @Prop()
  platform?: string;

  @Prop({ type: Boolean, required: false, default: true })
  isUserOnlineHere?: boolean;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } })
  user: User;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);