import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Base } from './base.schema';
import mongoose, { HydratedDocument, Types } from 'mongoose';

export type SiteDocument = HydratedDocument<Site>;

@Schema({ timestamps: true })
export class Site extends Base {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Disease', required: true })
  disease: mongoose.Schema.Types.ObjectId;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String })
  location: string;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'User', }) // organization member
  assignedTo: mongoose.Schema.Types.ObjectId[] 

}

export const SiteSchema = SchemaFactory.createForClass(Site);
