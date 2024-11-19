import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Base } from './base.schema';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { UserType } from 'src/common/enums/user-type.enum';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User extends Base {

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Organization', default: [] })
    organizations: Types.ObjectId[];

    @Prop({ type: String, required: true })
    name: string;

    @Prop({ type: String })
    address: string;

    @Prop({ type: Number })
    phone: number;

    @Prop({ type: String })
    email: string;

    @Prop({ type: String })
    password: string;

    @Prop({ type: String, enum: UserType })
    type: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
