import { CreateAuthorInputDto } from './create-author.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAuthorInput extends PartialType(CreateAuthorInputDto) {
  id: string;
}
