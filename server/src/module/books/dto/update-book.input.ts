import { CreateBookDto } from './create-book.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateBookInput extends PartialType(CreateBookDto) {
  id: string;
}
