import { Injectable } from '@nestjs/common';
import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';
import { Sample } from 'src/schemas/sample.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SamplesService {
  constructor(
    @InjectModel(Sample.name)
    private readonly sampleModel: Model<Sample>,
  ) {}

  async create(createSampleDto: CreateSampleDto) {
    const organization = new this.sampleModel(createSampleDto);
    return await organization.save();
  }

  async findAll(query) {
    return await this.sampleModel.find(query);
  }

  async findOne(query:any) {
    return await this.sampleModel.findOne(query);
  }

  async update(query: any, updateSampleDto: UpdateSampleDto) {
    return await this.sampleModel.findOneAndUpdate(query, updateSampleDto);
  }

  async remove(id: string) {
    return await this.sampleModel.findByIdAndDelete(id);
  }
}
