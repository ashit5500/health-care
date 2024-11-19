import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Base } from './base.schema';
import mongoose, { HydratedDocument, Types } from 'mongoose';

export type SampleResultDocument = HydratedDocument<SampleResult>;

@Schema({ timestamps: true })
export class SampleResult extends Base {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Disease', required: true })
  disease: mongoose.Schema.Types.ObjectId;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String })
  location: string;
}

export const SampleResultSchema = SchemaFactory.createForClass(SampleResult);
