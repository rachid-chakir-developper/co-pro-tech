import { Test, TestingModule } from '@nestjs/testing';
import { TaskStepsResolver } from './task-steps.resolver';

describe('TaskStepsResolver', () => {
  let resolver: TaskStepsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskStepsResolver],
    }).compile();

    resolver = module.get<TaskStepsResolver>(TaskStepsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
