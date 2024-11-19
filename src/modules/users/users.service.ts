import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/schemas/user.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    let user = new this.userModel(createUserDto);
    user.organizations = [...user.organizations, new Types.ObjectId(createUserDto.organization)];
    return await user.save();
  }

  async findAll(query) {
    return await this.userModel.find(query);
  }

  async findOne(query:any) {
    return await this.userModel.findOne(query);
  }

  async update(query: any, updateUserDto: UpdateUserDto) {
    return await this.userModel.findOneAndUpdate(query, updateUserDto);
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }
}
