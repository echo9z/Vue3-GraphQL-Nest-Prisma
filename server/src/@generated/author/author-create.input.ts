import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Gender } from '../prisma/gender.enum';
import { BookCreateNestedManyWithoutAuthorInput } from '../book/book-create-nested-many-without-author.input';

@InputType()
export class AuthorCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    @Validator.MaxLength(50)
    name!: string;

    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => BookCreateNestedManyWithoutAuthorInput, {nullable:true})
    books?: BookCreateNestedManyWithoutAuthorInput;
}
