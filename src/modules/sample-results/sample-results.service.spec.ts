import { Test, TestingModule } from '@nestjs/testing';
import { SampleResultsService } from './sample-results.service';

describe('SampleResultsService', () => {
  let service: SampleResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleResultsService],
    }).compile();

    service = module.get<SampleResultsService>(SampleResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
