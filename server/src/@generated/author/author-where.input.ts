import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumGenderFilter } from '../prisma/enum-gender-filter.input';
import { BookListRelationFilter } from '../book/book-list-relation-filter.input';

@InputType()
export class AuthorWhereInput {

    @Field(() => [AuthorWhereInput], {nullable:true})
    AND?: Array<AuthorWhereInput>;

    @Field(() => [AuthorWhereInput], {nullable:true})
    OR?: Array<AuthorWhereInput>;

    @Field(() => [AuthorWhereInput], {nullable:true})
    NOT?: Array<AuthorWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumGenderFilter, {nullable:true})
    gender?: EnumGenderFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => BookListRelationFilter, {nullable:true})
    books?: BookListRelationFilter;
}
