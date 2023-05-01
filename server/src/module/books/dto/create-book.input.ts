import { CreateBookInput } from 'src/graphql';
import { IsOptional } from 'class-validator';
export class CreateBookDto extends CreateBookInput {

  @IsOptional()
  name: string;
}
