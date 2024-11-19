import { PartialType } from '@nestjs/mapped-types';
import { CreateSampleResultDto } from './create-sample-result.dto';

export class UpdateSampleResultDto extends PartialType(CreateSampleResultDto) {}
