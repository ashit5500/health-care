import { Module } from '@nestjs/common';
import { SampleResultsService } from './sample-results.service';
import { SampleResultsController } from './sample-results.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SampleResult, SampleResultSchema } from 'src/schemas/sampleResult.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SampleResult.name, schema: SampleResultSchema },
    ]),
  ],
  controllers: [SampleResultsController],
  providers: [SampleResultsService],
})
export class SampleResultsModule {}
