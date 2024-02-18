import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { AccountsModule } from './accounts/accounts.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { ObservationsModule } from './observations/observations.module';
import { CommentsModule } from './comments/comments.module';
import { ChatModule } from './chat/chat.module';
import { DatasModule } from './datas/datas.module';
import { MediasModule } from './medias/medias.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    MongooseModule.forRoot('mongodb+srv://ctoh:UYrSHR6C53lHocqW@cluster0.mfp2s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    AccountsModule,
    TasksModule,
    ObservationsModule,
    CommentsModule,
    ChatModule,
    DatasModule,
    MediasModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
