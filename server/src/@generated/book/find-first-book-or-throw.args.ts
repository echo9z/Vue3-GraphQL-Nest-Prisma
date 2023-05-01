import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { BookOrderByWithRelationInput } from './book-order-by-with-relation.input';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BookScalarFieldEnum } from './book-scalar-field.enum';

@ArgsType()
export class FindFirstBookOrThrowArgs {

    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: BookWhereInput;

    @Field(() => [BookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookOrderByWithRelationInput>;

    @Field(() => BookWhereUniqueInput, {nullable:true})
    cursor?: BookWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BookScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BookScalarFieldEnum>;
}
