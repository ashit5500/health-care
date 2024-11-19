import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Base } from './base.schema';
import mongoose, { HydratedDocument, Types } from 'mongoose';

export type SampleDocument = HydratedDocument<Sample>;

@Schema({ timestamps: true })
export class Sample extends Base {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Disease', required: true })
  disease: mongoose.Schema.Types.ObjectId;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String })
  location: string;
}

export const SampleSchema = SchemaFactory.createForClass(Sample);
