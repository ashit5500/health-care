import { Module } from '@nestjs/common';
import { SamplesService } from './samples.service';
import { SamplesController } from './samples.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sample, SampleSchema } from 'src/schemas/sample.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Sample.name, schema: SampleSchema },
    ]),
  ],
  controllers: [SamplesController],
  providers: [SamplesService],
})
export class SamplesModule {}
