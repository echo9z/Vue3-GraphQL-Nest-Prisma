import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Author } from '../author/author.model';

@ObjectType()
export class Book {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    type!: string | null;

    @Field(() => String, {nullable:true})
    authorId!: string | null;

    @Field(() => Author, {nullable:true})
    author?: Author | null;
}
