import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/accounts/users/users.model';

export type TaskDocument = Task & mongoose.Document;

@Schema()
export class Task {
  @Prop()
  number?: string;

  @Prop()
  name?: string;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } })
  creator: User;

  @Prop()
  startingDate?: Date;

  @Prop()
  endingDate?: Date;

  @Prop()
  estimatedBudget?: Number;

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

  @Prop()
  priority?: string;

  @Prop()
  descreption?: string;

  @Prop()
  state?: string;

  @Prop({ type: Boolean, required: false, default: true })
  isActive?: boolean;
  
  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);