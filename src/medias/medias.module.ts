import { Module } from '@nestjs/common';
import { PhotosModule } from './photos/photos.module';
import { VideosModule } from './videos/videos.module';
import { FilesModule } from './files/files.module';
import { DocumentsModule } from './documents/documents.module';

@Module({
  imports: [PhotosModule, VideosModule, FilesModule, DocumentsModule]
})
export class MediasModule {}
