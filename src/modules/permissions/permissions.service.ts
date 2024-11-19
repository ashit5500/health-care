import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Permission } from 'src/schemas/permission.schema';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectModel(Permission.name)
    private readonly permissionModel: Model<Permission>,
  ) {}
  async create(createPermissionDto: CreatePermissionDto) {
    const permission = new this.permissionModel(createPermissionDto);
    return await permission.save();
  }

  async findAll(query) {
    return await this.permissionModel.find(query);
  }

  async findOne(query:any) {
    return await this.permissionModel.findOne(query);
  }

  async update(query: any, updatePermissionDto: UpdatePermissionDto) {
    return await this.permissionModel.findOneAndUpdate(query, updatePermissionDto);
  }

  async remove(id: string) {
    return await this.permissionModel.findByIdAndDelete(id);
  }
}
