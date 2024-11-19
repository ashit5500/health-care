import { Injectable } from '@nestjs/common';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { Model, Types } from 'mongoose';
import { Site } from 'src/schemas/site.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SitesService {
  constructor(
    @InjectModel(Site.name)
    private readonly siteModel: Model<Site>,
  ) {}
  async create(createSiteDto: CreateSiteDto) {
    const organization = new this.siteModel(createSiteDto);
    return await organization.save();
  }

  async findAll(query) {
    return await this.siteModel.find(query);
  }

  async findOne(query:any) {
    return await this.siteModel.findOne(query);
  }

  async update(query: any, updateSiteDto: UpdateSiteDto) {
    updateSiteDto.$push = { assignedTo: new Types.ObjectId(updateSiteDto.assignedTo)};
    delete updateSiteDto.assignedTo;
    return await this.siteModel.findOneAndUpdate(query, updateSiteDto);
  }

  async remove(id: string) {
    return await this.siteModel.findByIdAndDelete(id);
  }
}
