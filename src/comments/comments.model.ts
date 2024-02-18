import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/accounts/users/users.model';
import { Task } from 'src/tasks/tasks.model';

export type CommentDocument = Comment & mongoose.Document;

@Schema()
export class Comment {
  @Prop()
  content?: string;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;

  @Prop({ type: Boolean, required: false, default: false })
  isSeen?: boolean;

  @Prop({ type: Boolean, required: false, default: false })
  isRead?: boolean;

  @Prop({ type: Boolean, required: false, default: true })
  isActive?: boolean;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } })
  creator: User;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' } })
  task: Task;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);