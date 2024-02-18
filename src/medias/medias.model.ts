import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Comment } from 'src/comments/comments.model';
import { Photo } from './photos/photos.model';

export type MediaDocument = Media & mongoose.Document;

@Schema()
export class Media {

    @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Photo' } })
    photo: Photo;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
    comments: Comment[];

    @Prop()
    latitude?: string;
  
    @Prop()
    longitude?: string;

    @Prop({ type: Boolean, required: false, default: true })
    isActive?: boolean;

    @Prop()
    createdAt?: Date;
}

export const MediaSchema = SchemaFactory.createForClass(Media);