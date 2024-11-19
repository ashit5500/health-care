import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Base } from './base.schema';
import mongoose, { HydratedDocument, Types } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema({ timestamps: true })
export class Project extends Base {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Disease', required: true, default: [] })
  disease: mongoose.Schema.Types.ObjectId;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Organization', default: [] })
  assignedTo: Types.ObjectId[]
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
