import { Module } from '@nestjs/common';
import { TaskStepsService } from './task-steps.service';
import { TaskStepsResolver } from './task-steps.resolver';

@Module({
  providers: [TaskStepsService, TaskStepsResolver]
})
export class TaskStepsModule {}
