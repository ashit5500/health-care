import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from 'src/schemas/organization.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class OrganizationService {
  constructor(
    @InjectModel(Organization.name)
    private readonly organizationModel: Model<Organization>,
  ) {}
  async create(createOrganizationDto: CreateOrganizationDto) {
    const organization = new this.organizationModel(createOrganizationDto);
    return await organization.save();
  }

  async findAll(query) {
    return await this.organizationModel.find(query);
  }

  async findOne(query:any) {
    return await this.organizationModel.findOne(query);
  }

  async update(query: any, updateOrganizationDto: UpdateOrganizationDto) {
    return await this.organizationModel.findOneAndUpdate(query, updateOrganizationDto);
  }

  async remove(id: string) {
    return await this.organizationModel.findByIdAndDelete(id);
  }
}
