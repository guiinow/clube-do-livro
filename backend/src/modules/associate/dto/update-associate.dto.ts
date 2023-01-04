import { PartialType } from '@nestjs/mapped-types';
import { CreateAssociateDto } from './create-associate.dto';

export class UpdateAssociateDto extends PartialType(CreateAssociateDto) {}
