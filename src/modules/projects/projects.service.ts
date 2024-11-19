import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import mongoose, { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from 'src/schemas/project.schema';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name)
    private readonly projectModel: Model<Project>,
  ) {}
  async create(createProjectDto: CreateProjectDto) {
    const project = new this.projectModel(createProjectDto);
    project.assignedTo = [new Types.ObjectId(createProjectDto.assignedTo)];
    return await project.save();
  }

  async findAll(query) {
    return await this.projectModel.find(query);
  }

  async findOne(query:any) {
    return await this.projectModel.findOne(query);
  }

  async update(query: any, updateProjectDto: UpdateProjectDto) {
    updateProjectDto.$push = { assignedTo: new Types.ObjectId(updateProjectDto.assignedTo)};
    delete updateProjectDto.assignedTo;
    console.log("query", query);
    console.log("updateProjectDto", updateProjectDto);
    return await this.projectModel.findOneAndUpdate(query, updateProjectDto);
  }

  async remove(id: string) {
    return await this.projectModel.findByIdAndDelete(id);
  }
}
