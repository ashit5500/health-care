import { Module } from '@nestjs/common';
import { DiseaseService } from './disease.service';
import { DiseaseController } from './disease.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Disease, DiseaseSchema } from 'src/schemas/disease.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Disease.name, schema: DiseaseSchema },
    ]),
  ],
  controllers: [DiseaseController],
  providers: [DiseaseService],
})
export class DiseaseModule {}
