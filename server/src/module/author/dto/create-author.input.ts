import { IsEmail, IsEnum, IsOptional } from 'class-validator';
import { CreateAuthorInput, Gender } from 'src/graphql'
export class CreateAuthorInputDto extends CreateAuthorInput {
  @IsOptional()
  name: string;

  @IsEmail({}, { message: '邮箱格式错误' }) 
  email: string;

  @IsEnum(["MAN", "WOMAN"], {
    message: 'gender只能传入0或1',
  })
  gender?: Gender;
}
