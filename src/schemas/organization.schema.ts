import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Base } from './base.schema';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { OrganizationType } from 'src/common/enums/organization-type.enum';

export type OrganizationDocument = HydratedDocument<Organization>;

@Schema({ timestamps: true })
export class Organization extends Base {

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String })
  address: string;

  @Prop({ type: Number })
  phone: number;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String, enum: OrganizationType })
  type: string;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
