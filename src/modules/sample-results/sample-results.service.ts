import { Injectable } from '@nestjs/common';
import { CreateSampleResultDto } from './dto/create-sample-result.dto';
import { UpdateSampleResultDto } from './dto/update-sample-result.dto';
import { SampleResult } from 'src/schemas/sampleResult.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SampleResultsService {
  constructor(
    @InjectModel(SampleResult.name)
    private readonly sampleResultModel: Model<SampleResult>,
  ) {}
  async create(createSampleResultDto: CreateSampleResultDto) {
    const organization = new this.sampleResultModel(createSampleResultDto);
    return await organization.save();
  }

  async findAll(query) {
    return await this.sampleResultModel.find(query);
  }

  async findOne(query:any) {
    return await this.sampleResultModel.findOne(query);
  }

  async update(query: any, updateSampleResultDto: UpdateSampleResultDto) {
    return await this.sampleResultModel.findOneAndUpdate(query, updateSampleResultDto);
  }

  async remove(id: string) {
    return await this.sampleResultModel.findByIdAndDelete(id);
  }
}
