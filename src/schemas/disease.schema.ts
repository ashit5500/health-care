import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Base } from './base.schema';
import mongoose, { HydratedDocument, Types } from 'mongoose';

export type DiseaseDocument = HydratedDocument<Disease>;

@Schema({ timestamps: true })
export class Disease extends Base {

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String })
  description: string;
 
}

export const DiseaseSchema = SchemaFactory.createForClass(Disease);
