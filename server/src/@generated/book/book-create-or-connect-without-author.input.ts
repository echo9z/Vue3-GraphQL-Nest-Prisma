import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { BookCreateWithoutAuthorInput } from './book-create-without-author.input';

@InputType()
export class BookCreateOrConnectWithoutAuthorInput {

    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    where!: BookWhereUniqueInput;

    @Field(() => BookCreateWithoutAuthorInput, {nullable:false})
    @Type(() => BookCreateWithoutAuthorInput)
    create!: BookCreateWithoutAuthorInput;
}
