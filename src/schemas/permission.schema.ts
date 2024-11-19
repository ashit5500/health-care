import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Base } from './base.schema';
import mongoose, { HydratedDocument, Types } from 'mongoose';

export type PermissionDocument = HydratedDocument<Permission>;

@Schema({ timestamps: true })
export class Permission extends Base {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Disease', required: true})
  organization: mongoose.Schema.Types.ObjectId;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String })
  access: string;
 
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
