import { Injectable } from '@nestjs/common';
import { CreateDiseaseDto } from './dto/create-disease.dto';
import { UpdateDiseaseDto } from './dto/update-disease.dto';
import { Disease } from 'src/schemas/disease.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DiseaseService {
  constructor(
    @InjectModel(Disease.name)
    private readonly diseaseModel: Model<Disease>,
  ) {}
  async create(createDiseaseDto: CreateDiseaseDto) {
    const organization = new this.diseaseModel(createDiseaseDto);
    return await organization.save();
  }

  async findAll(query) {
    return await this.diseaseModel.find(query);
  }

  async findOne(query:any) {
    return await this.diseaseModel.findOne(query);
  }

  async update(query: any, updateDiseaseDto: UpdateDiseaseDto) {
    return await this.diseaseModel.findOneAndUpdate(query, updateDiseaseDto);
  }

  async remove(id: string) {
    return await this.diseaseModel.findByIdAndDelete(id);
  }
}
