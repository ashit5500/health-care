import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { StatusType } from 'src/common/enums/status.enum';

export type BaseDocument = HydratedDocument<Base>;

@Schema({ timestamps: true })
export class Base {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  createdBy: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  updatedBy: Types.ObjectId;

  @Prop({ enum: StatusType, default: StatusType.ACTIVE })
  status: number;
}

export const BaseSchema = SchemaFactory.createForClass(Base);
