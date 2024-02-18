import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';
import { TaskStepsModule } from './task-steps/task-steps.module';

@Module({
  providers: [TasksService, TasksResolver],
  imports: [TaskStepsModule]
})
export class TasksModule {}
