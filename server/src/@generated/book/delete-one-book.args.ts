import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneBookArgs {

    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    where!: BookWhereUniqueInput;
}
