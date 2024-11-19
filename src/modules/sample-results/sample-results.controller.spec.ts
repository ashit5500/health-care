import { Test, TestingModule } from '@nestjs/testing';
import { SampleResultsController } from './sample-results.controller';
import { SampleResultsService } from './sample-results.service';

describe('SampleResultsController', () => {
  let controller: SampleResultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleResultsController],
      providers: [SampleResultsService],
    }).compile();

    controller = module.get<SampleResultsController>(SampleResultsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
