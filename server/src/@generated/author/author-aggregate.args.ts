import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorWhereInput } from './author-where.input';
import { Type } from 'class-transformer';
import { AuthorOrderByWithRelationInput } from './author-order-by-with-relation.input';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AuthorCountAggregateInput } from './author-count-aggregate.input';
import { AuthorMinAggregateInput } from './author-min-aggregate.input';
import { AuthorMaxAggregateInput } from './author-max-aggregate.input';

@ArgsType()
export class AuthorAggregateArgs {

    @Field(() => AuthorWhereInput, {nullable:true})
    @Type(() => AuthorWhereInput)
    where?: AuthorWhereInput;

    @Field(() => [AuthorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AuthorOrderByWithRelationInput>;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    cursor?: AuthorWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AuthorCountAggregateInput, {nullable:true})
    _count?: AuthorCountAggregateInput;

    @Field(() => AuthorMinAggregateInput, {nullable:true})
    _min?: AuthorMinAggregateInput;

    @Field(() => AuthorMaxAggregateInput, {nullable:true})
    _max?: AuthorMaxAggregateInput;
}
